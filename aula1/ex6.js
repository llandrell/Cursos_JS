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