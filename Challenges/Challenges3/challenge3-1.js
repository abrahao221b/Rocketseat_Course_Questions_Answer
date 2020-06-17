const users = [
    { nome: "Carlos", tecnologias: ["HTML", " CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", " CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", " Node.js"] }
];

function printUsers(users) {
    for(let user of users) {
        console.log(`${user.nome} trabalha com ${user.tecnologias}`)
    }
}

printUsers(users)
