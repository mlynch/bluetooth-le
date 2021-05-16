import { BleDevice, BluetoothLePlugin, RequestBleDeviceOptions } from '../../src/definitions';
import { BluetoothLeWeb } from '../../src/web';

export class BluetoothLeElectron extends BluetoothLeWeb implements BluetoothLePlugin {
  async requestLEScan(options?: RequestBleDeviceOptions): Promise<void> {
    console.log('BluetoothLeElectron: Calling custom scan', options);
  }
  async requestDevice(_options?: RequestBleDeviceOptions): Promise<BleDevice> {
    return {
      deviceId: 'fake'
    }
  }
}