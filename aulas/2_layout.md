# Layout de páginas

## Divs

### Largura e altura de elementos

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Aula 2 - Layout CSS</title>
        <link rel="stylesheet" type="text/css" href="estilo.css">
    </head>
    <body>
        <div class="header"></div>
        <div class="menu-lateral"></div>
        <div class="conteudo-principal"></div>
        <div class="footer"></div>
    </body>
</html>
```

#### CSS Reset

```css
body {
    margin: 0;
    padding: 0;
    border: 0;
}
```

### Position

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id augue sapien. Quisque non tortor ac nisl aliquet rutrum eu ut est. Integer erat mauris, accumsan aliquam vestibulum vitae, volutpat id nunc. Aenean ac gravida tortor. Etiam fringilla, sem ut aliquet aliquet, dui eros blandit dolor, eu tempus nisi mauris eleifend magna. Donec ullamcorper lacus quis lacus molestie, sed bibendum eros maximus. Aenean cursus lobortis neque, vel tristique ante mattis eget. Donec aliquam tincidunt ipsum eget egestas. Sed in lectus ac arcu tincidunt interdum. Nam est ex, varius quis ultricies suscipit, facilisis in tortor. Etiam consectetur vitae est id molestie. Etiam lacus tortor, viverra non neque sed, viverra lobortis magna. </p>
```

- Relative
- Absolute
- Fixed

```css
.header {
    height: 100px;
    background-color: red;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
```

### Margin e Padding

- Margin: Espaçamento para fora
- Padding: Espaçamento para dentro

### Semantica

- `Header` - Cabeçalho de um conteúdo, como da página, ou de algum outro elemento
- `Nav` - Links de navegação principal da página
- `Main` - Conteúdo principal da página
- `Article` - Conteúdo independente do resto da página, deveria fazer sentido mesmo se retirado da página. Ex: Uma receita
- `Footer` - Rodapé de um documento ou elemento
- [Outros](https://www.w3schools.com/html/html5_semantic_elements.asp)

## CSS Grid Layout

[Melhor ver aqui](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Flexbox

Adicionar conteúdo no cabeçalho, rodapé e menu lateral da página

## Media queries

?????????
