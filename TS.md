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
