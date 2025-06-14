import { RoundHole } from "./roundhole";
import { RoundPeg } from "./roundpeg";
import { SquarePeg } from "./sqaurepeg";
import { SquarePegAdapter } from "./squarepeg-adapter";

export class AdapterExample {
    demonstrate() {
        const hole = new RoundHole(5);
        const roundPeg = new RoundPeg(5);
        console.log(hole.fits(roundPeg)); // true

        const smallSquarePeg = new SquarePeg(5);
        const largeSquarePeg = new SquarePeg(10);

        const smallAdapter = new SquarePegAdapter(smallSquarePeg);
        const largeAdapter = new SquarePegAdapter(largeSquarePeg);

        console.log(hole.fits(smallAdapter)); // true
        console.log(hole.fits(largeAdapter)); // false

    }
}