import { Coffee } from "./coffee-interface";
import { MilkDecorator } from "./milk-decorator";
import { SimpleCoffee } from "./simple-coffee";
import { SugarDecorator } from "./sugar-decorator";
import { WhipDecorator } from "./whip-decorator";

export class DecoratorExample {

    demonstrate() {
        let myCoffee: Coffee = new SimpleCoffee();
        console.log(myCoffee.description(), "=> ₹" + myCoffee.cost());
        // Output: Simple Coffee => ₹50

        myCoffee = new MilkDecorator(myCoffee);
        console.log(myCoffee.description(), "=> ₹" + myCoffee.cost());
        // Output: Simple Coffee, Milk => ₹60

        myCoffee = new SugarDecorator(myCoffee);
        console.log(myCoffee.description(), "=> ₹" + myCoffee.cost());
        // Output: Simple Coffee, Milk, Sugar => ₹65

        myCoffee = new WhipDecorator(myCoffee);
        console.log(myCoffee.description(), "=> ₹" + myCoffee.cost());
        // Output: Simple Coffee, Milk, Sugar, Whip => ₹80

    }
}