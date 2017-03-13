import { BankServer } from './src/BankServer';
import { Customer } from './src/Customer';
import { Bank } from './src/Bank';

const bank = new Bank({ name: 'TypeBank' });
bank.createAccount(new Customer('Alfred', 'Kwak', 'Jodocus'));
bank.createAccount(new Customer('Brad', 'Pit'));
bank.createAccount(new Customer('Jack', 'Sparrow'));

new BankServer(bank).listen();
