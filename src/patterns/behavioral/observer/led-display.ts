import { Observer } from "./observer-interface";

export class LEDDisplay implements Observer {
    update(temperature: number): void {
        console.log(`LEDDisplay: Temperature changed to ${temperature}°C`);
    }
}