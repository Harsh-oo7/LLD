import { AbstractApprover } from "./abstract-approver";

export class Manager extends AbstractApprover {
    approve(amount: number): void {
      if (amount <= 1000) {
        console.log(`Manager approved ₹${amount}`);
      } else {
        console.log(`Manager: Can't approve ₹${amount}. Passing to Director.`);
        this.passToNext(amount);
      }
    }
}