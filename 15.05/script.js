// function saudacao(nome){
//         if(typeof nome != `string`){
//             throw new Error('o parâmetro deve ser string!')
//         }else{
//             console.log(`oi ${nome}`)
//     }
// }

// saudacao(`itala`);
// saudacao(100);
// saudacao(`Executou!`);

//////////////////////////////

// let b = 10;

// try {
//     let a = 2  + b;

// } catch(error){
// }
// console.log("Teste");

//////////////////////////////

// const reg1 = new RegExp(`Bola`);
// console.log(reg1.test("Tem Bola"));
// console.log(reg1.test("Não tem"));

// const reg2 = /bola/;
// console.log(reg2.test("Tem Bola"));
// console.log(reg2.test("Não tem"));

//////////////////////////////

// const reg1 = /[12345]/;
// console.log(reg1.test("Temos o numero 6"));
// console.log(reg1.test("Temos o numero 5"));

//////////////////////////////

// const dia = /\d\d/;

// console.log(dia.test("2019" && "2019".length == 2));
// console.log(dia.test("asd"));
// console.log(dia.test("05" && "05".length == 2));
// console.log(dia.test("asd1"));

//////////////////////////////

// const palavrasPeloMenosTresLetras = /\w\w\w/;

// console.log(palavrasPeloMenosTresLetras.test("asd"));
// console.log(palavrasPeloMenosTresLetras.test("asdd"));
// console.log(palavrasPeloMenosTresLetras.test("as"));

//////////////////////////////

// const notab = /[^ab]/;

// console.log(notab.test("a"));
// console.log(notab.test("Aqui tem a"));
// // nega apenas a ou b de forma isolada

// const nottoaz = /[^a-z]/;
// //padrao que nao contenha caracteres neste intervalo 
// console.log(nottoaz.test("123 as"));
// console.log(nottoaz.test("asdasfdfsfeeqweqeqwes"));

//////////////////////////////

// const cep = /\d{5}-\d{3}/;
// //primeira parte 5 e a segunda 3

// console.log(cep.test("88117-500"));
// console.log(cep.test("asd"));
// console.log(cep.test("881-50"));
// console.log(cep.test("99999-999"));

// const tel = /\(d{2}\)\d{4,5}-\d{4};

// console.log(tel.test("(48)9999-9999"));
// console.log(tel.test("(48)5555-5555"));

// const digitos = /\d+/;
// console.log(digitos.exec("Temos o numero 100"));
// console.log(digitos.exec("Temos o numero"));

////////////////////////////// 

// const reg = /\w+: (Matheus|João|Maria);

// console.log(reg.test("Nome: Matheus"));
// console.log(reg.test("Nome: José"));
// console.log(reg.test("Nome: Maria"));

//////////////////////////////

// const validaDominio = /[?www.]\w+\.com.br|.com;

// console.log(validaDominio.test("www.google.com"));
// console.log(validaDominio.test("www.horedecodar.com"));
// console.log(validaDominio.test("www.horadecodar"));
// console.log(validaDominio.test("horadecodar.com"));

//////////////////////////////

