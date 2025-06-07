import { Approver } from "./approver-interface";

export abstract class AbstractApprover implements Approver {
    private nextApprover: Approver | null = null;
  
    setNext(approver: Approver): Approver {
      this.nextApprover = approver;
      return approver;
    }
  
    protected passToNext(amount: number): void {
      if (this.nextApprover) {
        this.nextApprover.approve(amount);
      } else {
        console.log("No one can approve this request.");
      }
    }
  
    abstract approve(amount: number): void;
}
