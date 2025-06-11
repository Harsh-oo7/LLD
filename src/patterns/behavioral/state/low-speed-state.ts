import { FanContext } from "./fan-context";
import { HighSpeedState } from "./high-speed-state";
import { FanState } from "./state-interface";

export class LowSpeedState implements FanState {
    pressButton(fan: FanContext): void {
      console.log("Turning fan to HIGH speed.");
      fan.setState(new HighSpeedState());
    }
}