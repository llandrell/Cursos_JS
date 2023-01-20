// parar o envio do formulario, capturando evento de submit do formulario html


const forme = document.querySelector('#forme'); //Selecionando o formulario atraves da constante forme pelo id forme

// criando um evento para para o envio do formulario html

// tem que passar 2 parametros: 1 evento a ser escultado (submit) e depois uma função anonima7
// dentro a function anonima e capiturado o evento, pode esta escrito (event), (evento) ou simplismente (e)
forme.addEventListener('submit', function (e) {
    // previnindo o evento
    e.preventDefault();
    
    // criando a constate e pegando os valores dos inputs (e.target me informa qual elemento está recebendo o evento).
    const inputPeso = e.target.querySelector('#peso');

    // criando a constate e pegando os valores dos inputs (e.target me informa qual elemento está recebendo o evento).
    const inputAltura = e.target.querySelector('#altura');

    //pegando dentros dos inputs o valor transformandoem numero.
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // fazendo uma condição if para checar se o valor e NaN ou invalido.

    if (!peso) {
        setResultado('peso inválido', false);
        return;
        
    }
    if (!altura) {
        setResultado('altura inválida', false);
        return;      
    }

      
    


    // criando a variavel imc para receber a função getIMC() que está sendo criada a baixo, a função getIMC vai calcular o imc

    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelIMC(imc);  
    const msg = `seu IMC é ${imc}, (${nivelIMC}).`;


    setResultado(msg, true);
});

// criando a função para verificar a tabela de imc e retorna a string dentro do array correspondente.

function getNivelIMC(imc) {
    // criando o arrauy nivel para receber as strings
    const nivel = ['Magreza', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];
    

    // criando as codições para verifcar o nivel do imc e retornar o nivel do mesmo
    if (imc >= 39.9) {
    //retornando o array no indice 5 obesidade grau 3 caso o valo esté dentro do parametro
     return nivel[5];        
    };

    if (imc >= 34.9) {
     return nivel[4];   
    };

    if (imc >= 299) {
     return nivel[3];    
    };

    if (imc >= 24.9) {
     return nivel[2];    
    };

    if (imc >= 18.5) {
     return nivel[1];   
    };

    if (imc < 18.5) {
        return nivel[0]; 
    };
    
};

// criando a função getIMC, para calcular o imc
function getIMC(peso, altura) {
    // criando o calculo de imc
    const imc = peso / altura ** 2;
    //retornando imc com apenas 2 casas decimais toFixed.
    return imc.toFixed(2);
  
    
}



// criando uma função para  criar um  paragrafo
function criaP(className) {
    
    //criando elemento em JS, criando uma variavel para o paragrafo.
    
    const p = document.createElement('p');
    //retornando a variavel p que criou um elemento p.
    return p;
};




// criando uma função para imprimir na div Htmml o resultado da captura do formulario.
// recebendo o parametro mensagem (msg) para ser exibido na tela na div resultadoTela
function setResultado(msg, isValid) { 
    // criando uma const para capturar o resultado do formulario
    const resultado = document.querySelector('#resultadoTela');
    // enviado a mensagem pelo innerHTML limpando o hmtl.
    resultado.innerHTML = ``;

 

    // criando uma variavel para receber a função criaP que cria um paragrafo

    const p = criaP();

     // criando uma condição para saber se é valido o formulario
    
     if (isValid) {
        p.classList.add('paragrafo-resultado')
     } else {
        p.classList.add('bad')
     }


    // colocando a mensagem dentro do p

    p.innerHTML = msg;

    // adicionando o paragrafo dentro de resultado
    resultado.appendChild(p);


};


