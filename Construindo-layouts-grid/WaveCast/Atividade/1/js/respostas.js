function resposta(resposta) {
    let descricao = document.getElementsByClassName('descricao')[0];
    switch (resposta) {
        case "A":
            btnReset();
            document.getElementsByTagName('button')[0].style.color = 'lightgreen';
            document.body.style.display = 'grid';
            document.body.style.gridTemplateAreas = '"header header" "main aside"';
            document.querySelector('.cabecalho').style.gridArea = 'header';
            document.querySelector('.lateral').style.gridArea = 'aside';
            document.querySelector('.principal').style.gridArea = 'main';
            document.querySelector('.descricao').style.color = 'green';
            descricao.innerHTML = "Alternativa correta!";
           
            break;
        case "B":
            btnReset();
            document.getElementsByTagName('button')[1].style.color = 'red';
            document.body.style.display = 'grid';
            document.body.style.gridTemplateAreas = '"header header" "main aside"';
            document.querySelector('.cabecalho').style.gridArea = 'cabecalho';
            document.querySelector('.lateral').style.gridArea = 'lateral';
            document.querySelector('.principal').style.gridArea = 'principal';
            document.querySelector('.descricao').style.color = 'red';
            descricao.innerHTML = "Pense mais um pouco! O valor passado para as classes deve sempre ser correspondente aos valores passados na propriedade grid-template-areas.";
            break;
        case "C":
            btnReset();
            document.getElementsByTagName('button')[2].style.color = 'red';
            document.body.style.display = 'grid';
            document.body.style.gridTemplateAreas = '"aside aside" "main header"';
            document.querySelector('.cabecalho').style.display ='grid';
            document.querySelector('.cabecalho').style.gridArea = 'header';
            document.querySelector('.lateral').style.display ='grid';
            document.querySelector('.lateral').style.gridArea = 'aside';
            document.querySelector('.lateral').style.display ='grid';
            document.querySelector('.principal').style.gridArea = 'main';
            document.querySelector('.descricao').style.color = 'red';
            descricao.innerHTML = "Pense mais um pouco! O valor passado para as classes deve sempre ser correspondente aos valores passados na propriedade grid-template-areas.";
            break;
        case "D":
            btnReset();
            document.getElementsByTagName('button')[3].style.color = 'red';
            document.body.style.display = 'grid';
            document.body.style.gridTemplateAreas = '"cabecalho cabecalho" "principal lateral"';
            document.querySelector('.cabecalho').style.gridArea = 'header';
            document.querySelector('.lateral').style.gridArea = 'aside';
            document.querySelector('.principal').style.gridArea = 'main';
            document.querySelector('.descricao').style.color = 'red';
            descricao.innerHTML = "Pense mais um pouco! A propriedade grid-template-columns é utilizada para criar colunas, e não uma grade de linhas e colunas. ";
            break;

        default:
            break;
    }
}

function btnReset(){
    const buttons = document.querySelectorAll('button');

    for (let i = 0; i < buttons.length && i < 4; i++) {
        buttons[i].style.color = 'white';
    }
}