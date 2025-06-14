import { Device } from "./device-interface";

export class RemoteControl {
    constructor(protected device: Device) {}
  
    togglePower(): void {
      if (this.device.isOn()) {
        this.device.turnOff();
      } else {
        this.device.turnOn();
      }
    }
  
    volumeUp(): void {
      this.device.setVolume(80);
    }
}
  