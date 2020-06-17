const object = {
    userName: "Carlos",
    age: "32",
    propridades: [
        { nome: "C++", especialidade: "Desktop" },
        { nome: "Python", especialidade: "Data Science" },
        { nome: "JavaScript", especialidade: "Web/Mobile" }
    ]
};

console.log(`O usuário ${object.userName} tem ${object.age} anos e usa a tecnologia ${object.propridades[0].nome} com especialidade em ${object.propridades[0].especialidade}`)