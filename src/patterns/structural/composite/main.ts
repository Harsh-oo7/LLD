import { Designer } from "./designer";
import { Developer } from "./developer";
import { Manager } from "./manager";

export class CompositeExample {
    demonstrate() {
        const dev1 = new Developer("Alice", "Frontend Dev");
        const dev2 = new Developer("Bob", "Backend Dev");
        const designer = new Designer("Charlie");

        const teamLead = new Manager("David");
        teamLead.add(dev1);
        teamLead.add(dev2);
        teamLead.add(designer);

        const director = new Manager("Evelyn");
        director.add(teamLead);

        console.log("Company Structure:");
        director.showDetails();

    }
}
