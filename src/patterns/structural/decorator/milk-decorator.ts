import { CoffeeDecorator } from "./coffee-decorator";

export class MilkDecorator extends CoffeeDecorator {
    cost(): number {
      return super.cost() + 10;
    }
  
    description(): string {
      return super.description() + ", Milk";
    }
}