import { FanContext } from "./fan-context";
import { LowSpeedState } from "./low-speed-state";
import { FanState } from "./state-interface";

export class OffState implements FanState {
    pressButton(fan: FanContext): void {
      console.log("Turning fan to LOW speed.");
      fan.setState(new LowSpeedState());
    }
}