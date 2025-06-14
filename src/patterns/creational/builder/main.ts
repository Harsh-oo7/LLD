import { VegBurgerBuilder } from "./veg-burger-builder";

export class BuilderExample {
    demonstrate() {
        const vegBurger = new VegBurgerBuilder()
            .addBun()
            .addPatty()
            .addCheese()
            .addSauce()
            .build();

        vegBurger.show(); // Burger with: Bun, Veg Patty, Cheese, Sauce

    }
}
