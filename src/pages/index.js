import { useEffect } from "react";
import { Capacitor } from "@capacitor/core";

const READ_WRITE_PERMISSIONS = ["weight"];

const Home = () => {
  const isIos = Capacitor.getPlatform() === "ios";

  useEffect(() => {
    if (isIos) {
      console.log("ios");
    }
  }, [isIos]);

  if (isIos) {
    return <div>Not iOS</div>;
  }
};

export default Home;
