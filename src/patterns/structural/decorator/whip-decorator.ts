import { CoffeeDecorator } from "./coffee-decorator";

export class WhipDecorator extends CoffeeDecorator {
    cost(): number {
      return super.cost() + 15;
    }
  
    description(): string {
      return super.description() + ", Whip";
    }
}
  