`
    Há 12 tipos diferentes de "nós" no DOM HTML
    (elemento, atributo, texto, comentário, etc)
    Um elemento é só tum tipo específico de nó.
`;

`Para navegar entre os nós: `;

    Node
        .parentNode
        .parentElement
        .nextSibling
        .previousSibling
        .nextElementSibling
        .previousElementSibling

    Node 
        .childNodes
        .children 
        .firstChild 
        .firstElementChild
        .lastChild
        .lastElementChild
        .hasChildNodes()

`Adicionar nós: `;
    ParentNode 
        .prepend()
        .append()
    
    Node 
        .appendChild()
        .insertBefore()
        .cloneNode()

    ChildNode 
        .after()
        .before()
    
    Element 
        .insertAdjacentElement()
        .inserAdjacentHTML()
        .insertAdjacentText()

`Remover nós:`;

    Node 
        .replaceChild()
        .removeChild()
    
    ChildNode 
        .remove()

`Criar nós: `;

    document 
        .createElement()
        .createAttribute()
        .createTextNode()
        .write()