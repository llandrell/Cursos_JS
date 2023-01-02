// alert('Ola mundo!'); // mensagem na tela sem retorno.
//confirm('ta aprendendo javaScript?'); // mensagem na tela com retorno bolenao
//prompt('qual é seu nome?'); // mensagem com caixa de texto e retorno do que o usuario digitar em forma de string

/** ex1
 * let nome = 'andré'; //criando primeira variavel tipo string
 * alert (typeof nome); // mensagem na tela com o tipo da variavel
 */

/**ex2
 * 
 * 
 * 
 * confirm(`Ola, ${nome} tudo bem?`);
 * 
 * confirm(`Ola, ${nome} tudo bem?`);
 */

/** ex3 calculadora simples
 * 
 * let n1 = parseInt(prompt('Digite o primeiro numero')); // criando a variavel e convertendo retorno para inteiro
 * let n2 = Number(prompt('Digite o segundo numero'));
 * let total; // criando variavel undefined (não direcionado na memoria)
 * alert(typeof (total)); 
 * alert(`A soma entre o primeiro numero e o segundo é : ${total = n1 + n2} `);
 * alert(typeof(String(total)));
 */

/** ex4
 * 
 * 
 * let nomeM;
 * let nome = prompt(`Digite seu nome: `); // declarando variavel e recebendo valor do prompt
 * alert(`seu nome tem: ${nome.length} letras`); // verificando quantos index tem a variavel 
 * alert(`Seu nome em letras MAIUSCULAS: ${nomeM = nome.toLocaleUpperCase()}`); // transformando todas as 
 trings em  maisuculas e atribuindo a variavel "nomeM"
 * alert(`Seu nome em letras minusculas: ${nomeM.toLocaleLowerCase()}`); // transformando todas as strings em minusculas
*/

/**ex5
 * let nome = prompt('informa seu nome');
 * document.write(`seu nome tem ${nome.length} letras`);
 * 
 * 
 */

/**Operadores
 * let a = 5+3; // soma resultado = 8
 * let b =  a%5; // resto da divisão resultado = 3
 * let c = 5*b**2; // 5 vezes variavel b(3) elevado ao quadrado(2) (** tem precedencia sobre *) resultado 45
 * let d = 10-a/2; // 10 - variavel a(8) dividio por 2 (divisão tem precednecia sovre -) resultado 6
 * let e = 6*2/d; // 6 vezes 2 dividido por d(6) (operadores com a mesma precedencia) resultado 2
 * let f = b%e+4/e; // resto de b(3) dividido por e(2) mais 4 dividido por e(2) resultado 3
 * alert(`resultado da varival a =  ${a}.`);
 * alert(`resultado da varival b =  ${b}.`);
 * alert(`resultado da varival c =  ${c}.`);
 * alert(`resultado da varival d =  ${d}.`);
 * alert(`resultado da varival e =  ${e}.`);
 * alert(`resultado da varival f =  ${f}.`);
 */

/**  operadores ternarios / condicionais
 
    let media;let nota1 = parseFloat(prompt('Informe a nota do 1ª semestre:'));
    let nota2 = parseFloat(prompt('Informe a nota do 2ª semestre:'));
    let nota3 = parseFloat(prompt('Informe a nota do 3ª semestre:'));
    let nota4 = parseFloat(prompt('Informe a nota do 4ª semestre:'));
    let mediaAluno = parseFloat(prompt('Informe o valor da media:'));

    let notaFinal = (nota1 + nota2 + nota3 + nota4) / 4; // Calculando media

    notaFinal>=mediaAluno?alert(`Aluno Aprovado com media final: ${notaFinal}`):alert(`Aluno foi reprovado com a media: ${notaFinal}`); // Criando a condição para saber se foi aprovado ou reprovado
  
 */

/* Selecionadores em ELEMENTOS DOM
let corpo = window.document.body
let p1 = window.document.getElementsByTagName('p')[1];
window.document.write('Estám escrito assim: ' + p1.innerText);
p1.style.color = 'green'
corpo.style.background = 'red';
let d = window.document.querySelector('div#msg');

d.style.color ='red'

*/

/* ex6
let nome = prompt('Informe seu nome: ');
let sobrenome = prompt('Informe seu sobrenome: ');
let idade = parseInt(prompt('Informe sua idade'));
let peso = parseFloat(prompt('Informe seu peso'));
let altura = parseFloat(prompt('Informe sua autura'));
const ano = 2022;
let imc = peso / (altura ** 2);
let nasceu = ano - idade;   

alert(`Ola, ${nome} ${sobrenome}, sua idade é ${idade} anos, seu peso ${peso} kg e altura ${altura}cm, sendo assim seu IMC é de ${imc}. e nasceu em ${nasceu}`)

let varA = 'A'; // B
let varB = 'B';// C
let varC = 'C'; // A

const varA1 = varA;

varA = varB;
varB = varC;
varC = varA1;

document.write(`varA =  ${varA},varB =  ${varB},varC =  ${varC} `);

[varA, varB, varC] = [varC, varA, varB] // atribuindo valores as variaveis por parametros 
    // variavel, para, receber, valor] = [parametros, para, as, variaveis]
document.write(`varA =  ${varA},varB =  ${varB},varC =  ${varC} `);

*/

/**  DOCUMENT.
//let umaString = 'Um texto qualquer'

//document.write(umaString[4]); //retorna a letra da variavel string que corresponde ao indice 4

//document.write(umaString.charAt(5));//retorna a letra da variavel string que corresponde ao indice 5

//document.write(umaString.concat(' com mais conteudo')); // concatena strings a variavel

//document.write(umaString.indexOf('texto')) ;// procurando string texto dentro da varivael umaString retorna o indice da primeira letra.

//document.write(umaString.indexOf('texto', 2)); // procurando string texto dentro da varivael umaString retorna o indice da primeira letra, começando do indece 2

//document.write(umaString.lastIndexOf('texto'));// procurando de tras para frente string texto dentro da varivael umaString retorna o indice da primeira letra

//document.write(umaString.match(/[a-z]/g)); // expressões regulares

//document.write(umaString.search(/x/)); // retorna o indice do que pediu, encontrar a letra x

//document.write(umaString.replace('Um', 'Dois'));// subistitui uma palavra por outra

//document.write(umaString.replace(/e/g, 'Dois')); // esse comando substitui todas as letras e da string pela palavra dois

//document.write(umaString.length); // comando para  saber o tamanho da string.

//document.write(umaString.slice(3, 9)); // comando para  fatiar uma string pegando do indice 3 inicio ate o 9 final //palavra texto

//document.write(umaString.split('e', 2)); //comando para dividir a string na letra E 2 vezes

*/

/* Trabalhando novamente com numeros(revisão)

    let num1 = 12; //varivael do tipo numero.
    let num2 = 2.5 // variavel do tipo number.


    // console.log(num1.toString() + num2); //dentro e apenas no consolote.log convertendo uma variavel num1 do tipo number em string.

    // console.log(num1.toFixed(3)) // .toFixed arredonda para a quantidade das casa decimas informada entre (2) 2 casa decimais

    // console.log(Number.isInteger(num1)); // checa se o numero que está recebendo e inteiro  (rerorna True ou False)

    // console.log(Number.isNaN(num2)); // checa se a variavel é NaN (NaN = Not a Number (quando uma operação e feita com string))
*/

/*Trabalahndo com numeros - Objeto   Math (matematica)


// let num1 = 9.87885

// let num2 = Math.floor(num1); //arredonda o valor para baixo
// let num2 = Math.ceil(num1); //arredonda o valor para cima
// let num2 = Math.round(4.87); //arredonda o valor automaticamente 
// let num2 = Math.max(4,5,8,91,10,11,18,97); // Descobre qual é o maior numero do array
// console.log(num2);
*/

/* ex6 

    let num2 = Number(prompt('Informe um numero'));
    document.write(`Seu numero é ${num2}<br>`);
    document.write(`a Raiz quandrade de ${num2} e ${num2**2}<br>`);    
    document.write(` ${num2} é um numero inteiro? `);
    Number.isInteger(num2) == true ? document.write(`Sim`) : document.write(`Não`);
    document.write(`<br> é NaN ? `);
    Number.isNaN(num2) == true ? document.write(`Sim`) : document.write(`Não`);
    document.write(`<br> Arrendondado para Baixo: `)
    document.write(Math.floor(num2));
    document.write(`<br> Arrendondado para Cima: `)
    document.write(Math.ceil(num2));
    document.write(`<br>com 2 casa decimais `)
    document.write(num2.toFixed(2)); 
*/

/* ex 6 melhorado
    let numeroDigitado = Number(prompt('Informe um numero'));
    let texto1 = document.getElementById('texto');
    let numerointeiro = undefined;
    let numeroNaN = undefined;
    texto1.innerHTML = `<p> Seu numero é: ${numeroDigitado} </p>
                        <p> Raiz quadrada: ${let = numeroRaiz = Math.round(numeroDigitado ** 0.5)} </p>
                        <p> ${numeroDigitado} é um numero inteiro? ${numerointeiro = Number.isInteger(numeroDigitado) == true ? numerointeiro = `Sim` : numerointeiro = `Não`}</p>
                        <p> é NaN ? ${numeroNaN = Number.isNaN(numeroDigitado) == true ? numeroNaN = `Sim` : numeroNaN = `Não`}</p>
                        <p> Arrendondado para Baixo: ${Math.floor(numeroDigitado)} </p>
                        <p> Arrendondado para cima: ${Math.ceil(numeroDigitado)} </p>
                        <p> com 2 casa decimais ${numeroDigitado.toFixed(2)}</p>
                        `; 
*/

/** Criando Objetos com funções:
 * 

    //declarando as variaveis
    let nome = prompt('informe seu nome: ');
    let sobrenome = prompt('informe seu Sobrenome: ');
    let idade = prompt('informe sua idade: ');
    let texto1 = document.getElementById('texto'); // criando a variavel testo1 e fazendo um get pelo id texto no html 

    // criando uma função para criar o objeto pessoa1
    function criarPessoa(nome, sobre, idade) {
        return {
            nome: nome,
            sobrenome: sobrenome,
            idade: idade,

        }
    };

    const pessoa1 = criarPessoa(nome, sobrenome, idade); // criando o objeto pessoa um recebendo os parametros do prompt.

    texto1.innerHTML = `meu nome dentro do objeto é ${pessoa1.nome}, sobrenome é ${pessoa1.sobrenome}, e idade é : ${pessoa1.idade}`;
    //verificando se deu certo 
*/

/**Criando funções dentro de objetos  
   
    /**  criando Objeto com função e dentro do objeto uma outro função fala()
     * 

        let nome = prompt('seu nome:');
        let sobrenome = prompt('seu sobrenome:');
        let idade = prompt('sua idade:');

        // criando função para criar objeto
        function criarPessoa(nome, sobrenome, idade) {
            return {
                nome,
                sobrenome,
                idade,

                // função para escrever na tela
                fala() { alert(`meu nome dentro do objeto é ${this.nome}, sobrenome é ${this.sobrenome}, e idade é : ${this.idade}`) }, 

            }
        }

        // criando objeto chamando a função criar pessoa
        const pessoa1 = criarPessoa(nome, sobrenome, idade);

        pessoa1.fala();
    
    

    /** outra forma de criar o objeto com a função dentro
     
    const pessoa1 = {
        nome: prompt('seu nome:'), //objeto recebendo valor do prompt 
        sobrenome: prompt('seu sobrenome:'),
        idade: prompt('sua idade:'),

        fala() {alert(`meu nome dentro do objeto é ${this.nome}, sobrenome é ${this.sobrenome}, e idade é : ${this.idade}`)}, // função para escrever na tela
    }; 
        
    //chamando a função dentro do objeto pessoa 
    pessoa1.fala();

        
        //verificando se deu certo 
    
 */
