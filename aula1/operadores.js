
/**Operadores
 * let a = 5+3; // soma resultado = 8
 * let b =  a%5; // resto da divisão resultado = 3
 * let c = 5*b**2; // 5 vezes variavel b(3) elevado ao quadrado(2) (** tem precedencia sobre *) resultado 45
 * let d = 10-a/2; // 10 - variavel a(8) dividio por 2 (divisão tem precednecia sovre -) resultado 6
 * let e = 6*2/d; // 6 vezes 2 dividido por d(6) (operadores com a mesma precedencia) resultado 2
 * let f = b%e+4/e; // resto de b(3) dividido por e(2) mais 4 dividido por e(2) resultado 3
 * alert(`resultado da varival a =  ${a}.`);
 * alert(`resultado da varival b =  ${b}.`);
 * alert(`resultado da varival c =  ${c}.`);
 * alert(`resultado da varival d =  ${d}.`);
 * alert(`resultado da varival e =  ${e}.`);
 * alert(`resultado da varival f =  ${f}.`);
 */

/**  operadores ternarios / condicionais
 
    let media;let nota1 = parseFloat(prompt('Informe a nota do 1ª semestre:'));
    let nota2 = parseFloat(prompt('Informe a nota do 2ª semestre:'));
    let nota3 = parseFloat(prompt('Informe a nota do 3ª semestre:'));
    let nota4 = parseFloat(prompt('Informe a nota do 4ª semestre:'));
    let mediaAluno = parseFloat(prompt('Informe o valor da media:'));

    let notaFinal = (nota1 + nota2 + nota3 + nota4) / 4; // Calculando media

    notaFinal>=mediaAluno?alert(`Aluno Aprovado com media final: ${notaFinal}`):alert(`Aluno foi reprovado com a media: ${notaFinal}`); // Criando a condição para saber se foi aprovado ou reprovado
  
 */