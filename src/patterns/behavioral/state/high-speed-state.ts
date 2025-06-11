import { FanContext } from "./fan-context";
import { OffState } from "./off-state";
import { FanState } from "./state-interface";

export class HighSpeedState implements FanState {
    pressButton(fan: FanContext): void {
      console.log("Turning fan OFF.");
      fan.setState(new OffState());
    }
}