import { ParkingSlot } from './parking-slot';
import { Vehicle } from './vehicle';

export class Ticket {
  ticketNumber: string;
  startTime: number;
  endTime?: number;
  vehicle: Vehicle;
  parkingSlot: ParkingSlot;

  constructor(
    ticketNumber: string,
    startTime: number,
    vehicle: Vehicle,
    parkingSlot: ParkingSlot,
    endTime?: number
  ) {
    this.ticketNumber = ticketNumber;
    this.startTime = startTime;
    this.vehicle = vehicle;
    this.parkingSlot = parkingSlot;
    this.endTime = endTime;
  }

  static createTicket(vehicle: Vehicle, parkingSlot: ParkingSlot): Ticket {
    const startTime = Date.now();
    const ticketNumber = `${vehicle.getVehicleNumber()}${startTime}`;
    return new Ticket(ticketNumber, startTime, vehicle, parkingSlot);
  }

  public getVehicle(): Vehicle {
    return this.vehicle;
  }

  public getStartTime(): number {
    return this.startTime;
  }

  public getParkingSlot(): ParkingSlot {
    return this.parkingSlot;
  }
  
}
