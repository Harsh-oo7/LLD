import { Shape } from "./shape-interface";

export class Square implements Shape {
    draw(): void {
      console.log("Drawing a Square ⬛");
    }
}
