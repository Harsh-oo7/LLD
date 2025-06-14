import { RemoteControl } from "./remote-control";

export class SmartRemote extends RemoteControl {
    mute(): void {
      this.device.setVolume(0);
      console.log("Muted device");
    }
}
  