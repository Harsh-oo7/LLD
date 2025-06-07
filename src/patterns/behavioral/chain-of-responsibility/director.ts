import { AbstractApprover } from "./abstract-approver";

export class Director extends AbstractApprover {
    approve(amount: number): void {
      console.log(`Director approved ₹${amount}`);
    }
}