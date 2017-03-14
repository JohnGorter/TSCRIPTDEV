import { Backend } from './Bankend';
import { BankAccount } from './../src/BankAccount';
import { BankConfig } from '../src/BankConfig';
import { AccountRowStamper } from './AccountRowStamper';

const tableBody = document.querySelector('tbody');
const accountRowStamper = new AccountRowStamper(document.querySelector('template'));
const addButton = document.querySelector('button');
const form = document.querySelector('form');
addButton.addEventListener('click', async (event) => {
    const firstNameInput = form.firstName as HTMLInputElement;
    const lastName = form.lastName as HTMLInputElement;
    const preposition = form.preposition as HTMLInputElement;
    const account = await backend.addAccount({
        firstName: firstNameInput.value,
        lastName: lastName.value,
        preposition: preposition.value
    });
    tableBody.appendChild(accountRowStamper.stamp(account));
});
const backend = new Backend();

fetchData();

async function fetchData() {
    const bankPromise = backend.bank();
    const bankAccountsPromise = backend.accounts();
    const bankConfig = await bankPromise;
    const bankAccounts = await bankAccountsPromise;
    document.querySelector('h1').textContent = bankConfig.name;
    bankAccounts.forEach(bankAccount =>
        tableBody.appendChild(accountRowStamper.stamp(bankAccount)));
}
