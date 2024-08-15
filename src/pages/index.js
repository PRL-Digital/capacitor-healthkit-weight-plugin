import { useEffect } from "react";
import { Capacitor } from "@capacitor/core";

import { CapacitorHealthkit, getBodyMassEntries } from "capacitor-healthkit";

function daysAgo(days) {
  const today = new Date();
  const pastDate = new Date(today.getTime() - days * 24 * 60 * 60 * 1000);
  return pastDate.toISOString();
}

const READ_WRITE_PERMISSIONS = ["weight"];

const queryOptions = {
  startDate: new Date().toISOString(),
  endDate: daysAgo(14),
  limit: 0,
};

const Home = () => {
  const isIos = Capacitor.getPlatform() === "ios";

  useEffect(() => {
    if (isIos) {
      CapacitorHealthkit.requestPermissions(READ_WRITE_PERMISSIONS).then(
        (granted) => {
          if (granted) {
            getBodyMassEntries(queryOptions).then((entries) => {
              console.log(entries);
            });
          }
        }
      );
    }
  }, [isIos]);

  if (isIos) {
    return <div>Not iOS</div>;
  }
};

export default Home;
