const nome = "Silvia", sexo = "F";
const idade = 48;
const contribuicao = 23;
var aposentadoria;

aposentadoria = idade + contribuicao;

if(sexo == 'F') {
    if(aposentadoria < 85) {
        console.log(`Sr.${nome}, infelizmente, você ainda não está aposentada, pois ainda te faltam ${(85 - aposentadoria)/2} para se aposentar`)
    } else {
        console.log(`Parabéns Sr.${nome} você já pode se aposentar!!!`)
    }
} else if(sexo == 'M') {
    if(aposentadoria < 95) {
        console.log(`Mr.${nome}, infelizmente, você não está aposentado, pois ainda te faltam ${(95 - aposentadoria)/2} para se aposentar`)
    } else {
        console.log(`Parabéns Mr.${nome} você já pode se aposentar!!!`)
    }
}