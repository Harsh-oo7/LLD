import { VehicleType } from "./vehicle-type";

export class Vehicle {
    private vehicleNumber: string;
    private vehicleType: VehicleType;

    constructor(vehicleNumber: string, vehicleType: VehicleType) {
        this.vehicleNumber = vehicleNumber;
        this.vehicleType = vehicleType;
    }

    public getVehicleNumber(): string {
        return this.vehicleNumber;
    }

    public getVehicleType(): VehicleType {
        return this.vehicleType;
    }
}
