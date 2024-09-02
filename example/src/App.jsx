import React, { useEffect, useState } from 'react';
import { CapacitorHealthKit } from 'capacitor-healthkit-weight-plugin';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

function App() {
  const [weightEntries, setWeightEntries] = useState([]);
  const [authorizationStatus, setAuthorizationStatus] = useState(null);
  const [newWeight, setNewWeight] = useState('');
  const [newDate, setNewDate] = useState('');

  useEffect(() => {
    checkAuthorizationStatus();
  }, []);

  useEffect(() => {
    if (authorizationStatus === 'sharingAuthorized') {
      fetchWeightEntries();
    }
  }, [authorizationStatus]);

  const checkAuthorizationStatus = async () => {
    try {
      const result = await CapacitorHealthKit.getAuthorizationStatus({
        sampleType: 'weight',
      });
      console.log(result);
      setAuthorizationStatus(result.status);
    } catch (error) {
      console.error('Error checking authorization status:', error);
    }
  };

  const requestAuthorization = async () => {
    try {
      await CapacitorHealthKit.requestAuthorization({
        all: ['weight'],
        read: ['weight'],
        write: ['weight'],
      });
      checkAuthorizationStatus();
    } catch (error) {
      console.error('Error requesting authorization:', error);
    }
  };

  const fetchWeightEntries = async () => {
    try {
      const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(); // Last 30 days
      const endDate = new Date().toISOString();
      const result = await CapacitorHealthKit.getBodyMassEntries({
        startDate,
        endDate,
        limit: 10,
      });
      console.log(result);
      setWeightEntries(result.data);
    } catch (error) {
      console.error('Error fetching weight entries:', error);
    }
  };

  const addWeightEntry = async (e) => {
    e.preventDefault();
    if (!newWeight || !newDate) {
      alert('Please enter both weight and date');
      return;
    }
    try {
      await CapacitorHealthKit.setBodyMassEntry({
        value: parseFloat(newWeight),
        date: new Date(newDate).toISOString(),
      });
      alert('Weight entry added successfully');
      setNewWeight('');
      setNewDate('');
      fetchWeightEntries(); // Refresh the list
    } catch (error) {
      console.error('Error adding weight entry:', error);
      alert('Failed to add weight entry');
    }
  };

  return (
    <div>
      <h1>HealthKit Weight Tracker</h1>
      <p>This app shows your recent weight entries from HealthKit and allows you to add new entries.</p>

      {authorizationStatus !== 'sharingAuthorized' && (
        <button onClick={requestAuthorization}>Request HealthKit Authorization</button>
      )}

      {authorizationStatus === 'sharingAuthorized' && (
        <div>
          <h2>Add New Weight Entry</h2>
          <form onSubmit={addWeightEntry} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="weight" style={styles.label}>
                Weight (kg):
              </label>
              <input
                id="weight"
                type="number"
                step="0.1"
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
                placeholder="Enter weight"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="date" style={styles.label}>
                Date and Time:
              </label>
              <input
                id="date"
                type="datetime-local"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>
              Add Weight Entry
            </button>
          </form>

          <h2>Weight Entries</h2>
          {weightEntries.length === 0 ? (
            <p>No weight entries found for the last 30 days.</p>
          ) : (
            <ul>
              {weightEntries.map((entry) => (
                <li key={entry.uuid}>
                  Date: {new Date(entry.date).toLocaleString()}
                  <br />
                  Weight: {entry.value} {entry.unit}
                  <br />
                  Source: {entry.sourceName}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
