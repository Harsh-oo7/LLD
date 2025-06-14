import { Expression } from "./expression";

export class NumberExpression implements Expression {
    constructor(private value: number) {}
  
    interpret(): number {
      return this.value;
    }
}
