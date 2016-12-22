const bic = "TYPEDBANK";
const upperBound = 999999999;
const createBankAccountNumber = () => {
    let accountNumber = Math.floor(Math.random() * upperBound) + 1;
    return `${bic}${accountNumber}`;
};
const newCustomer = (firstname, lastname, preposition) => {
    return {
        firstname: firstname,
        preposition: preposition,
        lastname: lastname,
        accountNumber: createBankAccountNumber()
    };
};
let customers = [newCustomer("Jack", "Sparrow"), newCustomer("Elizabeth", "Turner")];
//# sourceMappingURL=Main.js.map