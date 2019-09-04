# Frontend básico

## HTML

HTML significa Hypertext Markup Language, é uma linguagem criada por Tim Berners-Lee em 1989, mencionado pela primeira vez na internet em 1991 no documento [HTML Tags](http://info.cern.ch/hypertext/WWW/MarkUp/Tags.html), é utilizada para criar documentos de hiper texto que serão renderizados por um web browser.

Um HTML consiste de vários elementos que englobam um conteúdo para instruir o browser como ele deve ser exibido.

Exemplo de como criar um parágrafo:

```html
<p>Coragem para aprender</p>
```

Os elementos podem conter outros elementos dentro deles, ou seja, podem ser aninhados.

```html
<p><strong>Coragem</strong> para aprender</p>
```

Alguns elementos não precisam de tags de fechamento

```html
<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png" />
```

## Estrutura básica de um HTML

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Frontend básico - Aula 1</title>
    </head>
    <body>
        <p>Coragem para aprender</p>
    </body>
</html>
```

`<!DOCTYPE html>` serve para sinalizar para o browser qual versão do HTML está sendo utilizado.

`<html>` o elemento raíz que engloba o documento HTML.

No `<head>` ficam conteúdos da página que não são exibidos ao usuário final, como metadados e CSS utilizados pelo documento.

`<meta charset="utf-8">` diz para o browser qual codificação de caracteres é utilizado na página

`<title>` é o nome que é exibido na aba do browser

`<body>` é o container do conteúdo que será exibido

## Semântica e estrutura

Contamos com experiência anterior para dizer qual é função de um objeto no nosso dia a dia, um semáforo com a luz vermelha acesa significa "parar", aplicar a semântica errada pode causar problemas.

No HTML também precisamos dar contexto aos nossos elementos.

Qual a diferença entre os seguintes elementos?

```html
<span style="font-size: 32px; margin: 21px 0;">Título da página</span>
```

```html
<h1>Título da página</h1>
```

## Botando em prática

Vamos tentar criar um documento HTML com texto a seguir:

```text
Quick hummus recipe

This recipe makes quick, tasty hummus, with no messing. It has been adapted from a number of different recipes that I have read over the years.

Hummus is a delicious thick paste used heavily in Greek and Middle Eastern dishes. It is very tasty with salad, grilled meats and pitta breads.

Ingredients

1 can (400g) of chick peas (garbanzo beans)
175g of tahini
6 sundried tomatoes
Half a red pepper
A pinch of cayenne pepper
1 clove of garlic
A dash of olive oil

Instructions

Remove the skin from the garlic, and chop coarsely
Remove all the seeds and stalk from the pepper, and chop coarsely
Add all the ingredients into a food processor
Process all the ingredients into a paste.
If you want a coarse "chunky" hummus, process it for a short time
If you want a smooth hummus, process it for a longer time

For a different flavour, you could try blending in a small measure of lemon and coriander, chili pepper, lime and chipotle, harissa and mint, or spinach and feta cheese. Experiment and see what works for you.

Storage

Refrigerate the finished hummus in a sealed container. You should be able to use it for about a week after you've made it. If it starts to become fizzy, you should definitely discard it.

Hummus is suitable for freezing; you should thaw it and use it within a couple of months.
```

As seguintes tags podem ser úteis

- `<p>`: Parágrafos
- `<h1>` a `<h6>`: Headings, títulos na página
- `<ul>` e `<ol>`: Listas não ordenadas/ordenadas
- `<li>`: Item de uma lista
- `<a>`: Links para outros documentos
- `<img>`: Imagens

[Como estruturar páginas](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)

## CSS

CSS, Cascading Style Sheets, nasceu em 1996 e é como adicionamos estilo para o documento, deixando assim o HTML encarregado apenas da estrutura do documento.

Adicionamos estilos nos elementos através de seletores, conforme o exemplo a seguir:

```css
h1 {
    color: red
}
```

Temos 3 maneiras de adicionar CSS ao documento:

- Importando um arquivo css externo no `<head>` (`<link rel="stylesheet" type="text/css" href="estilo.css">`)
- Adicionando as regras no prório `<head>`
- CSS inline

### Prática 2

Deixar a página da receita de hummus mais bonita.

## Javascript

Fica pra próxima :]
