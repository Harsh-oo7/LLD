export class Jumper {
    private startPosition: number;
    private endPosition: number;

    constructor(startPosition: number, endPosition: number) {
        this.startPosition = startPosition;
        this.endPosition = endPosition;
    }

    public getStart(): number {
        return this.startPosition;
    }

    public getEnd(): number {
        return this.endPosition;
    }

}