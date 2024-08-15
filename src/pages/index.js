import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";

import { CapacitorHealthkit } from "capacitor-healthkit";

// function daysAgo(days) {
//   const today = new Date();
//   const pastDate = new Date(today.getTime() - days * 24 * 60 * 60 * 1000);
//   return pastDate.toISOString();
// }

const READ_WRITE_PERMISSIONS = ["weight"];

// const queryOptions = {
//   startDate: new Date().toISOString(),
//   endDate: daysAgo(14),
//   limit: 0,
// };

const Home = () => {
  const isIos = Capacitor.getPlatform() === "ios";

  const [whatIsDevice, setWhatIsDevice] = useState("");

  useEffect(() => {
    if (isIos) {
      setWhatIsDevice(isIos);

      CapacitorHealthkit.requestAuthorization(READ_WRITE_PERMISSIONS).then(
        (granted) => {
          if (granted) {
            // CapacitorHealthkit.getBodyMassEntries(queryOptions).then(
            //   (entries) => {
            //     console.log(entries);
            //   }
            // );
            console.log("granted");
          } else {
            console.log("not granted");
          }
        }
      );
    }
  }, [isIos]);

  if (whatIsDevice) {
    return <div>Is iOS</div>;
  }

  return <div>Not iOS</div>;
};

export default Home;
