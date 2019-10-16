# Javascript básico

## Story time

Javascript (Ou JS) é uma linguagem interpretada de alto nível, melhor conhecida por ser a linguagem de script de páginas da web.

### Timeline

- 1993 - Universidade de Illinois lança o `NCSA Mosaic`, o primeiro web browser gráfico.
- 1994 - `Mosaic Communication` foi fundada, empregava vários dos autores do browser e tinha o intuito de criar o `Mosaic Netscape`, que não compartilhava código com o NCSA Mosaic
- - Codinome interno do projeto: `Mozilla` - Mosaic e Godzilla (????)
- Final de 1994 - Lançamento do `Mosaic Netscape`, dentro de 4 meses já tinha 3 quartos do mercado de browsers, se tornando o principal browser dos anos 90
- - Pra evitar tretas de marcas registradas, mudou o nome para `Netscape Navigator`
- - Marc Andreessen, fundador da empresa, acreditava que o HTML precisava de uma "linguagem cola", que fosse facil de utilizar tanto por web designers quanto hobby programmers e que pudesse ser escrita diretamente dentro do HTML
- 1995 - Contratam Brendan Eich, com a ideia de inserir a linguagem `Scheme` dentro do Netscape, mas antes disso eles trabalharam com a `Sun Microsystems` para inserir a linguagem estática da Sun, o `Java`, com a ideia de competir com a Microsoft na adoção de plataformas e tecnologias da web.
- - Decidem que a linguagem de script que eles iriam adotar deveria complementar o Java e deveria ter uma sintaxe parecida.
- - Javascript é criado em 10 dias, em maio de 1995 :clown_face:

## Sintaxe

### Variáveis

Temos 3 maneiras para criar variáveis

- `let`
- `const`
- `var`

A diferença `básica` entre eles é que `let` e `const` não deixam a variável ser declarada de novo, e a diferença entre `let` e `const` é que `const` é uma constante, o valor não pode ser mudado.

Javascript é uma linguagem com `tipagem dinâmica`, ou seja, as variáveis não tem tipo fixo, a mesma variável que antes era um texto pode ser um número depois.

#### Tipos de variáveis

- Números `let idade = 30`
- Strings `let nome = 'Charlie Brown'`
- Booleano `let andarDeSkate = true`
- Arrays `let integrantes = ['Chorão', 'Champignon', 'Outros']`
- Objetos `let cachorro = { nome: 'Rex', raca: 'Vira-lata', idade: 6 }`
