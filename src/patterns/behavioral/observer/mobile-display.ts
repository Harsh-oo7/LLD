import { Observer } from "./observer-interface";

export class MobileDisplay implements Observer {
    update(temperature: number): void {
        console.log(`MobileDisplay: Updated temperature is ${temperature}°C`);
    }
}