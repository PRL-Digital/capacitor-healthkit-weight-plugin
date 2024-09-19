import { W as WebPlugin } from './index-BHJLa8Sb.js';
class CapacitorHealthkitWeb extends WebPlugin {
  async requestAuthorization(_options) {
    throw new Error('Not available on web');
  }
  async isAvailable() {
    throw new Error('Not available on web');
  }
  async getAuthorizationStatus(_options) {
    throw new Error('Not available on web');
  }
  async getBodyMassEntries(_options) {
    throw new Error('Not available on web');
  }
  async setBodyMassEntry(_options) {
    throw new Error('Not available on web');
  }
}
export { CapacitorHealthkitWeb };
