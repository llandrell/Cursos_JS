// let a = 'A';
// let b = 'B';
// let c = 'C';

// const numeros = [ 'B', 'C', 'A']; // crando um array 
// [a, b, c] = numeros;
// console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9] // criando um array indexavel 

//console.log(numeros[3]) // saber qual o valor do array numeros no indece 3 = numero 4

//const TerceiroNum = numeros[2]; // atribuindo um valor a constante pelo  array.
//console.log(numeros[2]);


//atribuido por desestruturação.
// caso seja feito com const  todas variavel vão ser const ou let caso seja criado com let

// const [primeiroNum, segundoNum, ...resto] = numeros; // atribuição por desestruturação, para cada item criado eu estou atribuido o valor do indice do aura, exemplo primieroNum Recebe indice 0, segundoNum recebe indece 1.
// console.log(primeiroNum, segundoNum);
// console.log(resto); // é possivel pegar o resto do array com ... // foi criado um array com o resto do array que foi desestruturado.

// pulando indices com valores vazios 

const [primeiroNum, , terceiroNum, , quartoNum, , , oitovaoNum] = numeros;
console.log(primeiroNum, terceiroNum, quartoNum, oitovaoNum);