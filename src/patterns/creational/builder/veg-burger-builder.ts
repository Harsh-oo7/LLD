import { Burger } from "./burger";
import { BurgerBuilder } from "./burger-builder";

export class VegBurgerBuilder implements BurgerBuilder {
    private burger: Burger;
  
    constructor() {
      this.burger = new Burger();
    }
  
    addBun(): this {
      this.burger.addIngredient("Bun");
      return this;
    }
  
    addPatty(): this {
      this.burger.addIngredient("Veg Patty");
      return this;
    }
  
    addCheese(): this {
      this.burger.addIngredient("Cheese");
      return this;
    }
  
    addLettuce(): this {
      this.burger.addIngredient("Lettuce");
      return this;
    }
  
    addSauce(): this {
      this.burger.addIngredient("Sauce");
      return this;
    }
  
    build(): Burger {
      return this.burger;
    }
}
  