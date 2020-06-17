const account = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

const want = {
    type: "credit",
    value: 200.5
}

function createTransaction(want) {
    if(want.type == "credit"){
        addBalance(want.value);
        console.log(`Seu saldo Ms.${account.name} POSITIVO é de ${account.balance}`)
    } else {
        decreaseBalance(want.value);
        console.log(`Seu saldo Ms.${account.name} NEGATIVO é de ${account.balance}`)
    }   
}

function addBalance(credit) {
    account.balance += credit;
}

function decreaseBalance(debit) {
    account.balance -= debit;
}

createTransaction(want, account);