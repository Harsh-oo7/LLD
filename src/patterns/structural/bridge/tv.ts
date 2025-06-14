import { Device } from "./device-interface";

export class TV implements Device {
    private on = false;
    private volume = 50;
  
    isOn(): boolean {
      return this.on;
    }
  
    turnOn(): void {
      this.on = true;
      console.log("TV turned ON");
    }
  
    turnOff(): void {
      this.on = false;
      console.log("TV turned OFF");
    }
  
    setVolume(percent: number): void {
      this.volume = percent;
      console.log(`TV volume set to ${percent}%`);
    }
}