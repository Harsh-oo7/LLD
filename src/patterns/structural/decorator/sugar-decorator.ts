import { CoffeeDecorator } from "./coffee-decorator";

export class SugarDecorator extends CoffeeDecorator {
    cost(): number {
      return super.cost() + 5;
    }
  
    description(): string {
      return super.description() + ", Sugar";
    }
}