function loadInternalPage(answer) {
    const iframe = document.querySelector("#container-test");

    const htmlCode = debug(answer);

    // Make a GET request for the internal page
    fetch('assets/pages/internal-page.html')
        .then(response => response.text())
        .then(data => {
            // Set the iframe content with the response
            iframe.contentDocument.open();
            iframe.contentDocument.write(data);
            iframe.contentDocument.close();

            // Add any additional DOM manipulation or styles here
            const styleElement = iframe.contentDocument.createElement('style');
            styleElement.innerHTML = htmlCode;

            // Add the style element to the internal page's head
            iframe.contentDocument.head.appendChild(styleElement);
        })
        .catch(error => console.error('Error loading internal page:', error));
}

function debug(answer) {
    let description = document.querySelector('.description');
    let buttons = document.querySelectorAll('button');
    const correct = "Alternativa correta!";
    resetButtons();

    switch (answer) {
        case "A":
            buttons[0].style.color = '#0f0';
            description.innerHTML = correct;
            return `
            body {
                display: grid;
                grid-template-areas: 
                "header header"
                "main aside";
                }
                
                .cabecalho {     
                grid-area: header;
                }
                
                .lateral { 
                grid-area: aside;
                }
                
                .principal { 
                grid-area: main;
                }
        `;
        case "B":
            buttons[1].style.color = 'red';
            description.innerHTML = "Pense mais um pouco! O valor passado para as classes deve sempre ser correspondente aos valores passados na propriedade grid-template-areas."
            return `
            body {
                display: grid;
                grid-template-areas: 
                "header header"
                "main aside";
                }
                
                .cabecalho { 
                grid-area: cabecalho;
                }
                
                .lateral { 
                grid-area: lateral;
                }
                
                .principal { 
                grid-area: principal;
                }
        `;
        case "C":
            buttons[2].style.color = 'red';
            description.innerHTML = "Tente outra vez! O display grid deve ser aplicado na tag pai dos itens a serem organizados, e não em cada um deles. ";
            return `
            body {
                grid-template-areas: 
                "aside aside"
                "main header";
                }
                                
                .cabecalho {     
                display: grid;
                grid-area: header;
                }
                
                .lateral { 
                display: grid;
                grid-area: aside;
                }
                                
                .principal { 
                display: grid;
                 grid-area: main;
                }
        `;
        case "D":
            buttons[3].style.color = 'red';
            description.innerHTML = "Pense mais um pouco! A propriedade grid-template-columns é utilizada para criar colunas, e não uma grade de linhas e colunas. ";
            return `
            body {
                display: grid;
                grid-template-columns: 
                "cabecalho cabecalho"
                "principal lateral";
                }
                
                .cabecalho {     
                grid-area: header;
                }
                
                .lateral { 
                grid-area: aside;
                }
                
                .principal { 
                grid-area: main;
                }
        `;

        default:
            break;
    }
}

function resetButtons() {
    const buttons = document.querySelectorAll('button');

    for (let i = 0; i < buttons.length && i < 4; i++) {
        buttons[i].style.color = 'white';
    }
}