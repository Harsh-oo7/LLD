import { ParkingSlotType } from "./parking-slow-type";
import { Vehicle } from "./vehicle";

export class ParkingSlot {
    private name: string;
    private isAvailable: boolean;
    private vehicle: Vehicle | undefined;
    private parkingSlotType: ParkingSlotType;

    constructor(name: string, parkingSlotType: ParkingSlotType) {
        this.name = name;
        this.isAvailable = true;
        this.parkingSlotType = parkingSlotType;
    }

    public getName(): string {
        return this.name;
    }
    
    addVehicle(vehicle: Vehicle) {
        this.vehicle = vehicle;
        this.isAvailable = false;
    }
    
    removeVehicle() {
        this.vehicle = undefined;
        this.isAvailable = true;
    }

    getVehicle(): Vehicle | undefined {
        return this.vehicle;
    }

    getIsAvailable(): boolean {
        return this.isAvailable;
    }

    getParkingSlotType(): ParkingSlotType {
        return this.parkingSlotType;
    }
}