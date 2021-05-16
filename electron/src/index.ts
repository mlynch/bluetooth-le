import { WebPlugin } from '@capacitor/core';
import { BleDevice, BluetoothLePlugin, BooleanResult, DeviceIdOptions, ReadOptions, ReadResult, RequestBleDeviceOptions, WriteOptions } from '../../src/definitions';

export class BluetoothLeElectron extends WebPlugin implements BluetoothLePlugin {
  async initialize(): Promise<void> {
  }
  async getEnabled(): Promise<BooleanResult> {
    return {
      value: true
    }
  }
  async startEnabledNotifications(): Promise<void> {
  }
  async stopEnabledNotifications(): Promise<void> {
  }
  async requestDevice(_options?: RequestBleDeviceOptions): Promise<BleDevice> {
    console.log('BLE ELECTRON: REQUESTING DEVICE');

    return {
      deviceId: 'fake'
    }
  }
  async requestLEScan(_options?: RequestBleDeviceOptions): Promise<void> {
  }
  async stopLEScan(): Promise<void> {

  }
  async connect(_options: DeviceIdOptions): Promise<void> {
  }
  async createBond(_options: DeviceIdOptions): Promise<void> {
  }
  async isBonded(_options: DeviceIdOptions): Promise<BooleanResult> {
    return {
      value: false
    }
  }
  async disconnect(_options: DeviceIdOptions): Promise<void> {
  }
  async read(_options: ReadOptions): Promise<ReadResult> {
    return {
    }
  }
  async write(_options: WriteOptions): Promise<void> {
  }
  async writeWithoutResponse(_options: WriteOptions): Promise<void> {
  }
  async startNotifications(_options: ReadOptions): Promise<void> {
  }
  async stopNotifications(_options: ReadOptions): Promise<void> {
  }
}