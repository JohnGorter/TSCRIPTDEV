import { BankAccount } from './BankAccount';

interface Customer {
    firstname: string;
    lastname: string;
    preposition?: string;
    bankAccount: BankAccount;
}

export class CustomerImpl implements Customer {

    constructor(
        public firstname: string,
        public lastname: string,
        public bankAccount: BankAccount,
        public preposition?: string) { }

}