Lab 4 - Decorators

If the exercise was not successful in the last lab, you can copy and paste the pervious solution from the *labs_solution* folder.


Dutch goverment require banks to keep an audit trail of every customer. 
So as professional as our bank is we need to do the same. 
In this lab you are going to write a decorator that will `auditLog` everytime a payment is executed.

Exercise 1 - Transfer money

- Create a `PaymentService.ts` file.
    - Implement a `transferMoney` function that accepts
        - to `BankAccount`
        - from `BankAccount` 
        - `amount`
    - Throw an error when the balance of the customer is not high enough.


Exercise 2 - audit logging

- Create an `@auditLog` decorator that logs if the payment *succeeded* or has thrown an *error*.
    - Hint: you have to wrap the original method inside the decorator.
- Create a function to this of the decorator works as expected.

Bonus: 

The board of directors of *TypedBank* would like that the *Typed control room* is informed when a payment failed.
There are many different control rooms so we need to prefix our log message with the correct control room when we use our `@auditLog` decorator.

The log message should look like this: ```console.warn(`${tcm}: Payment has failed.`);```
And the decorator should look like this: `@auditLog('PaymentTCM')`

