import { Address } from "./address";
import { ParkingFloor } from "./parking-floor";
import { ParkingLot } from "./parking-lot";
import { ParkingSlot } from "./parking-slot";
import { ParkingSlotType } from "./parking-slow-type";
import { Ticket } from "./ticket";
import { Vehicle } from "./vehicle";
import { VehicleType } from "./vehicle-type";

export class ParkingMain {
    main() {
        // --- Setup Address ---
        const nameOfParkingLot = "Pintosss Parking Lot";

        const address: Address = new Address("123 Main St", "New York", "NY", "10001");

        // --- Setup Parking Slots ---
        const allSlots = new Map<ParkingSlotType, Map<string, ParkingSlot>>();

        // Compact Slots
        const compactSlots = new Map<string, ParkingSlot>();
        compactSlots.set("C1", new ParkingSlot("C1", ParkingSlotType.Compact));
        compactSlots.set("C2", new ParkingSlot("C2", ParkingSlotType.Compact));
        compactSlots.set("C3", new ParkingSlot("C3", ParkingSlotType.Compact));
        allSlots.set(ParkingSlotType.Compact, compactSlots);

        // Large Slots
        const largeSlots = new Map<string, ParkingSlot>();
        largeSlots.set("L1", new ParkingSlot("L1", ParkingSlotType.Large));
        largeSlots.set("L2", new ParkingSlot("L2", ParkingSlotType.Large));
        largeSlots.set("L3", new ParkingSlot("L3", ParkingSlotType.Large));
        allSlots.set(ParkingSlotType.Large, largeSlots);

        // --- Setup Parking Floor ---
        const parkingFloor = new ParkingFloor("1", allSlots);
        const parkingFloors: ParkingFloor[] = [parkingFloor];

        // --- Setup Parking Lot (Singleton) ---
        const parkingLot = ParkingLot.getInstance(nameOfParkingLot, address, parkingFloors);

        // --- Setup Vehicle ---
        const vehicle = new Vehicle("KA-01-MA-9999", VehicleType.Compact);

        // --- Assign Ticket ---
        const ticket: Ticket | null = parkingLot.assignTicket(vehicle);
        console.log("Ticket number >>", ticket?.ticketNumber);

        // --- Wait for 10 seconds then calculate price ---
        setTimeout(() => {
            if(ticket) {
                const price = parkingLot.scanAndPay(ticket);
                console.log("Price is >>", price);
                // persist ticket here
            }
        }, 10000);

    }
}
