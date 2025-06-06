import { Observer } from "./observer-interface";
import { Subject } from "./subject-interface";

export class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private temperature: number = 0;

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    setTemperature(temp: number): void {
        console.log(`WeatherStation: New temperature is ${temp}°C`);
        this.temperature = temp;
        this.notifyObservers();
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}
