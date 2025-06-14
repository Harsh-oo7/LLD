import { Device } from "./device-interface";

export class Radio implements Device {
    private on = false;
    private volume = 30;
  
    isOn(): boolean {
      return this.on;
    }
  
    turnOn(): void {
      this.on = true;
      console.log("Radio turned ON");
    }
  
    turnOff(): void {
      this.on = false;
      console.log("Radio turned OFF");
    }
  
    setVolume(percent: number): void {
      this.volume = percent;
      console.log(`Radio volume set to ${percent}%`);
    }
}