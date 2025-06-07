import { Manager } from "./manager";
import { TeamLead } from "./team-lead";
import { Director } from "./director";

export class ChainOfResponsibilityExample {
    demonstrate() {
        const teamLead = new TeamLead();
        const manager = new Manager();
        const director = new Director();

        teamLead.setNext(manager).setNext(director);

        // Test different amounts
        teamLead.approve(300);  // TeamLead approved ₹300
        teamLead.approve(800);  // TeamLead: Can't approve ₹800. Manager approved ₹800
        teamLead.approve(1500); // Passed through all → Director approved ₹1500
    }
}