export class BankAccount {
    private bic: string = "TYPEDBANK";
    private upperBound: number = 999999999;

    accountNumber: string;

    constructor(public balance: number = 0) {
        this.accountNumber = this.createBankAccountNumber();
    }

    private createBankAccountNumber = () => {
        const accountNumber: number = Math.floor(Math.random() * this.upperBound) + 1

        return `${this.bic}${accountNumber}`;
    }

    printBalance = () => {
        console.log(`Customer has: ${this.balance}`);
    }
}