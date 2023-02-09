# Cursos_JS
 Curso de JavaScript
 
 # Documentação JS por andré

    // comenta a linha
    /**
    *
    * comenta um bloco no codigo
    * 
    */

    Comandos VSCODE LINUX (andré)
        dobrar” o código Ctrl + Shift + [ (desdobra Ctrl + Shift + ])
        Ctrl + Shift + i (faz a indentação do codigo) (formata o codigo)
        Ctrl + \ (comenta a linha) //
        Ctrl + Shift + a (comenta o bloco) /* */
        Ctrl + b abre e fecha a barra lateral
        Ctrl + Shift d (duplica linha)
        Ctrl + x (deleta uma linha)
        ctrl+shift+alt+up ou ctrl+shift+alt+down (copias linha para baixo ou parac)



        Ctrl + \ (comenta a linha) //
        Ctrl + Shift + a (comenta o bloco) /* */
        Ctrl + b abre e fecha a barra lateral
        Ctrl + Shift d (duplica linha)
        Ctrl + x (deleta uma linha)
        ctrl+shift+alt+up ou ctrl+shift+alt+down (copias linha para baixo ou parac)



    node = motor de javascript que roda fora do navegador (JS em Servidor).
    livros referencias: js o guia definitivo, js Guia do programador.


    script:src =  cria o link entre o html e o arquivo javacript:

    

    sinais:
        = recebe
        + adição (para numbers) ou concatenação (para string)
        '' = string com aspas simples
    node = motor de javascript que roda fora do navegador (JS em Servidor).
    livros referencias: js o guia definitivo, js Guia do programador.


    script:src =  cria o link entre o html e o arquivo javacript:

    

    sinais:
        = recebe
        + adição (para numbers) ou concatenação (para string)
        '' = string com aspas simples
          confirm("ola, " + nome + "tudo bem?")
        "" = string com aspas duplas
        `` = string com crases (template strings) pode se usar o "place rolder" ( $(nome da variavel) )
                confirm(`Ola, ${nome} tudo bem?`);

    window. ... = opcional: (objeto central do navegador)
        alert('') = mensagem na tela sem retorno(formato janela) (undefined)
        confirm(``) = mensagem na tela com retorno bolean (formato janela)  (true ou false)         
        prompt(``) = mensagem na tela com  retorno de string (formato janela) (string)
        document.write("") = escreve na tela sem caixa de mensagem (html)
    
    debugando..:    
        console.log('conteudo'); usado para debugar o codigo./mostra o conteudo da variavel
        typeof(valor ou variavel)  = mostra o tipo da variavel
        NaN = Not a number

    Variaves e constante:
      OBS:não pode redeclarar variaveis com LET
        -não pode ser palavras reservadas da linguagem 
        -tem que ter nome significativos
        -não começar variavel com numero
        -não podem conter espaços ou traços
        -utilizar camelCase para variaveis com nomes compostos
        -variaveis são case-sensitive, diferencia letras maiusculas de menusculas
        -variavel com VAR Está  absoleta(antiga)
        -não pode mudar o valor da const
        -const tem que ser declarada e inicializada ao mesmo tempo

            var = variavel absoleta
            let = variavel
            const = constante

        Diferenças de Var e Let

        Var:
        se declara uma variavel com o mesmo nome ela e sobrescrita 
        so tem escopo de função
        toda função protege as variaveis dentro delas
        quando se declara uma variavel com var ela é elevada ao topo do codigo
        as declarações de variáveis com var e funções são fisicamente movidas para o topo do seu código (são colocadas na memória durante a fase de compilação, mas permanecem exatamente onde você as digitou no seu código.)

        Let:
         não  pode redeclara a mesma variavael com let
         lete tem escopo de bloco {...bloco}
         quando se declara uma variavel com let ele não é elevada ao top não acontece o Hoisting ou içamento

    tipos de dados em JS / manipulando dados:
        Seis tipos de dados são os chamados primitivos:
        Boolean. true e false.
        null. Uma palavra-chave que indica valor nulo. Devido JavaScript ser case-sensitive, null não é o mesmo que Null, NULL, ou ainda outra variação.
        undefined. Uma propriedade superior cujo valor é indefinido.
        Number. 42 ou 3.14159.
        String. "Howdy"

        string / texto = texto
        boolean / boleano = verdadeiro ou falso
        number / numero = numero inteiros / float = pontos flutuantes, numero com ponto ou virgulas (real, moedas)

        Number('Instring a ser transformada em numero')
        parseInt / ou apenas Number(com N maiusculo) = (Transforma uma instring em inteiro)

        parseFloat  / ou apenas number(transforma uma instring em flooat/ numero real)

        String(Variavel) / nomeVariavel.toString = transforma number em  string

        nomeVariavel.lenght = quantos caracteres a string tem
        nomeVariavel.toUpperCase() = string toda em maiusculas
        nomeVariavel.toLowerCase() = string toda em minusculas

    operadores (precedencia operadores aritimetico, relacionais depois logicos)
       operadores aritimeticos
            + adição ou concatenação (Em caso de strings)
            - subtração
            * multiplicação
            / divisão
            % retorna o resto da divisão
            ** potencia (EX: 5 ** 2 = 5 ao quadrado)
            () muda a ordem de precedencia 
            = (recebe) faz referencia a propria variavel (adiciona valor)
            ++ e -- operador de incremento e decremento (Ex pega a varia A (a++ ou ++a )
                ou variavel += quantidade de incremento Ex contador += 6 (vai contar de 6 em 6)
                pode ser usados todos ou operadores aritimeticos  ex *=

        operadores relacionais
            (sempre retorno valores logicos true ou false)
                > maior
                < menor
                >= maior igual
                <= menor igual
                == igual
                === identico sim (mesmo valor e mesmo tipo)
                != diferente
                !=== desigual restrito
        Operadores Lógicos
            ! negação 
            && conjunção (e) ambos tem que ser verdadeiros
            || disjunção (ou)apenas um tem que ser vedadeiros


        operadores ternarios (condicionais)
            ? se
            : se não
                Ex: teste?treu:false
                    média>=7.0?"Aprovado":"reprovado"
                    se media maior igual a 7.00 faça aprovado senão reprovado



        precedencia:
        () ** / (aritimeticos)
        > < >=  (relacionais)
        ! && || (logicos)

    strings
        \"\ barras invertidas escapa o caracter

        toda instrng tem indice

        o indice 0 representa a primeira letra

            console.log(varivaelString[4]); esse comando vai pegar a 5 letra dentro da variavel
            existe tambem outras possibilidades console.log(varivaelString.charAt(6)); esse comando vai retornar o elemento que está no posisão 6
            ou concat para concatenar, pode se enviar mais de uma valor
        é possivel pesquisar uma palavra/letra dentro de uma string usando o .indexOf('texto') 
            -1 representa um erro ou não existe
            .indexOf('texto', 4) usando o segundo parametro e possivel determinar de qual indice começar ex(palavra texto começando do indice 4, ou seja se tiver texto no indice 2 e ingnorado)
            .lastindexOf é similar ao indexOf porem começa de tras para frente

        expressões regulares
            .match(/[a-z]/g)) //faz um ... (procurar uma explicação melhor)
            .search(/x/))/ retorna o indice, encontrar a letra x e retorne o indice
            .replace('Um'/Um/, 'Dois'));// subistitui uma palavra por outra
                é possivel subistituir tudo usando a FLAG g Ex: replace(/U/g, 'Dois')) // esse comando faz com que todas as letras U da string seja substituida pela palavra Dois
            .length; // comando para  saber o tamanho da string //OBS: esse comando não e uma função() é um atributo
            .slice() // serve para fatiar uma string/dividir
            .split('x')//dividir uma string baseada em algum caracter // vai dividir a string na letra x



Numeros em JS (atualizado 28/12)
    .ToString() // converte a variavel number em string 
        variavel =  variavel..ToString() // muda definidamente a variavel em string
        .ToString(2) // converte a variavel number em string e retorma em binario

    .ToFixed(Quantidade de casa decimais) // arredendo ou  some com as casas decimais ex: .ToFixed(2) so exibe 2 casas decimais 
    
     variavelNum1) // Veirifica se o valor da variavel é inteiro (retorna true ou false)
        Ex: console.log(Number.IsInterger(varNum1)); //verificando a variavel varNum1.

    Number.IsNaN(varNum1) // verifica se a Variavel é NAN (algum erro na conta, string + number e etc)

    





HTML
    seletor em css
        # = ID
        . = CLASSE
        


DOM (Document Object Model)
    Vertente web para Java Script
    
    Selecionadores 
        Por Marca
            getElementsByTagName()
        Por Id
            getElementById
        Por nome
            getElementsByName()
        Por classe
            getElementsByClasseName()
        Por Seletor
            querySelector()
            querySelectorAll()


    Arvore DOM

    window
        * locarion 

        * document    
            - html
                * head 
                    - meta 
                    - title
                    
                * body
                    - div
                    - h1
                    - p
                        *strong
                           
        
        * history
    
    Objeto Math (matematica)

        Math.floor arredonda um numero para baixo
        Math.ceil arredonda um numero para cima
        Math.round arredonda automaticamente
        Math.max pega o maior numero do array
        Math.min pega o menor numero do array
        Math.random cria o numero aleatorio
        math.PI cria o PI
    

Arrays

    Declarando um array:
        const alunos = ['fulano','joão','rafael']
    os arrays são indexavel pelos seus elementos.
        Ex 0 == 'fulano'
           1 == 'joão'
           2 == 'rafael'
    para acessar um array:
        console.log(aluno[0]) array aluno no indice 0 == fulano
        console.log(aluno) array completo os 3 nomes
        aluno[0] = 'Eduardo' muda o array [0] fulano para eduardo
        aluno[3] = 'Luiza' criando um array[3] com o nome Luiza
        console.log(aluno.length) para saber o tamanho do array
        aluno[aluno.length] = 'nome novo' criando um array novo no ultimo indice  com base no tamanho do array (lenght) 
        aluno.push('nome novo2') essa função cria um elemento no final do array
        aluno.unshift('novo primeiro nome') essa função cria um novo elemento no começo do array[0] no indice 0
        aluno.pop(); remove o ultimo indice do array / retorno o elemento removido
        aluno.shift() remove o primeiro elemento do array /  retorno o elemento removido
        delete aluno[1] deleta o conteudo do indice, porem o indice fica na memoria como undefined 
        aluno.slice(0, 2)        (elemento 0, ate o elemento 2) fatia o array pegando do indice 0 ate o indice 2, o ultimo indice nunca e incluido exemplo retorno aoenas fulano e joão
        aluno.slice(0, -2)mesma coisa porem elimina os 2 ultimos arrays (pega tamanho do array menos a quantidade de indice)]
        todo array é um objeto alto indexavel 
        alunos instaceof array verifica se realmente é um array
        todo array é criado com []

Funções 
    toda função exuculta uma ação
    um trecho de codigo

    criando uma função 
        function  saudacao(parametros) {
            corpo dessa função
            console.log(´bom dia ${parametro}´);
        }
    
    chamando uma função
        saudacao(valor para função);{}

    criando uma função com retorno de valor

    function  saudacao(nome) {
            
            console.log(´bom dia ${nome}´);
            return nome
        }

        let nome = saudacao('lucas')
        console.log(nome);
        vai retornar  o nome lucas

    a função pode receber varios valores
        function soma (x, y, Z){
            const resultado = x+y+z;
            return resultado;
        }
    outras formas de criar funções
        const raiz = funciton (n){
            return n ** 0.5;
        };

        const raiz = n => 
             n ** 0.5;


    Objetos

        Declarando um objeto
        é possivel criar funções dentro de objetos 
        e objetos com funções.
        dentro do objeto o valor e atribuido com : dois pontos não =

            todo objeto e criado com {}

            const nome01 = {
                atributo: 'valor do atributo', 
                outroAtributo: 'valor do atributo',
                terceiroAtributo: 'valor do atributo
            };

            nome01.atributo para acessar outro atributo


            criando objetos com funções:

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

                        texto1.innerHTML = `meu nome dentro do objeto é ${pessoa1.nome}, sobrenome é ${pessoa1.sobrenome}, e idade é : ${pessoa1.idade}`; //apenas para imprimir na tela
                        



    Valor primitivo e valor por referencias

        os dados primitivos são imutáveis  
            primitivos(os valores são copiados):
                Valores imutáveis
                    string
                    number
                    boolean
                    underfined
                    null
                    bigint
                    symbol 

            Referencia(aponta para o mesmo valor na memoria ):
                mutaveis
                    arrays
                    funções
                    objetos
                copiando um valor mutavel  de a para b
                    let a = [1,2,3,4,5];
                    let b = [...a];


    Operadores de Comparação 
        
            * > Maior que 
                Checa se um atributo é MAIOR que o outro
                
            * >= Maior que ou igual a
                checa se um atributo e MAIOR ou IGUAL a outro
                    primiero ele checa se o atributo e maior depois checa se é igual 
                        
            * < menor que
                 Checa se um atributo é MENOR que o outro

            * <= menor que ou  igual a
                checa se um atributo e MENOR ou IGUAL a outro

            * == iguadade (valor) -- não ultilizado
            * === igualdade (estrita) (valor e tipo)
                    checa se um atributo e igual em valor e tipo 

            * != deferente de (valor) -- não ultilizado
            * !== deferente de  (estrito) (valor e tipo
                 checa se um atributo e DIFERENTE em valor e tipo 

    Operadores Logicos








    operadores ternarios.

        condição ? Valor verdadeiro : valor para falso
        se se  não 
        if else 
        ? :
            pode subistituir if else

            let pontuaçãoUser = 999;
            const nivelUSer = pontuaçãoUser >= 1000 ? 'user vip' : 'user normal';

            ()condição - ?se  - :se  não

            (condição) ? 'valor para verdadeiro' : 'valor para falso';

        e  ou
        && ||

            falbek (setando um valor padrão para variavel)

            variavel = Cor Escolhida pelo user ||Ou 'valor padrão'

            const corPadrao = corUser || 'preta';
            corpadrao recebe corUser ou 'cor preta';

            se uma ou otra condição for verdadeira


    Objetos
        função date
            const data = new Date(); // ultilizando um objeto date para criar uma nova data. (gerando um objeto com data e hora)
            toda função date é uma função  construtora.
            new Date() 
            toda função construtora começa com a letra maiuscula
            toda vez que eu crio uma função construtora começa com a palavra new
            a função date é uma função construtora
            toda vez que criar uma função new Date() sem parametro ela pega o horario atual.
                
    Switch/Case

        o switch é algo bem parecido com o If, o switch e usado quando á apenas uma condição.
        quando a apenas uma variavel (uma condição) e a melhor hora de se criar um switch.
        todo switch case e necessario ter um break.
        o default e a ultima condição  a ser execultada.    
        pode existir quantos cases forem necessarios.
        e necessario o uso de break em todos os case, com excesão de switch case dentro de funções   

        caso o dia for TAL faZ isso aqui:
        swithc (condição) {
            case valorDoCase: 
               codigo ;
            break;
            Default:
            Codigo;
        };

    
    Atribuição via desestruturação array:

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9] // criando um array indexavel 

            / //console.log(numeros[3]) // saber qual o valor do array numeros no indece 3 = numero 4

            // //const TerceiroNum = numeros[2]; // atribuindo um valor a constante pelo  array.
            //console.log(numeros[2]);


            // //atribuido por desestruturação.
            // // caso seja feito com const  todas variavel vão ser const ou let caso seja criado com let

            // const [primeiroNum, segundoNum] = numeros; // atribuição por desestruturação, para cada item criado eu estou atribuido o valor do indice do aura, exemplo primieroNum Recebe indice 0, segundoNum recebe indece 1.
            // console.log(primeiroNum, segundoNum);
                com ... é possivel pegar o resto do auray. rest operations js

            é possivel pegar operadores vazios pulando os indices 
             exemplo:const [primeiroNum, , terceiroNum, , quartoNum, , , oitovaoNum] = numeros;

    
    Atribuição via desestruturação objetos:

            é bem parecido com o array.
            usa {} ao inves de [].
            para pegar um valor dentro do objeto basta usar o mesmo nome da variavel dentro do objeto.
            é possivel criar uma variavel com o nome diferente do objeto.
                usando nomeVariavelDentroDoOBjeto : nomeNovo.
                const { nome = '', sobrenome: segundoNome, idade } = pessoa;
            é possivel usar um valor padrão caso a variavel não exista dentro objeto exemplo do nome.

    

    Estruturas de repetição:
    



        For classicos: 
            Estrutura do for :
                for (let i (var de Incremento) = 0 (valor inicial do laço); i <= 8 (condição para o laço); i++ (incrementando valor a i)){
                    codigo a ser execultado a cada volta do laço.
                }
             dentro dos () parenteses do for é necessario cria uma variavel de controle (geralmente i), uma   condição para parar esse laço, incrementar a variavel de controle
             depois do for não pode colocar ; ponto e virgula
             é preciso incrementar ou decrementar a variavel de controle
             é necessario setar um valor inicial a variavel de controle 
             para dividir as espreçoes usa ; ponto e virgula
             pode mudar o valor o valor de incremento usando i += 10 vai pular de 10 em 10
             usando i -= 2 voce decrementa de 2 em 2

            for classicos - geralmente com iteráveis (array ou strings).

            for in - retorna o indice ou chave (string, array ou objetos).
            O loop for...in irá iterar sobre todas as propriedades enumeráveis de um objeto.
            for in retorna o indice do array

            for of - retorna um valor em si (iteraves, array ou strings).
            for of retorna o valor do indice


            For in:
                for in ler os indices do array ou atributos de valor do objeto.

            For of :
                expecificos para objetos com indices (iteravel)
                retorna o conteudo do indece

        while e Do While

            Geralmente não sabe qunatas vezes essa repetição tem que ocorer para que o laço termine
            cria a variavel fora do while checa a condição se for verdadeira entra no bloco, atualiza avariavel de controle e assim que a condição for false o laço termina]

            diferença de while e do While é que while  check primeiro e o do While execulta primeiro para depois checar
            
            let i = 0; // variavel de controle

            // enquanto i for menor ou igual que 10  execulte 
            while (i<= 10) {

                // mostre o valor de i
                console.log(i);
                //adicione i+i
                i++;
            }


            do {
                    codigo
            }While(condição)




    DOM E ÁRVORE DOM
        Document Object Model

         window =  Objeto geral do navegador
           document = documento html
             html 
              head
              body
                section
                 h1
                  no de texto
                 div
               

Tratando e lançado erro em JS

        (try = tente execultar o codigo) (catch =  caso não ocorra alguam erro no try execulte o catch)
        try {
            codigo
        } catch (err){
            codigo
        }
    