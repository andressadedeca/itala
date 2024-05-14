//EXERCICIO 1

let numeros = [5,8,9,1,5];

console.log(numeros[0]);
console.log(numeros[2]);
console.log(numeros[3]);

//EXERCICIO 2

let numeros2 = [10, 20];
let numeros4 = [5, 15, 25, 35];

console.log(numeros2.length);
console.log(numeros4.length);

//EXERCICIO 3

let onibus = {
    rodas: 8,
    limitePassa: 40,
    portas: 2
};

console.log(onibus.rodas);
console.log(onibus.limitePassa);
console.log(onibus.portas);

//EXERCICIO 4

onibus.janela = 20
console.log(onibus.janela);

delete onibus.janela;

//EXERCICIO 5

let pessoa = ['andressa', 'luciano', 'amanda', 'lucinda', 'josefar']
console.log(pessoa.includes ('andressa'))

//EXERCICIO 6

let mais5 = [5,8,4,1,5];
let menos5 = [6,4,2,5];

function verificaElementos(array) {
    if (array.length < 5) {
        console.log("Poucos elementos");
    } else {
        console.log("Mais elementos");
    }
}

verificaElementos(mais5);
verificaElementos(menos5);

//EXERCICIO 7 

let elementos = [2,14,29,42,10];
for (let i = 0; i < elementos.length; i++) {
    console.log("Valor:", elementos[i]);
}

//EXERCICIO 8 

let eu = {
    nome: "Andressa",
    idade: 19,
    cidade: "Salvador"
};

// Acessando e imprimindo as propriedades no console
console.log("Nome:", eu.nome);
console.log("Idade:", eu.idade);
console.log("Cidade:", eu.cidade);

//EXERCICIO 9 

let frase = "A vida é bela demais para não ser vivida"
let palavras = frase.split(" ");
for (let i = 0; i < palavras.length; i++) {
    console.log(palavras[i]);
}

//EXERCICIO 10

let calculadora = {

    somar: function(numero1, numero2) {
        const resultado = numero1 + numero2;
        console.log(`Soma de ${numero1} + ${numero2} = ${resultado}`);
    },

    subtrair: function (numero1, numero2){
        const resultado = numero1 - numero2;
        console.log(`Subtração de ${numero1} + ${numero2} = ${resultado}`);
    },

    multiplicar: function (numero1, numero2){
        const resultado = numero1 * numero2;
        console.log(`Multiplicação de ${numero1} + ${numero2} = ${resultado}`);
    },

    dividir: function (numero1, numero2){
        if (numero2 !== 0) {
            const resultado = numero1 / numero2;
            console.log(`Divisão de ${numero1} + ${numero2} = ${resultado}`);
        }else{
            console.log("Não é possivel dividir por zero!");
        }
    }
}

calculadora.somar(12,45)
calculadora.somar(35,32)
calculadora.somar(13,4)
calculadora.somar(43,0)