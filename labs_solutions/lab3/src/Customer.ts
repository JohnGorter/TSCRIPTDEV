import { BankAccount } from './BankAccount';

interface Customer {
    firstname: string,
    lastname: string,
    preposition?: string,
    bankAccount: BankAccount
}

export class CustomerImpl implements Customer {

    firstname: string
    lastname: string
    preposition: string
    bankAccount: BankAccount

    constructor(firstname: string, lastname: string, bankAccount: BankAccount, preposition?: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.preposition = preposition;
        this.bankAccount = bankAccount;
    }
}