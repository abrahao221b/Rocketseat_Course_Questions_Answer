const nome = "Leandro", sexo = "male";
const string = nome + " " + sexo + " tem " + "ICM: ";
const peso = 65;
const altura = 1.75;
var imc;

imc = peso / (altura * altura);

if(imc >= 30) {
    console.log(nome + ` você está acima do peso!!!! Seu IMC deu ${imc}`)
} else {
    console.log(nome + ` você não está acima do peso!! O seu IMC deu ${imc}`)
}   