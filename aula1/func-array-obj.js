// criar um form que cadastre em um array que contem objetos e mostre no html
//array funções e objetos
function escopoForm() {
    const forme = document.querySelector(".formulario");// selecionando no html o formulario 
    const resultado = document.querySelector('.resultado'); // selecionando dentro do doc html a classe resultado
    const pessoas = []; // criando o array pessoas


    
    // criando uma função  eventoFormulario que recebe evento
    function eventoFormulario(evento) {

        evento.preventDefault(); //falando para o navegador não fazer evento por padrão (atualizar a pagina)


        const nome = forme.querySelector('.nome') // selecionando dentro do forme pela class .nome
        const sobrenome = forme.querySelector('.sobrenome') // selecionando dentro do forme pela 
        const peso = forme.querySelector('.peso') // selecionando dentro do forme pela class 
        const altura = forme.querySelector('.altura') // selecionando dentro do forme pela class 
      
        
        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        }// criando o objeto pessoa

        pessoas.push(pessoa); // adicionando o objeto pessoa dentro do array pessoas

        console.log(pessoas);

        resultado.innerHTML += `<p> nome : ${nome.value} Sobrenome: ${sobrenome.value} peso: ${peso.value} Altura: ${altura.value} <br> </p>`; // escrevendo no html atraveis do seletor da div resultado. 
       

    };

    forme.addEventListener('submit', eventoFormulario); //forme adiciona um escultador de eventos no meu formulario, dentro do metodo addEventListener colocar qual evento ele quer 'escultar', no caso o submit e recebe tambem uma função qualquer, ou uma anonima  
    
}; // trabalhando com funções para  não poluir o escopo global.
escopoForm();
