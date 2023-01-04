/** Criando Objetos com funções:
 * 

    //declarando as variaveis
    let nome = prompt('informe seu nome: ');
    let sobrenome = prompt('informe seu Sobrenome: ');
    let idade = prompt('informe sua idade: ');
    let texto1 = document.getElementById('texto'); // criando a variavel testo1 e fazendo um get pelo id texto no html 

    // criando uma função para criar o objeto pessoa1
    function criarPessoa(nome, sobre, idade) {
        return {
            nome: nome,
            sobrenome: sobrenome,
            idade: idade,

        }
    };

    const pessoa1 = criarPessoa(nome, sobrenome, idade); // criando o objeto pessoa um recebendo os parametros do prompt.

    texto1.innerHTML = `meu nome dentro do objeto é ${pessoa1.nome}, sobrenome é ${pessoa1.sobrenome}, e idade é : ${pessoa1.idade}`;
    //verificando se deu certo 
*/

/**Criando funções dentro de objetos  
   
    /**  criando Objeto com função e dentro do objeto uma outro função fala()
     * 

        let nome = prompt('seu nome:');
        let sobrenome = prompt('seu sobrenome:');
        let idade = prompt('sua idade:');

        // criando função para criar objeto
        function criarPessoa(nome, sobrenome, idade) {
            return {
                nome,
                sobrenome,
                idade,

                // função para escrever na tela
                fala() { alert(`meu nome dentro do objeto é ${this.nome}, sobrenome é ${this.sobrenome}, e idade é : ${this.idade}`) }, 

            }
        }

        // criando objeto chamando a função criar pessoa
        const pessoa1 = criarPessoa(nome, sobrenome, idade);

        pessoa1.fala();
    
    

    /** outra forma de criar o objeto com a função dentro
     
    const pessoa1 = {
        nome: prompt('seu nome:'), //objeto recebendo valor do prompt 
        sobrenome: prompt('seu sobrenome:'),
        idade: prompt('sua idade:'),

        fala() {alert(`meu nome dentro do objeto é ${this.nome}, sobrenome é ${this.sobrenome}, e idade é : ${this.idade}`)}, // função para escrever na tela
    }; 
        
    //chamando a função dentro do objeto pessoa 
    pessoa1.fala();

        
        //verificando se deu certo 
    
 */