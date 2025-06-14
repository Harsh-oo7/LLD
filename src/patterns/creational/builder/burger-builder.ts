import { Burger } from "./burger";

export interface BurgerBuilder {
    addBun(): this;
    addPatty(): this;
    addCheese(): this;
    addLettuce(): this;
    addSauce(): this;
    build(): Burger;
}
  