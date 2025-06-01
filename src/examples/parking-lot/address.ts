export class Address {
    private street: string;
    private city: string;
    private state: string;
    private zipCode: string;

    constructor(street: string, city: string, state: string, zipCode: string) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }

    getStreet(): string {
        return this.street;
    }

    getCity(): string {
        return this.city;
    }

    getState(): string {
        return this.state;
    }

    getZipCode(): string {
        return this.zipCode;
    }
    
}