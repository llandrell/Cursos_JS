const verdadeira = true;
//escopo globla, essas variaveis estão disponives em todo o codigo.
let nome = 'andré'; // criando a variavel 
var nome2 = 'lucas';
/** com let
if (verdadeira) {
    // criando a variavel dentro do bloco
    let nome = 'otavio'; //  criando outra variavel dentro do blcoo com o mesmo nome da variavel global, por isso e possivel.

   //estamos usando a variavel de dentro do bloco, não a variavel global, let tem escopo de bloco.
    if (verdadeira) {
        let nome ='outra coisa' // criando a variavel nome que pertence a esse if.
        console.log('ok');
        console.log(nome, nome2);
    }
}
*/

/**mesma coisa com var */

var nome2 = 'pedro';// nesse caso a variavel foi redeclarada, não é uma variavel difente.

if (verdadeira) {
    var nome2 = 'joão';// dentro do bloco ela tbm foi redeclarada;
    console.log(nome2);

    
}
console.log(nome2);