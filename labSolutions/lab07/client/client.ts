import { Backend } from './Bankend';
import { BankAccount } from './../src/BankAccount';
import { BankConfig } from '../src/BankConfig';
import { AccountRowStamper } from './AccountRowStamper';

const tableBody = document.querySelector('tbody');
const accountRowStamper = new AccountRowStamper(document.querySelector('template'));

const backend = new Backend();

backend.bank().then(bankConfig => document.querySelector('h1').textContent = bankConfig.name)
backend.accounts()
    .then(bankAccounts => bankAccounts.forEach(bankAccount =>
        tableBody.appendChild(accountRowStamper.stamp(bankAccount))));
