const forme = document.querySelector('#form');
const digTela = document.querySelector("#digTela"); // fazendo uma query na div digTela para digitar dentro do html

forme.addEventListener('submit', function (e) {
    // previnindo o evento
    e.preventDefault();
    const inputNum = e.target.querySelector('.num');
    const num = inputNum.value;
    const texto = checkNum(num);
    digTela.innerHTML = `<p>${texto}</p>`;

});



function checkNum(num) {
    if (isNaN(num)) {
        return `Algo deu errado, ${num} não é um numero é uma ${typeof num}.`          
    } else {
        return fizzBuzz(num);
    }
  
}

function fizzBuzz(num) {
  //Um número é divisível por outro quando o resto da divisão entre ambos é igual a zero.  

    if (num % 3 === 0 && num % 5 === 0) {
       return 'FizzBuzz';
    }
    else if (num % 3 === 0) {
        return 'Fizz';
    }
    else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return `O numero ${num} não e divisivel nem por 3 nem por 5`;
    }
}


for (let i = 0; i <= 100; i++){
    console.log(checkNum(i));
}

