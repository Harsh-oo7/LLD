// Example demonstrating basic classes, inheritance, and polymorphism

// Abstract base class
abstract class Vehicle {
    protected brand: string;
    protected model: string;
    protected year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Abstract method - must be implemented by subclasses
    abstract start(): string;

    // Concrete method - can be used by all subclasses
    getInfo(): string {
        return `${this.year} ${this.brand} ${this.model}`;
    }

    // Virtual method - can be overridden
    stop(): string {
        return `${this.getInfo()} has stopped.`;
    }
}

// Concrete implementation
class Car extends Vehicle {
    private fuelType: string;

    constructor(brand: string, model: string, year: number, fuelType: string) {
        super(brand, model, year);
        this.fuelType = fuelType;
    }

    start(): string {
        return `${this.getInfo()} (${this.fuelType}) engine started with ignition key.`;
    }

    // Method overriding
    stop(): string {
        return `${this.getInfo()} stopped and parked safely.`;
    }
}

class Motorcycle extends Vehicle {
    private engineSize: number;

    constructor(brand: string, model: string, year: number, engineSize: number) {
        super(brand, model, year);
        this.engineSize = engineSize;
    }

    start(): string {
        return `${this.getInfo()} with ${this.engineSize}cc engine started with kick start.`;
    }
}

// Interface demonstration
interface Flyable {
    fly(): string;
    land(): string;
}

class FlyingCar extends Car implements Flyable {
    constructor(brand: string, model: string, year: number, fuelType: string) {
        super(brand, model, year, fuelType);
    }

    fly(): string {
        return `${this.getInfo()} is now flying!`;
    }

    land(): string {
        return `${this.getInfo()} has landed safely.`;
    }
}

export class VehicleExample {
    demonstrate(): void {
        console.log('Creating different vehicles...\n');

        // Create instances
        const car = new Car('Toyota', 'Camry', 2023, 'Gasoline');
        const motorcycle = new Motorcycle('Harley Davidson', 'Street 750', 2023, 750);
        const flyingCar = new FlyingCar('Future Motors', 'SkyDrive', 2030, 'Electric');

        // Demonstrate polymorphism
        const vehicles: Vehicle[] = [car, motorcycle, flyingCar];

        vehicles.forEach(vehicle => {
            console.log(`ℹ️  Info: ${vehicle.getInfo()}`);
            console.log(`🚀 Start: ${vehicle.start()}`);
            console.log(`🛑 Stop: ${vehicle.stop()}`);
            
            // Type checking and interface usage
            if (vehicle instanceof FlyingCar) {
                console.log(`✈️  Fly: ${vehicle.fly()}`);
                console.log(`🛬 Land: ${vehicle.land()}`);
            }
            console.log('---');
        });
    }
} 