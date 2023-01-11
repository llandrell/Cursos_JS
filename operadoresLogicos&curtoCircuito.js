/** Operadores Logicos 
 * 
 * 
 *  && -- AND -- E
 *      Verifica se as 2 expreções são verdadeiras (todas as expressões tem que ser verdadeira para
 *      retorna true)
 *          (20 <= 22(retorna true) && 30===25  (retorna false) && 5!==4 (retorna false)) 
 *          retorna falso (false)
 *              para a expressão  acima ser verdadeira, todas as opções tinh que ser vedade (true)
 * 
 *  || -- OR -- OU
 *          Verifica se alguma expreção é verdadeira (apenas uma expressão precisa 
 *          ser verdadeira)
    *          (20 <= 22(retorna true) || 30===25  (retorna false) || 5!==4 (retorna false)) 
    *          retorna verdade (True)
    *              para a expressão acima ser verdade, basta apenas que um condição seja verdadeira
 *                  
 *  ! -- NOT -- NÂO/ NEGAÇÂO
 *      Negação 
 * 
 ** Avaliação de Curto circuito 
 * 
 *  (AND &&)        
 *  
 *      Valores que são avaliados em falso FALSY
 *       false
 *       0
 *       NuN
 *       null
 *       underfine
 *       '' `` string vazia    
 * 
 *      no && (and )quando a um curto circuito sempre e retornado o valor falso, se tiver algum valor vedadeiro vai para ultima
 *      
 *      no || (OR) quando curto circuito  sempre retorna o primeiro valor vedadeiro
 * 
 * 
 * 
 */


// Operador AND &&

function falaOI() {
    return 'OI';
};
 
let vaiExecultar = 'undefined'; // valor falso string vazia

console.log(vaiExecultar && falaOI()); // curto circuito se a variavel vaiExecultar for falsa, vai retornar o valor  da variavel, se for vedadeiro vai retorna a ultima condição

// Operador OR ou ||

const corUser = null; // usuario não colocou nenhuma cor
const corPadrao = corUser || 'preto'; // curto circuito verifica e retorna o primeiro atributo verdadeiro

console.log(corPadrao);