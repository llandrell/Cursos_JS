// try {
//     console.log(naoExisto)
// } catch (err) {
//     console.log('texto', err)
        
// }

// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         //lançados os erros
//         // serve para o desenvolvedor saber qual tipo  de error
//      throw new Error(`${x} e ${y} precisam ser numeros`);
//     }; 
//         return x + y;
    

// }
// try {
//     // se ocorrer um erro aqui dentro o catch e execultado se não tiver error o try é execultado.
//     console.log(soma(3, '3'));
// } catch (err) {
//     console.log(err);
// }



// try {
//     // E execultado quando não há erros
// } catch (err) {
//     // E execultado quando há erros
// } finally {
//     // E execultado sempre.
// }


function retornaHora(data) {
   // checando invertido,  se data não for uma instancia de date
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de DATE.');
    }
    //se a data não for enviada, gerando uma data atomatica
    if (!data) {
        data =  new Date();
    }
    //retornando data com hora local em timeString
    return data.toLocaleTimeString('pt-BR', {
        // colocando 2 digitos para hora, minutos e segundos e a hora com 24 horas
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {//codigo que tem potencial para da erro
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch (err) {
    //tratamento do  error
} finally {

    //codigo que é sempre excultado
    console.log('tenha um bom dia')
};