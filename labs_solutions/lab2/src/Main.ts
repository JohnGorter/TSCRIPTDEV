interface Customer {
    firstname: string,
    lastname: string,
    preposition?: string,
    bankAccount: BankAccount
}

class CustomerImpl implements Customer {

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

class BankAccount {
    private bic: string = "TYPEDBANK";
    private upperBound: number = 999999999;

    accountNumber: string;

    constructor(balance: number = 0) {
        this.accountNumber = this.createBankAccountNumber();
    }

    private createBankAccountNumber = () => {
        const accountNumber: number = Math.floor(Math.random() * this.upperBound) + 1

        return `${this.bic}${accountNumber}`;
    }
}

let customers: Customer[] = [
    new CustomerImpl("Jack", "Sparrow", new BankAccount()),
    new CustomerImpl("Elizabeth", "Turner", new BankAccount())
];