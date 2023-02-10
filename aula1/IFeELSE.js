
/** If e Else verdadeiro e falso
 * if pode ser usado sozinho 
 * sempre que ultiliza a palavra else sempre tem um if
 * pode ter varios  else if
 * só pode ter um else(sem IF) ne checagem 
 * se a condição for satisfeita na primeira checagem (if) o (else if) não será chegado nem execultado, sai para fora do bloco.
 * if = se
 * else if = se não se
 * else = se não (se nenhuma outra) 
 */


//const hora = 28;

const numero = 10;



//if para avaliar se a condição (hora e menor que 12 ) é vedadeira, se for verdadeira entra no bloco de codigo abaixo 

/** 
if (hora >= 0 && hora <= 11) {
    console.log('Bom dia')
} /* se a primeira condição (if) não for verdaderira avalia a proxima condição else if e assim por diante
else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!')
}else if (hora >= 18 && hora <= 23 ) {
    console.log('Boa noite!')
}/*se nenhuma condições for vedadeira execulta o else, else não recebe condições
else{
    console.log('informe uma hora valida')
}
*/


if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5');
} else if (numero >= 6 && numero <= 10) {
    console.log('O número está entre 6 e 10');
} else {
    console.log('O numero não está entre 0 e 10');
}

