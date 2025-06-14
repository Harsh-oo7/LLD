import { RoundPeg } from "./roundpeg";
import { SquarePeg } from "./sqaurepeg";

export class SquarePegAdapter extends RoundPeg {
    private squarePeg: SquarePeg;
  
    constructor(squarePeg: SquarePeg) {
      // Call super with the "equivalent radius" of the square peg
      super(squarePeg.getWidth() * Math.SQRT2 / 2); // Diagonal / 2 = radius
      this.squarePeg = squarePeg;
    }
}
  