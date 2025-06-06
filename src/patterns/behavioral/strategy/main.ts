import { CreditCardPayment } from "./credit-card";
import { PaymentContext } from "./payment-context";
import { PayPalPayment } from "./paypal";
import { UpiPayment } from "./upi";

export class StrategyExample {
    demonstrate() {
        // Initial strategy: Credit Card
        const payment = new PaymentContext(new CreditCardPayment());
        payment.processPayment(500);  // Output: Paid ₹500 using Credit Card.

        // Switch strategy: PayPal
        payment.setStrategy(new PayPalPayment());
        payment.processPayment(1200); // Output: Paid ₹1200 using PayPal.

        // Switch again: UPI
        payment.setStrategy(new UpiPayment());
        payment.processPayment(300); // Output: Paid ₹300 using UPI.
    }
}
