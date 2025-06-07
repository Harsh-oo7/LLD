export interface Approver {
    setNext(approver: Approver): Approver;
    approve(amount: number): void;
}
