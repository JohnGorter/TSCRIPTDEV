import { Customer } from './Customer';
import { BankConfig } from './BankConfig';
import { BankAccount } from './BankAccount';

const DEFAULT_OPTIONS = Object.freeze({
    port: 25647,
    bic: 'TYPEDBANK',
    language: 'en',
    name: 'unknown bank'
});

export class Bank {

    readonly accounts: BankAccount[] = [];
    public config: Readonly<BankConfig>

    constructor(partialConfig: Partial<BankConfig>) {
        this.config = Object.assign({}, DEFAULT_OPTIONS, partialConfig);
    }

    public createAccount(customer: Customer) {
        const account = new BankAccount(customer, this.config.bic);
        this.accounts.push(account);
        switch (this.config.language) {
            case 'en':
                console.log(`[${this.config.name}] welcomes ${account.toString()}`);
                break;
            case 'nl':
                console.log(`[${this.config.name}] verwelkomt ${account.toString()}`);
                break;
            case 'fr':
                console.log(`[${this.config.name}] accueille ${account.toString()}`);
                break;
            default:
                this.handleLanguageNotFound(this.config.language);
                break;
        }
    }

    handleLanguageNotFound(language: never) {
        console.error(`No welcome message found for language ${language}`);
    }
}
