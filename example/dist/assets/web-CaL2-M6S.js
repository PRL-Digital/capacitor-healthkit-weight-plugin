import { W as WebPlugin } from "./index-CBE5CC0E.js";
class CapacitorHealthKitWeb extends WebPlugin {
  async requestAuthorization(_options) {
    throw new Error("Not available on web");
  }
  async isAvailable() {
    throw new Error("Not available on web");
  }
  async getAuthorizationStatus(_options) {
    throw new Error("Not available on web");
  }
  async getBodyMassEntries(_options) {
    throw new Error("Not available on web");
  }
}
export {
  CapacitorHealthKitWeb
};