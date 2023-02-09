

function ePaisagem(lag, alt) {
    if (lag > alt) {
        return true;        
    }
    else {
        return false;
    }
}
console.log(ePaisagem(800, 900));

//melhorando a função

function ePaisagem2(larg, alt) {
    // if ternario se largura for maior > que altura ? retorne  true se não retorne false.
    return larg > alt ? true : false;
};
console.log(ePaisagem2(2800, 900));

//melhorando a função mais ainda

function ePaisagem3(larg, alt) {
    // if ternario se largura for maior > que altura ? retorne  true se não retorne false.
    // nesse caso a gente não precisa botar os true e false, pq ja retorna altomaricamente verdadeiro ou falso.
    return larg > alt;
};
console.log(ePaisagem3(1800, 900));

//melhorando o codigo com arrow fuction

const ePaisagem4 = (larg, alt) =>  larg > alt ;

console.log(ePaisagem4(1800, 980));
