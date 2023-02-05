//selecionando a div pela classe divs dentro do html
// obs: querySelector retorno o primeiro elemento que ele encontrar com o nome
const divs = document.querySelector('.divs');



//selecionando uma coleção (que é bem parecida com um array)
//usando o querySelectorAll que vai me retornar uma nodeList que é bem parecida funcionalmente como uma array
// criando uma constante para pegar todos os elementos p'.
const paragrafos = divs.querySelectorAll('p');


// paragrafos.legns pega o tamanho do array



//pegando os stylos do css do body

//nessa variavel stilosOBody conten todo o css do body
const stilosBody = getComputedStyle(document.body);

//pegando apenas o bgcolor do css do body

const bgColorBody = stilosBody.backgroundColor;

// criando um for of

//for of - retorna um valor em si (o valor do indice )(iteraves, array ou strings).
// a cada laço valueIndice recebe o valor que está dentro do indice

for (let valueIndice of paragrafos) {
    //acessando pelo valor do indice do paragrafos o stilo do css e mudando o background color e a cor da letra
    valueIndice.style.backgroundColor = bgColorBody;
    valueIndice.style.color = 'red'
}