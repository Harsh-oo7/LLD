import { Expression } from "./expression";

export class AddExpression implements Expression {
    constructor(private left: Expression, private right: Expression) {}
  
    interpret(): number {
      return this.left.interpret() + this.right.interpret();
    }
}
