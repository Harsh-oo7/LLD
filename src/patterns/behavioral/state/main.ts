import { FanContext } from "./fan-context";

export class StateDemo {
    demonstrate() {
        const fan = new FanContext();
        fan.pressButton(); // Turning fan to LOW speed.
        fan.pressButton(); // Turning fan to HIGH speed.
        fan.pressButton(); // Turning fan OFF.
        fan.pressButton(); // Turning fan to LOW speed.
    }
}