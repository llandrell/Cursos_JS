
// aprendendo a função date, função date é uma função construtora;
// const data = new Date(); // criando uma const chamada de date que recebe o objeto date
// toda Função  construtora começa com a palavra new e Letra Maiuscula no inicio.


// criando uma constante com milesimos de segundo
// criando uma variavel  que recebe 3 horas em milesimos de segundos
//const treshoras = 60 * 60 * 3 * 1000; // criando uma constante com 3 horas (60x60=a1 hora x 3 horas  e igual a 3 horas * 1000 para converter em milisegundos )

// date e formado no marco zero 01/01/1970
// apenas o date cria a data no exato momento da declaração
//const data = new Date() // o objeto Date() pode receber os seguintes parametros(sempre numeros e sem zeros a esquerda): ano, mes(de 0 a 11), hora, minutos, segundos, e milesimos de segundos, podendo omitir os seguintes parametros:  milesegundos, segundos, minutos, hora não podendo omitir mes e ano. se não ele passa a considerar apenas milesegundos.
// as datas podem ser passadas como: em  branco que recebe a data atual, valor em milesegundos*observação*, DateString como no exemplo abaixo e (ano, mes, dia,hora, minutos, segundos e mile segundos) como nos exemplos acima.
//const data = new Date('1994-01-20 20:21:59'); // ANO-MES-DIA HORA-MINUROS-SEGUNDOS.MILESIMOS DE SEGUNDO.

// Agenda pode obter da função date, apenas hora, dia, mes, segundos, dias da semanas e etc, segue exemplos abaixo.
//objeto criado com a função construtora date: exemplto data.get Alguma coisa, exemplos abaixo.
//console.log('Dia:', data.getDate()); // pega o dia do objeto data
//console.log('Mes:', data.getMonth()); // obtem mes (de 0 a 11) (0 = Janeiro 11 = dezembro)
//console.log('ano:', data.getFullYear()); // obtem o ano
//console.log('hora:',data.getHours()); // pegando a hora.
//console.log('Minutos:', data.getMinutes()); //obtem os minutos
//console.log('Segundos:', data.getSeconds()); // segundos
//console.log('Milesimos de segundos:', data.getMilliseconds()); // milesimos de segundos
//console.log('dia da Semana:', data.getDay()); // dia da semana (0 domingo e 6 sabado)
//console.log(data.toString()); // escreve a hora em formato string



// criando uma função para formatar uma data:

// função para formata uma data recebendo como parammetro algo que tem que ser uma data.
//function formataData(data) {
  //  console.log(data);
    // função apenas recebe uma data e imprime a mesma no console
    
//}


// função para colocar zeros a esquerda.

/** function zeroEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`; // retornando uma condição em string: se numero for maior ou igual a 10 retorne o numero se não adicione um zero na frente da string numero.
};
*/

/**function formataData(data) {
    // usando uma função esterna para adiconar um zero caso for menor que 1o
    const dia = zeroEsquerda(data.getDate()); 
    const mes = zeroEsquerda(data.getMonth() + 1) // corrigindo os meses para ficar de um a dose.
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const minutos = zeroEsquerda(data.getMinutes());
    const segundos = zeroEsquerda(data.getSeconds());
    const MileSegundos = zeroEsquerda(data.getMilliseconds());
    const diaSemana = zeroEsquerda(data.getDay());

    return `${dia}, ${mes},${ano},${hora},${minutos},${segundos},${MileSegundos}, ${diaSemana},`;
    // retorno sem tratamento das strigns.
    
};
*/
/** const letData = new Date(); // criando uma variavel e atribuindo a função construtora data. sem parametro, ou seja pega as informações da  data atual.
//formataData(letData); // camando a função formataData e passanndo como parametro a variavel data.
const dataBrasil = formataData(letData); // variavel para receber o retorno da função formataData(passando a variavel data).

console.log(dataBrasil);
*/
