import { BankAccount } from './BankAccount';

function auditLog(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value;

    descriptor.value = (...args: any[]) => {
        try {
            const returnValue = originalMethod.apply(target, args);
            console.log(`${propertyKey} succeeded with ${JSON.stringify(args)} => ${JSON.stringify(returnValue)}`);
            return returnValue;
        } catch (err) {
            console.error(`${propertyKey} errored with ${JSON.stringify(args)}. Error was: ${JSON.stringify(err.message)}`);
        }
    }
}

export class PaymentService {

    @auditLog
    transferMoney(from: BankAccount, to: BankAccount, amount: number): void {
        if (from.balance - amount >= 0) {
            from.balance -= amount;
            to.balance += amount;

            console.log(`Money transfered form: ${from.accountNumber} to: ${to.accountNumber}`);
        } else {
            throw new Error(`Balance of: ${from.accountNumber} was not high enough!`)
        }
    }
}