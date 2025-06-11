import { FanContext } from "./fan-context";

export interface FanState {
    pressButton(fan: FanContext): void;
}
  