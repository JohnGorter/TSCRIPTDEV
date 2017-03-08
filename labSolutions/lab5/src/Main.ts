
class Customer {

    constructor(
        public firstName: string,
        public lastName: string,
        public bankAccount: BankAccount,
        public preposition?: string) { }

        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
}

class BankAccount {
    private bic: string = "TYPEDBANK";
    private upperBound: number = 999999999;

    accountNumber: string;

    constructor(balance: number = 0) {
        this.accountNumber = this.createBankAccountNumber();
    }

    private createBankAccountNumber() {
        const accountNumber: number = Math.floor(Math.random() * this.upperBound) + 1

        return `${this.bic}${accountNumber}`;
    }
}

type SupportedLanguage = 'fr' | 'nl' | 'en';

interface BankConfig {
    name: string;
    address: string;
    language: SupportedLanguage;
}

class Bank {
    static readonly DEFAULT_CONFIG = Object.freeze({
        name: '???',
        address: 'Earth',
        language: 'en'
    });
    private readonly config: BankConfig;
    private readonly customers: Customer[] = [];
    constructor(overriddenConfig: Partial<BankConfig>) {
        this.config = Object.assign({}, Bank.DEFAULT_CONFIG, overriddenConfig);
    }

    public addCustomer(customer: Customer) {
        this.customers.push(customer);
        console.log(`${this.greeting()} ${customer.fullName}.`);
    }

    private greeting() {
        switch (this.config.language) {
            case 'nl':
                return 'Welkom';
            case 'en':
                return 'Welcome';
            case 'fr':
                return 'Bienvenue';
        }
    }
}

const customers = [
    new Customer("Jack", "Sparrow", new BankAccount()),
    new Customer("Elizabeth", "Turner", new BankAccount())
];
