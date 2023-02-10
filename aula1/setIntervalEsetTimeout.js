function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        minute: '2-digit',
        second: '2-digit'
    });
}



function funcInterval() {
    console.log(mostraHora());
}

//configura um intervalo de tempo para que alguma função seja excultada em determinado momento.
// primeiro parametro, passando a referencia para execultar ela (passar e a referencia e chamar a função sem os () ), no segundo paramentro e os milesegundos 1000 = 1 minuto

//ex:
//setInterval(funcInterval, 1000);

//pode tambem criar um função anonima dentro do set interval.

//ex:
// setInterval(function () {
//     console.log(mostraHora());
// }, 1000);

//existe algumas forma de para a execulção do codigo.

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

//setTimeout, e muito similar ao setInterval só que execulta apenas uma vez, durante os milesgundos passados
//1 parametro a função anonima dentro dessa função clearInterval passa o nome do intervalo que ele tem que parar, depois o tempo que pode ser execultado o codigo.
setTimeout(function () {
    clearInterval(timer);
}, 10000);

setTimeout(function () {
    console.log('Ola Mundo');
}, 5000)