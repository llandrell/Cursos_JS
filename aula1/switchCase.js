const data = new Date();
const diaSemana = data.getDay();



// switch (diaSemana) { // caso
//     case 0:// caso dia da semana for 0, execulta codigo abaixo. // pode existir quantos cases forem necessarios
//         diaSemanaTex = 'domingo';
//         break; // e necessario o uso de break em todos os cases
//     case 1:// caso dia da semana for 1, execulta codigo abaixo.
//         diaSemanaTex = 'Segunda';
//         break;
//     case 2:// caso dia da semana for 0, execulta codigo abaixo.
//         diaSemanaTex = 'Terça';
//         break;
//     case 3:// caso dia da semana for 0, execulta codigo abaixo.
//         diaSemanaTex = 'Quarta';
//         break;
//     case 4:// caso dia da semana for 0, execulta codigo abaixo.
//         diaSemanaTex = 'Quinta';
//         break;
//     case 5:// caso dia da semana for 0, execulta codigo abaixo.
//         diaSemanaTex = 'Sexta';
//         break;
//     case 6:// caso dia da semana for 0, execulta codigo abaixo.
//         diaSemanaTex = 'Sabado';
//         break;
//     default:// default é usado quando nem dos casos forem execultado / OBS: não e necessario o uso de break no default
//         diaSemanaTex = '';
// };


function getWeekDayText(diaSemana) {
    let diaSemanaTex;
    switch (diaSemana) { // caso
        case 0:// caso dia da semana for 0, execulta codigo abaixo. // pode existir quantos cases forem necessarios
            diaSemanaTex = 'domingo';
            return diaSemanaTex; //caso o switch esteja dentro de uma função pode retornar algo no lugar do break 
        case 1:// caso dia da semana for 1, execulta codigo abaixo.
            diaSemanaTex = 'Segunda';
            return diaSemanaTex; //caso o switch esteja dentro de uma função pode retornar algo no lugar do break ;
        case 2:// caso dia da semana for 0, execulta codigo abaixo.
            diaSemanaTex = 'Terça';
            return diaSemanaTex; //caso o switch esteja dentro de uma função pode retornar algo no lugar do break 
        case 3:// caso dia da semana for 0, execulta codigo abaixo.
            diaSemanaTex = 'Quarta';
            return diaSemanaTex; //caso o switch esteja dentro de uma função pode retornar algo no lugar do break 
        case 4:// caso dia da semana for 0, execulta codigo abaixo.
            diaSemanaTex = 'Quinta';
            return diaSemanaTex; //caso o switch esteja dentro de uma função pode retornar algo no lugar do break 
        case 5:// caso dia da semana for 0, execulta codigo abaixo.
            diaSemanaTex = 'Sexta';
            return diaSemanaTex; //caso o switch esteja dentro de uma função pode retornar algo no lugar do break 
        case 6:// caso dia da semana for 0, execulta codigo abaixo.
            diaSemanaTex = 'Sabado';
            return diaSemanaTex; //caso o switch esteja dentro de uma função pode retornar algo no lugar do break 
            default:// default é usado quando nem dos casos forem execultado / OBS: não e necessario o uso de break no default
            diaSemanaTex = '';
            return diaSemanaTex; 
        };
};

let weekDayText = getWeekDayText(diaSemana);// criando uma variavel para receber a function getWeekDayText passando como parametro a variavel diaSemana com um numero que foi recebido da função construtora date.
console.log(weekDayText);
