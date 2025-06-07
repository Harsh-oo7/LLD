import { ShapeFactory } from "./shape-factory";

export class FactoryExample {
    demonstrate() {
        const shape1 = ShapeFactory.createShape("circle");
        shape1.draw(); // Output: Drawing a Circle 🟠

        const shape2 = ShapeFactory.createShape("square");
        shape2.draw(); // Output: Drawing a Square ⬛

        const shape3 = ShapeFactory.createShape("triangle");
        shape3.draw(); // Output: Drawing a Triangle 🔺

    }
}
