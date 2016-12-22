Lab 1 - Getting started
===

Exercise 1 - Setting up a new project.
==

Prerequisites:
    - NodeJS installed
    - NPM installed

1. Initialize a new `TypeScript` project.
    - Create a `package.json`.
        - ```npm init```
    - Install `TypeScript` as a local dev dependency
        - ```npm install --save-dev typescript``` 
    - Create a `tsconfig.json`
        - Compile your code to `ES6`
        - set `sourceMap` to 
            
1. Setup your favorite IDE.
    - If using VSCode look in the slides on how to do this.

Exercise 2 - Creating a new bank.
==

1. Create a new file `Main.ts`.
1. Create a customers field which accepts a *Object array*
1. Define a function that creates a bank account number.
    - Define a variable called `bic` with value `"TYPEDBANK"`.
    - Generate a accountNumber using `Math.floor(Math.random() * upperBound) + 1`.
    - Return the bankAccount number with as a *template string*
1. Create a function that creates a new customer.
    - A customer should have a `firstname`, `lastname`, optional `lastname` and a `accountNumber`.

If time permits:

1. Rewrite your function to use the `fat arrow` notation.