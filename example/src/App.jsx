import { useEffect, useState } from 'react';
import { CapacitorHealthKit } from 'capacitor-healthkit-plugin';

function App() {
  const [bodyMassEntries, setBodyMassEntries] = useState([]);
  const [authorizationStatus, setAuthorizationStatus] = useState(null);
  const [weightEntries, setWeightEntries] = useState([]);

  useEffect(() => {
    CapacitorHealthKit.isAvailable().then(setAuthorizationStatus);
  }, []);

  useEffect(() => {
    if (authorizationStatus === 'sharingAuthorized') {
      CapacitorHealthKit.getBodyMassEntries({
        startDate: new Date().toISOString(),
        endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7).toISOString(),
        limit: 10,
      }).then(setBodyMassEntries);
    }
  }, [authorizationStatus]);

  return (
    <div>
      <h1>HealthKit Example</h1>
      <p>This example app shows how to use the HealthKit plugin.</p>
      {authorizationStatus === 'sharingAuthorized' && (
        <div>
          <h2>Body Mass</h2>
          <ul>
            {bodyMassEntries.map((entry) => (
              <li key={entry.uuid}>
                {entry.date}
                <br />
                {entry.value} {entry.unit}
              </li>
            ))}
          </ul>
        </div>
      )}
      {authorizationStatus === 'sharingAuthorized' && (
        <button
          onClick={() => {
            CapacitorHealthKit.requestAuthorization({
              all: ['weight'],
              read: ['weight'],
              write: ['weight'],
            }).then(setAuthorizationStatus);
          }}
        >
          Request Authorization
        </button>
      )}
      {authorizationStatus === 'sharingDenied' && (
        <button
          onClick={() => {
            CapacitorHealthKit.requestAuthorization({
              all: ['weight'],
              read: ['weight'],
              write: ['weight'],
            }).then(setAuthorizationStatus);
          }}
        >
          Request Authorization
        </button>
      )}

      <h2>Body Mass</h2>
      <ul>
        {bodyMassEntries.map((entry) => (
          <li key={entry.uuid}>
            {entry.date}
            <br />
            {entry.value} {entry.unit}
          </li>
        ))}
      </ul>

      <h2>Weight</h2>
      <ul>
        {weightEntries.map((entry) => (
          <li key={entry.uuid}>
            {entry.date}
            <br />
            {entry.value} {entry.unit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
