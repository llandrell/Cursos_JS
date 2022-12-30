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
        dobrar” o código Ctrl + Shift + [ desdobra Ctrl + Shift + ]
        Ctrl + Shift + i faz a indentação do codigo (formata o codigo)
        Ctrl + \ comenta a linha //
        Ctrl + Shift + a comenta o bloco /* */
        Ctrl + b abre e fecha a barra lateral
        Ctrl + Shift d duplica linha 
        Ctrl + x deleta uma linha
        ctrl+shift+alt+up ou ctrl+shift+alt+down copias linha para baixo ou parac



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
      OBS:não pode redeclarar variaveis
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
    



