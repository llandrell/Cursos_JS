// let a = 'A';
// let b = 'B';
// let c = 'C';

// const numeros = [ 'B', 'C', 'A']; // crando um array 
// [a, b, c] = numeros;
// console.log(a, b, c);

//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9] // criando um array indexavel 

//console.log(numeros[3]) // saber qual o valor do array numeros no indece 3 = numero 4

//const TerceiroNum = numeros[2]; // atribuindo um valor a constante pelo  array.
//console.log(numeros[2]);


//atribuido por desestruturação.o seja criado com let

// const [primeiroNum, segundoNum, ...resto] = numeros; // atribuição por desestruturação, para cada item criado eu estou atribuido o valor do indice do aura, exemplo primieroNum Recebe indice 0, segundoNum recebe indece 1.
// caso seja feito com const  todas variavel vão ser const ou let cas
// console.log(primeiroNum, segundoNum);
// console.log(resto); // é possivel pegar o resto do array com ... // foi criado um array com o resto do array que foi desestruturado.

// pulando indices com valores vazios 

//const [primeiroNum, , terceiroNum, , quartoNum, , , oitovaoNum] = numeros;
//console.log(primeiroNum, terceiroNum, quartoNum, oitovaoNum);



//** atribuição via desestruturação de objetos */




// criando um objeto pessoa.

const pessoa = {
    nome: 'luiz',
    sobrenome: 'fernando',
    idade: 30,
    endereco: {
        rua: 'matatu',
        numero: 320,
    },
};

//console.log(pessoa); // pegando o objeto pessoa completo

//console.log(pessoa.nome);// pegando no objeto pessoa o nome.

//
//const nome = pessoa.nome // pegando o nome do objeto pessoa e jogando em uma variavel pessoa.

//console.log(nome);

//atribuição via desestruturação usa as chaves

//const { nome } = pessoa; // como a variavel que eu estou criando e a mesma da variavel dentro do objeto ela puxa altomaticamente.

//console.log(nome);

//é possivel criar uma variavel com o nome diferente do valor contido no objeto.

//const { nome = '', sobrenome: segundoNome, idade } = pessoa; // estamos passando um valor padrão caso o valor nome não exista dentro do objeto e mundando o nome do valor nome para segundoNome.
//console.log(nome, idade, segundoNome);

//const { endereco } = pessoa; // pegando o objeto endereco dentro do objeto pessoa   
//console.log(endereco);
//const { endereco: { rua, numero } } = pessoa // pegadno dentro do objeto endereco que está dentro de pessoa os valores rua e nome.
//console.log(rua, numero);
//const { endereco: { rua, numero }, endereco } = pessoa // e possivle tbm pegar o objeto completo, mesmo pegando alguns valores especificos antes.
//console.log(rua, numero, endereco);

//É possivel mudar o nome do valor rua, no caso abaixo: eu quero que o valor rua seja atribuido a variavel 'r', é possivel tambem coloocar uma valor padrão caso o valo não exista dentro do objeto.

//const { endereco: { rua: r = 'valor padrão', numero }, endereco } = pessoa; //  pegando dentro do objeto endereco que está dentro do objeto pessoa e trocando o nome do valor rua por r  e passando um valor padrão caso o valor rua não exista dentro do objeto, depos pegando o valor numero e o objeto endereco completo.
//console.log(r, numero, endereco);

//É pessivel usar tambem o operador de rest (o resto), exemplo:

//const { nome, ...resto } = pessoa // pegando todos os valores restante do objeto pessoa e colocando no novo objeto chamado resto
//console.log(resto);
