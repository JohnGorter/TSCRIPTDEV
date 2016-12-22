const bic: String = "TYPEDBANK";
const upperBound: number = 999999999;

const createBankAccountNumber = () => {
     let accountNumber: number = Math.floor(Math.random() * upperBound) + 1  
 
    return `${bic}${accountNumber}`;
}

const newCustomer = (firstname: string, lastname: string, preposition?: string) => {
     return {
        firstname: firstname,
        preposition: preposition, 
        lastname: lastname,
        accountNumber: createBankAccountNumber() 
    }
}

let customers: Object[] = [newCustomer("Jack", "Sparrow"), newCustomer("Elizabeth", "Turner")];