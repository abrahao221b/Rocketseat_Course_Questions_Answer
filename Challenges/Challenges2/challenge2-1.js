const user = {
    nome: "Leandro",
    empresa: {
        nome: "Rocketseat",
        cor: "Roxo",
        foco: "programação",
        rua: "Rua Guilherme Gembala",
        number: "260"
    }
};

console.log(`A empresa ${user.empresa.nome} está localizada ${user.empresa.rua}, de número ${user.empresa.number}!`)