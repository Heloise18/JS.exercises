// Declarar variaveis
// let laranjinha = 5 // Escopo local - > de função
// var bananinha = 10 // Escopo global
// const uvinha = 15 // Valor fixo, constante 


// const nome = "Heloise";

// console.log("A mais mais de todas: "+nome);

// let manas = ["Mana Rebeca", "Mana Thaís", true, 10]
// for( i = 0; i < 4; i++ ){
//     console.log(manas[i]);
// }

// const obj = {
//     nome: "Helozita",
//     idade: 17,
//     trabalho: "Bosch",
//     familia: {
//         pai: "Jorge",
//         mae: "Vanessa"
//     }
// }
// console.log(obj);
// console.log(obj.nome);

// console.log(obj.familia.mae);

// // Função tradicional
// function soma(x,y){
//     return x + y;
// };

// console.log("Tradicional: "+soma(5,10));

// // Função anonima atribuida
// const somar = function(a,b){
//     return a+b;
// };

// console.log("Anonima: "+somar(1,2));


// //Arrow function/ reduzida
// const sum = (a,b) => a+b;

// console.log("Arrow: "+sum(5,5));

// let title = document.getElementById('el1').innerHTML
// console.log(title)


const choooseColor = () => {
    let inputColor = document.getElementById('inputColor').value
    console.log(inputColor);
    // let quadrado = document.getElementById('quadrado')
    // quadrado.classList.remove('ok');
    // quadrado.classList.add("style='background-color:"+inputColor+";'");

}
