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

    //função para limpar o input
    limpaInput();

    //função para apagar o conteudo
    btApagar(li);

    //chamadno a função para salvar a tarefa
    salvarTarefas();

};
//se o botão foi clicado apague o elemento 
function limpaInput() {
    //limpando o input atraves oassando o valor pelo .value.
    //limpado o valor dentro do input
    inputTarefa.value = '';
    //um evento html, qundo clic no botão input fica psicando o cursor 
    //nesse caso mandando o js fazer o focus, ele volta para o focus
    inputTarefa.focus();
    
}


        //se o botão foi clicado apague o elemento 
// criando botão para apagar o conteudo da pagina 
function btApagar(li) {
    li.innerText += ' ';
    const btApagar = document.createElement('button');
    btApagar.innerText = 'Apagar';
        //setando atributo 
        //btApagar.classList.add('apagar'); //adiconannnnnndo um classe denro do botão
    
    //
    btApagar.setAttribute('class', 'apagar');
    li.appendChild(btApagar);   

    
    
};

//Criando a função para salvar as tarefas criadas em criaTarefas()
function salvarTarefas() {
    //pegando os li dentro de tarefas
    const liTarefas = tarefas.querySelectorAll('li');

    //criadno um array vazio para guardar o centeudo dos li
    const listaDeTarefas = [];
    
    //criando o for para iterar sobre as nodes list (liTarefas) e guardar no array
    //
    for (let iTarefa of liTarefas) {
        //pegando do texto do li que foi colocado em iTarefa e adicionando dentro de tarefaText
        let tarefaText = iTarefa.innerText;
        //fazendo um replace nos texto de tarefaText 
        // subistuindo (replace) a palavra pagar por nada
        //.trim remove o espaco sobrando na ponta da string 
        tarefaText = tarefaText.replace('Apagar', '').trim();

        // jogando o texto de tarefaText dentro da lista de tarefas
        listaDeTarefas.push(tarefaText);
            };

    //armazenando uma do array convertido para JSON
    //pode ser convertido de volta em array
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    
    //local do navegador destinado a salvar dados(um mini banco de dados)
    //inportate no localStora so pode ser armazenado strings por isso foi convertido para json string antes.
    localStorage.setItem('tarefas', tarefasJSON);
};

//função para carregar a 'base de dados no site' quando o site for carregado
function addTarefasSalvas() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    //convertendo a lista de strint para json
    const listaDeTarefas = JSON.parse(tarefasSalvas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
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
//se o botão foi clicado apague o elemento 

// capiturando o evento click ao cliclar no botão btn-add-tarefa
btnTarefa.addEventListener('click', function (e) {
   
    // se inputarefa for falso, retorne nada
    if (!inputTarefa.value) return;

    //chamando a função criaTarefa e passando como valor, o valor de inputTarefa.value
    criaTarefa(inputTarefa.value);
   
   
   
   
   
    //pegando o valor do imput criado no html
    //console.log(imputTarefa.value);
});


//pegando o evento click para adicionar a função apagar
document.addEventListener('click', function (e) {
    const el = e.target;
    //if para saber se o elemento é o botão de apagar
    //se esse botão contem a class list 'apagar' é o que eu quero.
    if (el.classList.contains('apagar')) {
        //se o botão foi clicado apague o li
        // quando clicar no el vou saber quem e o pai atraveis do parenteElement
        //do meu elemento o pai dele vai ser removido. atraveis do .remove
        el.parentElement.remove();
        salvarTarefas()
    
    }
})



addTarefasSalvas()