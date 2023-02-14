const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

//função para criar dentro do html a tag li
//função apenas cria a tag
function criaLi() {
    //criando dentro do documento html a tag li
    const li = document.createElement('li');
    return li;
}


// função cria tarefa que recebe o text do imput, adiciona o conteudo dentro da tag .tarefa
function criaTarefa(textInput) {
    // criando uma variavel dentro escopo criaTarefa que recebe o a função esterna, criaLI.
    const li = criaLi();
    //criando um inner  Texto e adiconando o conteudo textInput nele
    li.innerText = textInput;
    // adicionando o centeudo da constante li que esta no escopo da função criaTarefa dentro da constant global tarefa
    //ou seja adicionando meu text que contem o elemento (li) e o (html text) dentro da tarefa que está dentro da tag 
    //html .tarefa = (UL no html)
    tarefas.appendChild(li);
    

};


// pegando o evento dentro do inputTarefa quando uma tecla for precionada.
inputTarefa.addEventListener('keypress', function (e) {
    //se o keyCode do event tecla precionada dentro do inputTarefa for === 13(entre)
    if (e.keyCode === 13) {
       // se o imput tiver vazio retorne nada e pare
        if (!inputTarefa.value) return;

            //chamando a função criaTarefa e passando como valor, o valor de inputTarefa.value
            criaTarefa(inputTarefa.value);
   
    }
    
});

// capiturando o evento click ao cliclar no botão btn-add-tarefa
btnTarefa.addEventListener('click', function (e) {
   
    // se inputarefa for falso, retorne nada
    if (!inputTarefa.value) return;

    //chamando a função criaTarefa e passando como valor, o valor de inputTarefa.value
    criaTarefa(inputTarefa.value);
   
   
   
   
   
    //pegando o valor do imput criado no html
    //console.log(imputTarefa.value);
});
