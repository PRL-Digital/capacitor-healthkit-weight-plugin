import React, { useEffect, useState } from 'react';
import { CapacitorHealthKit } from 'capacitor-healthkit-plugin';

function App() {
  const [weightEntries, setWeightEntries] = useState([]);
  const [authorizationStatus, setAuthorizationStatus] = useState(null);

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
      const result = await CapacitorHealthKitPlugin.getWeightEntries({
        startDate,
        endDate,
        limit: 10,
      });
      setWeightEntries(result.data);
    } catch (error) {
      console.error('Error fetching weight entries:', error);
    }
  };

  return (
    <div>
      <h1>HealthKit Weight Tracker</h1>
      <p>This app shows your recent weight entries from HealthKit.</p>

      {authorizationStatus !== 'sharingAuthorized' && (
        <button onClick={requestAuthorization}>Request HealthKit Authorization</button>
      )}

      {authorizationStatus === 'sharingAuthorized' && (
        <div>
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
