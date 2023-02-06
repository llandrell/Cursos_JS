
// let control = 0;

// // () condição {} execulção
// //cria a variavel, checa  a condição, entra no laço.
// while (control <= 10) {
//     console.log(control);
//     control++;
    
// }

// criando uma função para gerar um numero  aleatorio entre 0 e 50

function random(min, max) {

    const r = Math.random() * (max - min) + min;

    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);


// enquanto meu rand (numero random entre 0 e 50) for diferente de 10 execulte o laço se for igual a 10 pule.
// while veirifica a condição para depois execultar o codigo
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
    
}



// do while execulta primeiro para depois verificar 
do {
    rand = random(min, max);
    console.log(rand);
}(rand !== 10);