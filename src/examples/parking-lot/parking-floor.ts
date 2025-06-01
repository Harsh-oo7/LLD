import { ParkingSlot } from "./parking-slot";
import { ParkingSlotType } from "./parking-slow-type";
import { Vehicle } from "./vehicle";
import { VehicleType } from "./vehicle-type";

export class ParkingFloor {
    private name: string;
    private parkingSlots: Map<ParkingSlotType, Map<string, ParkingSlot>>;

    constructor(name: string, parkingSlots: Map<ParkingSlotType, Map<string, ParkingSlot>>) {
        this.name = name;
        this.parkingSlots = parkingSlots;
    }

    public getName(): string {
        return this.name;
    }

    getRelevantSlotForVehicleAndPark(vehicle: Vehicle): ParkingSlot | null {
        const vehicleType = vehicle.getVehicleType(); // or vehicle.vehicleCategory if it's a property
        const parkingSlotType = this.pickCorrectSlot(vehicleType);
      
        const relevantParkingSlots = this.parkingSlots.get(parkingSlotType); // Map<string, ParkingSlot>
        let slot: ParkingSlot | null = null;
      
        if (relevantParkingSlots) {
          for (const [_, parkingSlot] of relevantParkingSlots.entries()) {
            if (parkingSlot.getIsAvailable()) {
              slot = parkingSlot;
              slot.addVehicle(vehicle);
              break;
            }
          }
        }
      
        return slot;
      }

    private pickCorrectSlot(vehicleType: VehicleType): ParkingSlotType {
        switch(vehicleType) {
            case VehicleType.TwoWheeler:
                return ParkingSlotType.TwoWheeler;
            case VehicleType.Compact:
                return ParkingSlotType.Compact;
            case VehicleType.Medium:
                return ParkingSlotType.Medium;
            case VehicleType.Large:
                return ParkingSlotType.Large;
            default:
                throw new Error(`Invalid vehicle type: ${vehicleType}`);
        }
    }
}