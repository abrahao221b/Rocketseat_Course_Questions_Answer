// Second part of the challenge challenge3-1

const users = [
    { nome: "Carlos", tecnologias: ["HTML", " CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", " CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", " Node.js"] }
];

// function printUsers(users) {
//     for(let user of users) {
//         console.log(`${user.nome} trabalha com ${user.tecnologias}`)
//     }
// }

function checaSeUsuarioUsaCSS(users) {
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
    for(let user of users) {
        if(user.tecnologias[1] == " CSS") {
            console.log(`O programador ${user.nome} utiliza CSS`)
        } else {
            console.log(`O programador ${user.nome} não utiliza CSS`)    
        }
    }
}

checaSeUsuarioUsaCSS(users)