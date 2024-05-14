// const cachorro ={
//    raca: `SRD`,

//     uivar: function(){
//         console.log(`AUUUUU`)
//     },
//     rosnar: function(){
//         console.log(`GRRR`)
//     },

//     setRaca:function(raca){
//         this.raca= raca;
//     },
//     getRaca: function(){
//         return "A raça é: " + this.raca;
//     }
// }

// cachorro.uivar();
// cachorro.rosnar();

// console.log(cachorro.raca);
// cachorro.setRaca(`Pastor Alemão `);
// console.log(cachorro.raca);
// console.log(cachorro.getRaca());


// ////////////////////////////////////////////////////////////////

// const pessoa = {
//     maos: 2,

// }

// console.log(Object.getPrototypeOf(pessoa));


// //////////////////////////////////////////////////////////////

// let cachorro= {
//     patas: 4,
//     raca: `SRD`,

//     latir: function(){
//         console.log("AU AU")
//     } 

// }

//     let labrador = Object.create(cachorro);
//     labrador.latir();
//     labrador.raca= `Labrador`;
//     console.log(labrador.raca);
//     console.log(cachorro.raca);

//     let pastor= Object.create(cachorro);
//     pastor.raca= `Pastor Alemão`;
//     console.log(pastor.raca);


// ////////////////////////////////////////////////////////////////////

// function criarCachorro(raca,pata, cor){
//     let cachorro = Object.create({});

//     cachorro.raca = raca;
//     cachorro.pata = pata;
//     cachorro.cor = cor;

//     return cachorro;
// }

//     let pug = criarCachorro(`pug`, 4, `preto`);
//     console.log(pug);

// ///////////////////////////////////////////////////////////////////

// function Cachorro(raca,pata, cor){
//     this.raca = raca;
//     this.pata = pata;
//     this.cor = cor;

//     this.uivar= function(){
//         console.log(`AUUU`)
//     }

// }

//     let pincher = new Cachorro (`pincher`, 4, `caramelo`);
//     pincher.uivar();

// ///////////////////////////////////////////////////////////////////

// class Cachorro{
//     constructor(raca, patas,cor){
//         this.raca = raca;
//         this.patas = patas;
//         this.cor = cor;

//     }

    
// }

// let labrador = new  Cachorro(`Labrador`, 4,`preto`);
// console.log(labrador);

/////////////////////////////////////////////////////////////////////

class Cachorro{
    constructor(raca,cor){
        this.raca = raca;
        this.cor= cor;

    }
    get getCor(){
        return this.cor;
    }
    set setCor(cor){
        this.cor= cor;
    }
}

let pastor = new Cachorro (`Pastor Alemão`, `Preta`);
console.log(pastor);
pastor.setCor= `Branco`;
console.log(pastor.getCor);


class Mamifero{
        constructor(patas){
            this.patas = patas;
        }
}

class Cachorro extends Mamifero{
        constructor(patas, racas){
            super(patas);
            this.raca = raca;
        }
        latir(){
                console.log("AU AU")
        }
}

let pug = new Cachorro(4, `pug`);
pug.latir();