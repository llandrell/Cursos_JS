const frutas =  ['pera', 'uva', 'maça', 'salada mista'];



// for in ler os indices do array ou atributos de valor do objeto.
for (let i in frutas) {
    console.log(frutas[i]);
}

//for in como objeto

const pessoa = {
    nome: 'andré',
    idade: 29,
    sobrenome: 'almeida',
    sexo: 'masculino',
};

for (let indic in pessoa) {
    console.log(pessoa[indic]);
}