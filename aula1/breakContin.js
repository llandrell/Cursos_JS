const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


for (let num of nums) {

    //if para testar uma condição
    if (num === 2) {
        //sempre que encontra essa balavra vai voltar para o inicio do laço sem execultar o restante do laço.
        //nesse caso se num for igual a 2 vai entra do if e vai encontra a balavra continue e volar para o inicio do for 
        continue;
    }

    // quando encontra a palavra break ele acaba o laço na primeira vez.
    if (num === 7) {
        break;
    }
    console.log(num);
}