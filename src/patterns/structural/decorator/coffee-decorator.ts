import { Coffee } from "./coffee-interface";

export class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;
  
    constructor(coffee: Coffee) {
      this.coffee = coffee;
    }
  
    cost(): number {
      return this.coffee.cost();
    }
  
    description(): string {
      return this.coffee.description();
    }
}
  