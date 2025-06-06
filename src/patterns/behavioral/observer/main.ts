import { LEDDisplay } from "./led-display";
import { MobileDisplay } from "./mobile-display";
import { WeatherStation } from "./weather-station";


export class ObserverExample {
    demonstrate() {
        const station = new WeatherStation();

        const mobile = new MobileDisplay();
        const led = new LEDDisplay();

        station.addObserver(mobile);
        station.addObserver(led);

        station.setTemperature(30);
        // Output:
        // WeatherStation: New temperature is 30°C
        // MobileDisplay: Updated temperature is 30°C
        // LEDDisplay: Temperature changed to 30°C

        station.setTemperature(35);
        // Output:
        // WeatherStation: New temperature is 35°C
        // MobileDisplay: Updated temperature is 35°C
        // LEDDisplay: Temperature changed to 35°C
    }
}