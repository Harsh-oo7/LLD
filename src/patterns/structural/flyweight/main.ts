import { CircleFactory } from "./circle-factory";

export class FlyweightExample {
    demonstrate() {
        const factory = new CircleFactory();

        const redCircle1 = factory.getCircle("red");
        redCircle1.draw(10, 20, 5);

        const redCircle2 = factory.getCircle("red");
        redCircle2.draw(50, 80, 10);

        const blueCircle = factory.getCircle("blue");
        blueCircle.draw(15, 25, 8);

        /*
        Output:
        Created new red circle.
        Drawing a red circle at (10, 20) with radius 5
        Drawing a red circle at (50, 80) with radius 10
        Created new blue circle.
        Drawing a blue circle at (15, 25) with radius 8
        */

    }
}
