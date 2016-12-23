import { BankAccount } from './BankAccount';
import { CustomerImpl as Customer } from './Customer'
import { PaymentService } from './PaymentService';

let customers: Customer[] = [
    new Customer("Jack", "Sparrow", new BankAccount()),
    new Customer("Elizabeth", "Turner", new BankAccount())
];

const paymentService = new PaymentService();

function init() {
    customers.forEach(customer => {
        customer.bankAccount.printBalance();
    });
}

init();

paymentService.transferMoney(customers[0].bankAccount, customers[1].bankAccount, 100);