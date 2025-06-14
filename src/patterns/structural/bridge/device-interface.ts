export interface Device {
    isOn(): boolean;
    turnOn(): void;
    turnOff(): void;
    setVolume(percent: number): void;
}
  