import { RoundPeg } from "./roundpeg";

export class RoundHole {
    constructor(private radius: number) {}
  
    fits(peg: RoundPeg): boolean {
      return peg.getRadius() <= this.radius;
    }
}