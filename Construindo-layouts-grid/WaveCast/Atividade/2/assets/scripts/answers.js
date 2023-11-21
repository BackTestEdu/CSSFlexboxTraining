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
    const correct = "Acertou! A propriedade CSS align-items: end; alinha os itens ao final do contêiner na direção do bloco, que é o que nós queremos neste caso.";
    resetButtons();

    switch (answer) {
        case "A":
            buttons[0].style.color = 'red';
        description.innerHTML = "align-items: start; faz com que os itens sejam alinhados ao início da célula na direção do bloco.";
            return `
            .secao-imagens {
                align-items: start;
            }
            
        `;
        case "B":
            buttons[1].style.color = '#0f0';
            description.innerHTML = "A propriedade CSS align-items: end; alinha os itens ao final do contêiner na direção do bloco, que é o que nós queremos neste caso.";
            return `
            .secao-imagens {
                align-items: end;
            }
        `;
        case "C":
            buttons[2].style.color = 'red';
            description.innerHTML = "align-items: stretch; esticará os itens para preencher toda a célula na direção do bloco.";
            return `
            .secao-imagens {
                align-items: stretch;
            }
        `;
        case "D":
            buttons[3].style.color = 'red';
            description.innerHTML = "align-items: center; centralizará os itens na célula na direção do bloco.";
            return `
            .secao-imagens {
                align-items: center;
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