import { Shape } from "./shape-interface";

export class Triangle implements Shape {
    draw(): void {
      console.log("Drawing a Triangle 🔺");
    }
}
