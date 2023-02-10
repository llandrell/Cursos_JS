function timer(){

    function criaSegundos(segundos) {
        // criadno uma date com o new date segundos * 1000 para tranformar em milesegundos
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-Br', {
            hour12: false,
            timeZone: 'GMT',
        });


    }
    


    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;




    function iniciarRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaSegundos(segundos);
        }, 1000); 
    };

    document.addEventListener('click', function (e) {
        
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer);
            iniciarRelogio()
            
        }
        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado')
            clearInterval(timer);
            
        }
        if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            
        }
        
        
    })
};
timer();

