import { Shape } from "./shape-interface";

export class Circle implements Shape {
    draw(): void {
      console.log("Drawing a Circle 🟠");
    }
}
