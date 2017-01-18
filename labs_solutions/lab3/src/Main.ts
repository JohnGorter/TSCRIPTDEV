import { BankAccount } from './BankAccount';
import { CustomerImpl as Customer } from './Customer'

let customers: Customer[] = [
    new Customer("Jack", "Sparrow", new BankAccount()),
    new Customer("Elizabeth", "Turner", new BankAccount())
];

function init() {
    customers.forEach(customer => {
        console.log(customer.bankAccount.printBalance);
    });
}

init();