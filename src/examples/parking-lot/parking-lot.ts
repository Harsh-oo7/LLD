import { Address } from "./address";
import { ParkingFloor } from "./parking-floor";
import { ParkingSlot } from "./parking-slot";
import { ParkingSlotType } from "./parking-slow-type";
import { Ticket } from "./ticket";
import { Vehicle } from "./vehicle";

export class ParkingLot {
    private nameOfParkingLot: string;
    private address: Address;
    private parkingFloors: ParkingFloor[];
    private static parkingLot: ParkingLot;

    constructor(nameOfParkingLot: string, address: Address, parkingFloors: ParkingFloor[]) {
        this.nameOfParkingLot = nameOfParkingLot;
        this.address = address;
        this.parkingFloors = parkingFloors;
    }

    public getNameOfParkingLot(): string {
        return this.nameOfParkingLot;
    }

    public getAddress(): Address {
        return this.address;
    }

    public static getInstance(nameOfParkingLot: string, address: Address, parkingFloors: ParkingFloor[]): ParkingLot {
        if(this.parkingLot == null) {
            this.parkingLot = new ParkingLot(nameOfParkingLot, address, parkingFloors);
        }
        return this.parkingLot;
    }

    public addFloors(name: string, parkingSlots: Map<ParkingSlotType, Map<string, ParkingSlot>>) {
        const parkingFloor: ParkingFloor = new ParkingFloor(name, parkingSlots);
        this.parkingFloors.push(parkingFloor);
    }

    public removeFloors(parkingFloor: ParkingFloor) {
        this.parkingFloors = this.parkingFloors.filter(floor => floor.getName() !== parkingFloor.getName());
    }

    private getParkingSlotForVehicleAndPark(vehicle: Vehicle): ParkingSlot | null {
        for(const parkingFloor of this.parkingFloors) {
            const parkingSlot: ParkingSlot | null = parkingFloor.getRelevantSlotForVehicleAndPark(vehicle);
            if(parkingSlot) {
                return parkingSlot;
            }
        }
        return null;
    }

    private createTicketForSlot(parkingSlot: ParkingSlot, vehicle: Vehicle): Ticket {
        const ticket: Ticket = Ticket.createTicket(vehicle, parkingSlot);
        return ticket;
    }

    public scanAndPay(ticket: Ticket) {
        const endTime: number = Date.now();
        ticket.getParkingSlot().removeVehicle();
        const duration: number = (endTime - ticket.getStartTime())/1000;
        const price: number = ticket.getParkingSlot().getParkingSlotType().getPriceForParking(duration);
        return price;
    }

    public assignTicket(vehicle: Vehicle) {
        const parkingSlot: ParkingSlot | null = this.getParkingSlotForVehicleAndPark(vehicle);
        if(parkingSlot == null) {
            return null;
        }
        const ticket: Ticket = this.createTicketForSlot(parkingSlot, vehicle);
        return ticket;
    }
    
}