import { AbstractApprover } from "./abstract-approver";

export class TeamLead extends AbstractApprover {
    approve(amount: number): void {
      if (amount <= 500) {
        console.log(`TeamLead approved ₹${amount}`);
      } else {
        console.log(`TeamLead: Can't approve ₹${amount}. Passing to Manager.`);
        this.passToNext(amount);
      }
    }
}