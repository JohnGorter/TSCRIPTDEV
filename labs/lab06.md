# Lab 6 - Structuring code

If you couldn't finish the previous exercise, you can copy and paste the pervious solution from the *labsSolutions* folder.

## Exercise 1 - Split the code into Multiple files.

1. Split all classes out into it's own files. Use `modules` to link everything back up together.
    * Create a folder `src/` to hold all class files
    * `Customer` class in `src/Customer.ts`
    * `BankAccount` class in `src/BankAccount.ts`
    * `AccountNumber` class in `src/AccountNumber.ts`
    * `BankConfig` interface in `src/BankConfig.ts`.
    * `Bank` class in `src/Bank.ts`.
1. Make sure you have no compile errors and everything still works as expected.

## Exercise 2 - Create a bank web server

For this exercise we'll use the express web server.

1. Install express using `npm i -S express body-parser`
1. Install the *typings* for express using `npm i -D @types/express @types/body-parser`
1. Can you explain why we use `-S` and `-D` here?
1. Add a property `portNumber` to the `BankConfig` interface. Can you spot the compile error? Add a port when creating your Bank.
1. Create a new class `BankServer`. The constructor should take a `Bank`.
1. Add a `listen` method to the `BankServer`. It should create a webserver which listens to the port configured in the `config` of that `Bank`. Use the `express` webserver with `import * as express from 'express';`. Log a line to the console in the `listen` method to indicate that you are running the webserver.
1. Implement the following methods:
    * HTTP GET on /api/bank should provide the config of the bank as a JSON object
    * HTTP GET on /api/accounts should provide the bank accounts belonging to the bank as a JSON array.

## Exercise 3 (if time permits)

1. Implement the HTTP POST on /api/accounts. It should add the provided JSON customer to the current bank and return a 204 - No Content. Tip: you might need the `'body-parser'` now.
1. If the post is implemented. Try it out with a tool like Postman or an HttpRequester browser plugin.
1. Don't forget to implement some validation. These customers are invalid:

```json
{
	"firstName": "only firstname"
}

{
	"lastName": "only lastname"
}

{
	"firstName": "John",
	"lastName": "Doe",
    "preposition": 42
}
```
