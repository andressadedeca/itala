
// let p = Promise.resolve(5);

// console.log("outros codigos");

// console.log(p);

// p.then((value)=>{console.log(`o valor e: ${value}´)});

// async function soma(a,b){
//     return a + b;
// }

// console.log(soma(2,4));

// soma(2,4).then(value=> console.log(value));


//////////////////////////////////////////


// function somaComAtraso(a,b){
//     return new Promise(resolve=>{
//        setTimeout(function(){
//          resolve(a+b);
         
//        }, 6000);
       
//    })
// }
// async function resultaSoma(a, b, c){
//     let x = somaComAtraso(a,b);
//     let y = c;
    
//     return await x + y;
// }

// resultaSoma(1, 2, 3).then(value => console.log(value));


//////////////////////////////////////////


function* criarId(){
    let id = 0;
    while(true){
        yield id++;
    }
    
 }
 let idCriado = criarId();
 
 console.log(idCriado.next().value);
 console.log(idCriado.next().value);
 console.log(idCriado.next().value);
 console.log(idCriado.next().value);
 console.log(idCriado.next().value);
 console.log(idCriado.next().value);