export class Dice {
    private numberOfSides: number;

    constructor(numberOfSides: number) {
        this.numberOfSides = numberOfSides;
    }

    public roll(): number {
        return Math.floor(Math.random() * this.numberOfSides) + 1;
    }
}
