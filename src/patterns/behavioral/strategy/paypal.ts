import { PaymentStrategy } from "./payment-strategy";

export class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ₹${amount} using PayPal.`);
    }
}