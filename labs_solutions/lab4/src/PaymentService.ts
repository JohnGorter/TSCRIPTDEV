import { BankAccount } from './BankAccount';

function balanceValidator(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    let originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        let from: BankAccount = args[0];
        let amount: number = args[2];

        if (from.balance - amount >= 0) {
            return originalMethod.apply(this, args);
        } else {
            console.error(`Balance of: ${from.accountNumber} was not high eneugh!`);
        }
    };

    return descriptor;
}

export class PaymentService {

    @balanceValidator
    transferMoney(from: BankAccount, to: BankAccount, amount: number): void {
        from.balance -= amount;
        to.balance += amount;

        console.log(`Money transfered form: ${from.accountNumber} to: ${to.accountNumber}`);
    }
}