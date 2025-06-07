import { Circle } from "./circle";
import { Shape } from "./shape-interface";
import { Square } from "./sqaure";
import { Triangle } from "./triangle";

export class ShapeFactory {
    static createShape(type: string): Shape {
      switch (type.toLowerCase()) {
        case "circle":
          return new Circle();
        case "square":
          return new Square();
        case "triangle":
          return new Triangle();
        default:
          throw new Error("Unknown shape type");
      }
    }
  }
  