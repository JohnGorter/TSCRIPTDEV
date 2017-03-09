import { Customer } from './../src/Customer';
import { BankAccount } from './../src/BankAccount';
import { BankConfig } from './../src/BankConfig';


const mapBankAccount = (bankAccountJson: any) : BankAccount =>
    new BankAccount(mapCustomer(bankAccountJson.customer), bankAccountJson.number.bic);


const mapCustomer = (customerJson: any) : Customer =>
    new Customer(customerJson.firstName, customerJson.lastName, customerJson.preposition);

export class Backend {

    bank(): Promise<BankConfig> {
        return fetch('/api/bank')
            .then(response => response.json() as Promise<BankConfig>);
    }

    accounts(): Promise<BankAccount[]> {
        return fetch('/api/accounts')
            .then(response => response.json() as Promise<any[]>)
            .then(accountsJson => accountsJson.map(mapBankAccount));
    }

}
