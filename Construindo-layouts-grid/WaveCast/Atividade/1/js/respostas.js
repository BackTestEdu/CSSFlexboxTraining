function resposta(resposta) {
    switch (resposta) {
        case "A":
            document.body.style.display = 'grid';
            document.body.style.gridTemplateAreas = '"header header" "main aside"';
            document.querySelector('.cabecalho').style.gridArea = 'header';
            document.querySelector('.lateral').style.gridArea = 'aside';
            document.querySelector('.principal').style.gridArea = 'main';
            document.querySelector('.descricao').style.color = 'green';
            var descricao = document.getElementsByClassName('descricao')[0];
            descricao.innerHTML = "Alternativa correta!";
           
            break;
        case "B":
            document.body.style.display = 'grid';
            document.body.style.gridTemplateAreas = '"header header" "main aside"';
            document.querySelector('.cabecalho').style.gridArea = 'cabecalho';
            document.querySelector('.lateral').style.gridArea = 'lateral';
            document.querySelector('.principal').style.gridArea = 'principal';
            document.querySelector('.descricao').style.color = 'red';
            var descricao = document.getElementsByClassName('descricao')[0];
            descricao.innerHTML = "Pense mais um pouco! O valor passado para as classes deve sempre ser correspondente aos valores passados na propriedade grid-template-areas.";
           

            // body {
            //     display: grid;
            //     grid-template-areas: 
            //     "header header"
            //     "main aside";
            // }
            
            // .cabecalho {     
            //     grid-area: cabecalho;
            // }
            
            // .lateral { 
            //     grid-area: lateral;
            // }
            
            // .principal { 
            //     grid-area: principal;
            break;
        case "C":
            document.body.style.display = 'grid';
            document.body.style.gridTemplateAreas = '"header header" "main aside"';
            document.querySelector('.cabecalho').style.gridArea = 'header';
            document.querySelector('.lateral').style.gridArea = 'aside';
            document.querySelector('.principal').style.gridArea = 'main';
            // body {
            //     grid-template-areas: 
            //     "aside aside"
            //     "main header";
            // }
            
            // .cabecalho {     
            //     display: grid;
            //     grid-area: header;
            // }
            
            // .lateral { 
            //     display: grid;
            //     grid-area: aside;
            // }
            
            // .principal { 
            //     display: grid;
            //     grid-area: main;
            // }
            break;
        case "D":
            document.body.style.display = 'grid';
            document.body.style.gridTemplateAreas = '"header header" "main aside"';
            document.querySelector('.cabecalho').style.gridArea = 'header';
            document.querySelector('.lateral').style.gridArea = 'aside';
            document.querySelector('.principal').style.gridArea = 'main';
            // body {
            //     display: grid;
            //     grid-template-columns: 
            //     "cabecalho cabecalho"
            //     "principal lateral";
            // }
            
            // .cabecalho {     
            //     grid-area: header;
            // }
            
            // .lateral { 
            //     grid-area: aside;
            // }
            
            // .principal { 
            //     grid-area: main;
            // }
            break;

        default:
            break;
    }
}