# O que é Typescript?

- Typescript é um <strong>superset</strong> para a linguagem Javascript, ou seja, adiciona funções ao Javascript, como declaração de tipos de variável.

- Pode ser utilizado com frameworks/libs, como <em>Express</em> e <em>React</em>

- Precisa ser compilado em Javascript, ou seja, não executamos Typescript.

## Por que Typescript?

- Adiciona confiabilidade ao programa (tipos).

- Provê novas funcionlidades a JS, como Interfaces.

- Com Typescript, pode ser verificado os erros antes da execução do código, ou seja, no desenvolvimento.

- Deixa Javascript mais explícito, diminuindo a quantidade de bugs.

## Instalando o Typescript

- Para instalar o ts, é utilizado o npm, o nome do pacote é typescript e é adicionado de forma global com a <strong>flag -g</strong>.

- A partir da instalação, é possível executar/compilar Typescript em qualquer local da nossa máquina, com o comando tsc.

# Fundamentos do Typescript

## O que são tipos?

- Em typescript, a principal função é determinar tipos para os dados, garantindo a qualidade do código, além de fazer o próprio typescript nos ajudar na hora do desenvolvimento.

- Ou seja, precisamos definir corretamente o tipo das variáveis, dos retornos, das funções e das manipulações de dados. Consequentemente teremos um software melhor programado e é este o principal intuito do ts.

### Tipos primitivos

- Há diversos tipos em typescript, entre eles, os <strong>primitivos</strong>, que são: number, string e boolean.

#### Number

- O tipo number garante que o dado seja um número, logo, pode ser inserido apenas números na variável e, também, mudar o valor para outro número.

- O typescript possibilita também a inserção de métodos númericos apenas.

#### String

- O tipo string garante que o dado seja um texto, logo, pode ser inserido apenas texto na variável, permitindo, inserção de métodos de texto apenas.

#### Type Annotation & Type Interference

- Estes dois conceitos irão acompanhar em todo o processo de desenvolvimento de aplicações.

- Annotation é quando definimos o tipo de um dado manualmente.

- Interference é quando o TS identifica e define o tipo de dado para nós.

## Gerando arquivo de configuração

- O typescript pode ser configurado de muitas maneiras, mas, para isso, é necessário do arquivo de configuração.

- Para criar ele, é utilizado: <strong>tsc --init</strong>.

- Agora, é possível mudar várias opções em relação ao que o typescript executa e também é feito o compile.

### Configuração para compilar automaticamente

- Para gerar a compilação automática, é utilizado o comando: <strong>tsc -w</strong>.

- O output será gerado automaticamente sempre que o projeto for salvo.

# Avançando em Tipos

## Arrays

- Pode-se especificar um array como tipo também.

- Se há um array de números: number[].

- Se há um array de string: string[].

- Isso acontece pois geralmente os arrays possuem apenas um único tipo de dado entre seus itens.

### Outra sintaxe de Array

- Os tipos de array possuem duas sintaxes, a sintaxe vista previamente: number[], string[]. Ou também pode ser criado um array desta maneira: Array<number>

## Tipo Any

- O <em>any</em> transmite ao TS que qualquer tipo satisfaz a variável.

- É uma boa prática evitar ao máximo usar este tipo, pois vai contra os princípios do typescript.

- Dois casos de uso: O tipo do dado realmente não importa e arrays de dados de múltiplos tipos.

## Parâmetro de funções

- Pode ser definido o tipo de cada parâmetro de uma função, assim condiciona-se o seu uso correto. A sintaxe é: function example(name: string) {}

- Agora, o parâmetro name deverá ser passado sempre como uma string.

## Retorno das funções

- Os tipos dos retornos também podem ser definidos, para isso, é utilizado a sintaxe: function example():number {}

- O retorno será somente do tipo number.

## Funções anônimas

- O typescript consegue ajudar também em funções anônimas, fazendo uma validação do código digitado, fornecendo dicas de possíveis problemas, como por exemplo, métodos não existentes.

## Tipos em Objetos

- Pode ser determinado tipos para objetos também, tendo a seguinte sintaxe: {value: type}.

## Propriedades opcionais

- Nem sempre os objetos possuem todas as propriedades que poderiam possuir, por isso, temos as propriedades opcionais.

- Para ter esse resultado, deve-se colocar uma interrogação no valor: nome?: string

## Validação de props opcionais

- Quando a propriedade é opcional, precisa-se criar uma validação, isso acontece porque o typescript não ajuda mais, já que ele deixa de controlar o valor que recebemos.

- Para isto, é utilizado uma condicional para conseguir resolver a situação.

## Union Types

- O union type é uma alternativa melhor do que o any, onde podemos determinar dois tipos para um dado.

- A sintaxe é: type | type.

## Avançando no Union Types

- Pode-se utilizar condicionais para validação do tipo de union types, com isso, é possível trilhar rumos diferentes, baseado no tipo de dado.

- Para checar o tipo, utiliza-se <em>typeof</em>

## Type alias

- <strong>Type alias</strong> é um recurso que permite criar um tipo e determinar o que ele verifica, desta maneira, temos uma forma mais fácil de chamá-lo em vez de criar expressões complexas com Union Types, por exemplo.

## Introdução às interfaces

- Uma outra maneira de noemar um tipo de objeto é às interfaces, podemos determinar um nome para o tipo e, também, escolher quais as propriedades e seus tipos.

## Diferença entre type alias e interfaces

- Na maioria das vezes, podemos optar entre qualquer um dos recursos sem problemas, a única diferença é que a Interface pode ser alterada ao longo do código, já o Alias não.

- Ou seja, se pretendemos mudar como o tipo se conforma, devemos escolher a Interface.

## Literal Types

- <strong>Literal</strong> types é um recurso que permite colocar valores como tipos, isso restringe o uso a não só tipos, como também os próprios valores.

- Este recurso é muito utilizado com Union Types.

## Non-null Assertion Operator

- Às vezes o typescript pode evidenciar um erro, baseado em um valor que no momento do código, ainda não está disponível.

- Porém, se sabemos que este valor será preenchido, é possível evitar o erro utilizando o caractere "!".

## Bigint

- Com o tipo bigint, pode-se declarar números com valores MUITO altos.

- Podemos utilizar a notação literal, exemplo: 100n.

- Para este recurso, é preciso mudar a configuração do typescript, para a versão mínima de ES2020.

## Symbol

- De forma resumida, o Symbol cria uma referência única para um valor.

- Ou seja, mesmo que ele possua o mesmo valor de outra variável, terá valores sendo considerados diferentes.

- Para este recurso, é preciso mudar a configuração do typescript, para a versão mínima de ES2020.

# Narrowing (Verificação de tipos e dados)

- Narrowing é um recurso de typescript para identificar tipos de dados, dando assim uma direção diferente a execução do programa, baseada no tipo que foi identificado.

- Há situações em que os tipos podem ser imprevisíveis, e queremos executar algo para cada uma das possibilidades.

- Isso é fundamental para evitar erros de compilador, identificando e resolvendo os possíveis erros na hora de desenvolvimento.

## Typeof Type Guard

- O type guard é basicamente uma validação do tipo utilizando o typeof.

- Desta maneira, é possível comparar o retorno do operador com um possível tipo.

- Todos os dados vem como string, exemplo: "string", "number", "boolean". E a partir disso, são realizadas bifurcações.

## Checando se valor existe

- Podemos oclocar uma variável em um if, e, se houver valor, recebemos um true, caso não, um false.

- Desta maneira, é possível realizar o narrowing também.

## Instanceof

- Para além dos tipos primitivos, podemos trabalhar com o instanceof, checando se um dado pertence a uma determinada classe.

- E ele vai servir até para próprias classes criadas.

## Operador in

- O operador <strong>in</strong> é utilizado para checar se existe uma propriedade no objeto, uma vez que as propriedades podem ser opcionais.

# Funções em Typescript

## Funções sem retorno

- É possível criar funções que não retornam valores, elas recebem o tipo void, ele vai fazer com que o typescript entenda que não há um valor de retorno.

## Callback como argumento

- Podemos inserir uma função de callback como argumento de função, nela, é possível definir o tipo de argumento aceito pelo callback e, também, o tipo de retorno da mesma.

## Generic functions

- É uma estratégia para quando o tipo de retorno é relacionado ao tipo do argumento, por exemplo: Um item de um array, pode ser string, boolean ou number.

- Normalmente, são utilizadas letras como T ou U para definir os generics, é uma convenção.

## Constraints nas Generics Functions

- As generic functions podem ter seu escopo reduzido por constraints, basicamente, limitando os tipos que podem ser utilizados no Generic, fazendo com que o escopo seja menos abrangente,

## Definindo tipo de parâmetros

- Em Generic Functions, temos que utilizar parâmetros de tipos semelhantes para evitar erros, porém, há a possíbilidade de determinar o tipo também dos parâmetros aceitos, com uma sintaxe especial.

- Isso faz com que a validação do typescript aceite os tipos escolhidos.

## Parâmetros opcionais

- Nem sempre é utilizado todos os parâmetros de uma função, mas, se ele for opcional, é necessário declarar isso para o typescript e deixar ele no fim da lista de parâmetros.

## Parâmetros default

- Os parâmetros default são os que já possuem um valor definido. Se não for passado para a função, é utilizado esse valor.

- Para este recurso, a aplicação é igual em Javascript.

## Unknow type

- O tipo unknow é utilizado de forma semelhante ao any, ele aceita qualquer tipo de dado, porém, a diferença é que ele não deixa algo ser executado se não houver validação de tipo.

- Ou seja, adiciona uma trava de segurança.

## Never type

- O never é um tipo de retorno semelhante ao void, porém, é utilizado quando a função não retorna nada.

- Um exemplo: retorno de erros.

## Rest Parameters

- Em Javascript ES6 é possível utilizar o rest operator, para aplicá-lo em parâmetros em typescript, basta definir o tipo de dado com a sintaxe de Rest (...)

## Destructuring em parâmetros

- O Destructuring também pode ser aplicado com typescript, é necessário apenas determinar o tipo de cada dado que será desestruturado.

# Object Types

## O que são Object Types?

- São os dados que tem como tipo objeto, por exemplo: object literals e arrays.

- Há diversos recursos para explorar sobre estes tipos, como <strong>Interfaces</strong>, <strong>readonly</strong>, <strong>tupla</strong> e outros.

## De tipo para Interface

- Um caso de uso para interfaces é simplificar os parâmetros de objeto de funções.

- Ou seja, ao invés de passar parâmetros de um objeto longo para n funções, é passado apenas a Interface.

## Propriedades opcionais em Interfaces

- As interfaces podem conter propriedades de objeto opcionais, basta adicionar o "?" no nome da propriedade.

## Propriedades Readonly

- As propriedades readonly podem ser alteradas apenas uma vez, na criação do novo dado. É uma forma de criar um valor constante em um objeto.

- Podemos adicionar as interfaces.

## Index Signature

- O Index Signature é utilizado quando não sabemos ainda o nome das chaves, porém, já sabemos quais os tipos de um objeto ou array.

- Isso restringe a tipos que não devem ser utilizados.

## Herança de Interface

- Utilizamos Extending Types como uma herança para criar tipos mais complexos por meio de uma interface, ou seja, uma interface pode herdar as propriedades e tipos já definidos de outra.

- Isso acontece por meio da instrução extends.

## Intersection Types

- Intersection Types são utilizados para criar tipos mais complexos a partir de duas interfaces, concatenando os tipos com o "&".

## ReadOnlyArray

- O ReadOnlyArray é um tipo para arrays, que deixa os itens como readonly, podemos aplicar um tipo para os itens do array, além desta propriedade especial.

- A modificação de itens pode ser feita através de método, mas não é possível aumentar o array, por exemplo.

## Tuplas

- Tupla é um tipo de array, porém, é definido a quantidade e o tipo de elementos. Basicamente, é criado um novo type, e, nele, inserido um array com os tipos necessários.

- Cada tipo conta também como um elemento.

## Tuplas com readonly

- É possível criar tuplas com a propriedade readonly, é um tipo de dado super restrito, pois limita quantos itens teremos, qual o tipo de cada um e também não são modificáveis.

# Criação de Tipos

- Há a possibilidade de gerar novos tipos em typescript, seja com Generics ou com outros operadores.

- A ideia deste recurso é deixar a manutenção do projeto mais simples, gastando mais tempo na estruturação dos tipos e menos na busca de possíveis bugs depois.

## Generics (revisão)

- Utilizado quando uma função pode aceitar mais de um tipo.

### Constraints em Generics

- As constraints ajudam a limitar os tipos aceitos, como em Generic pode-se ter tipos livre, elas vão filtrar os tipos aceitos, adicionando organização quando queremos aproveitar a liberdade dos Generics.

### Interface com Generics

- Com Interfaces é possível criar tipos mais complexos para objetos, adicionando generics, podemos deixá-los ainda mais brandos, aceitando tipos diferentes em ocasiões diferentes.

### Type Parameters

- Type parameters é um recurso de Generics utilizado para dizer que algum parâmetro de uma função, por exemplo, é a chave de um objeto, que também é parâmetro.

- Desta maneira, é possível criar uma ligação entre o tipo genérico e sua chave.

## Keyof type operator

- Com o keyof type operator, podemos criar um novo tipo, ele aceita dados do tipo objeto, como object literals e arrays e, pode criar o tipo baseado nas chaves do objeto passado como parâmetro.

## Typeof Type Operator

- Com o typeof Type Operator, podemos criar um novo tipo baseado no tipo de algum dado, ou seja, é interessante para quando queremos criar uma variável com o mesmo tipo da outra, por exemplo.

## Indexed Access Types

- A abordagem Indexed Access Types pode criar um tipo baseado em uma chave de objeto, ou seja, conseguimos reaproveitar o tipo da chave para outros locais, como funções.

## Conditional Expressions Type

- O tipo por condição permite criar um novo tipo com base em um if/else, mas não são aceitas expressões tão amplas.

- É utilizado a sintaxe de if ternário.

## Template Literals Type

- Podemos criar tipos com Template Literals, é uma forma de customizar tipos de maneiras infinitas, pois o texto que formamos pode depender de variáveis.

# Classes com Typescript

## Campos em classes

- Em typescript, é possível adicionar novos campos a uma classe, ou seja, iniciar a classe com campos para os futuros dados dos objetos que serão as propriedades dos objetos instanciados, estes campos podem ser tipados também.

- Um campo sem valor inicial, deve ser declarado com "!".

## Constructor

- Constructor é uma função que dá a possibilidade de iniciar um objeto com valores nos seus campos, fazendo com que não precise mais usar o valor inicial nulo com "!".

- Geralmente, todos os campos serão preenchidos na hora de instanciar um objeto.

## Campos readonly

- É possível iniciar o campo com valor e torná-lo readonly, ou seja, será um valor só para consulta.

- Não é possível alterar este valor ao longo do programa.

## Herança e super

- Para gerar uma herança, utilizamos a palavra reservada extends, depois, é preciso passar as propriedades da classe pai para ela, quando instanciamos um objeto.

- Isso será feito com a função <strong>super</strong>

## Métodos

- Métodos são como funções de uma classe, podendo criá-los junto das classes e os objetos podem utilizá-los.

- É uma maneira de adicionar funcionalidades as classes.

## O This em classes

- A palavra reservada this serve para nos referirmos ao objeto em si, ou seja, conseguimos acessar as suas propriedades.

- Esta funcionalidade funciona da mesma forma que em Javascript.

## Getters

- Os getters são uma forma de retornar propriedades do objeto, porém, podemos modificá-las neste retorno.

- Ou seja, é um método para ler propriedades.

## Setters

- Os getter leem propriedades, já os setters, modificam/atribuem, logo, podemos fazer validações antes de inserir uma propriedade.

- Os setters também funcionam como métodos.

## Herança de Interfaces

- É possível herdar de interfaces também com a instrução de implements, a ideia é bem parecida de extends, porém, esta forma é mais utilizada para criar os métodos que várias classes terão em comum.

## Override de métodos

- O override é uma técnica utilizada para substituir um método de uma classe que herda algo. Basta criar o método com o mesmo nome na classe filha, caracterizando o override.

## Visibilidade

- Visibilidade é o conceito de expor nossos métodos de classes, sendo eles:

#### public

- Visibilidade default, pode ser acessado em qualquer lugar.

#### protected

- Acessível apenas a subclasses da classe do método, para acessar uma propriedade precisamos de um método.

#### private

- Apenas a classe que declarou o método pode utilizar.
