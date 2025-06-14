import { Circle } from "./circle";

export class CircleFactory {
    private circles: Map<string, Circle> = new Map();
  
    getCircle(color: string): Circle {
      if (!this.circles.has(color)) {
        this.circles.set(color, new Circle(color));
        console.log(`Created new ${color} circle.`);
      }
      return this.circles.get(color)!;
    }
}
