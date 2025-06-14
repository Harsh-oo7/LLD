import { AddExpression } from "./add-expression";
import { NumberExpression } from "./number-expression";
import { SubtractExpression } from "./subtract-expression";

export class InterpreterExample {
    demonstrate() {
        // Interprets: (5 + 3) - 2
        const five = new NumberExpression(5);
        const three = new NumberExpression(3);
        const two = new NumberExpression(2);

        const add = new AddExpression(five, three); // 5 + 3
        const subtract = new SubtractExpression(add, two); // (5 + 3) - 2

        console.log(subtract.interpret()); // Output: 6

    }
}
