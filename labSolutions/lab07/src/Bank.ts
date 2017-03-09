import { Customer } from './Customer';
import { BankConfig } from './BankConfig';
import { BankAccount } from './BankAccount';

export class Bank {

    readonly accounts: BankAccount[] = [];

    constructor(readonly config: BankConfig) { }

    public createAccount(customer: Customer){
        const account = new BankAccount(customer, this.config.bic);
        this.accounts.push(account);
        console.log(`[${this.config.name}] welcomes ${account.toString()}`);
    }
}
