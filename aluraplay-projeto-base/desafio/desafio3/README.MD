# Suponhamos que temos quatro itens em um container

Suponhamos que temos quatro itens em um container, com as cores laranja, azul escuro, vermelho e azul claro. O layout possui 1000px de largura, e cada item possui 250px de largura.

## Utilizando Flexbox para Redimensionar Itens

Quando alinhamos os elementos com `display: flex`, já conseguimos ter o efeito de diminuir os itens, de acordo com a largura do container.

## Reduzindo o Layout para 500px de Largura

O layout possui 500px de largura, espremendo o container e os itens no seu interior.

## Modificando o Comportamento de Redimensionamento

Suponha que é preciso que apenas o primeiro item diminua. É possível com o seguinte código:

```css
.item-1 {
    background-color: #d34f26; 
    flex-shrink: 5;
}

.item-2 {
    background-color: #68b6e2;
    flex-shrink: 1;
}

.item-3 {
    background-color: red;
    flex-shrink: 1;
}

.item-4 {
    background-color: rgb(0, 217, 255);
    flex-shrink: 1;
}

## Objetivo: Itens do Meio Encolhem Mais

Seguindo esta linha de raciocínio, quais valores aplico para cada item, para que, quando o layout diminua de largura, os dois itens do meio encolham mais do que os dois das extremidades?


# Segue imagem ilustrando o objetivo:

https://caelum-online-public.s3.amazonaws.com/2577-flexbox/imagens/aula5-img4.png