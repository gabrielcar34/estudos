`
    Evite exportar referências
`;

Object.create("objectPai", {
    nome: {
        value: "Gabriel"
    }
}) // Cria um objeto vinculado a cadeia de prototype do pai. O pai será inserido no primeiro parâmetro. O segundo parâmetro é um objeto com propridades descritoras.

Object.assign("objDestino", "objFonte") // Ele une propriedades no objDestino, mas só pega propriedades enumerebles do prototype.
Object.assign({}, "objFonte", "objFonte") // Outra forma 

Object.keys() // Retorna as chaves do objeto, ou seja, as propriedades. Não mostra propriedades não enumeradas.

Object.values() // Retorna os valores do objeto.

Object.entries() // Retorna as propriedades e chaves do objeto.

Object.freeze("object") // Congela um objeto para que ele não possa sofrer alterações. Não pode criar, atualizar e nem remover.

delete eu.nome // Deletar uma propriedade

Object.seal("object") // Não pode criar, pode atualizar, mas não pode remover. Ou seja, só permite a atualização.

Object.preventExtensions("object") // Não pode criar, pode atualizar e pode remover. Ou seja, só permite manipular propriedades o que já existe.

// Deep freeze - Quando congelamos um objeto estamos congelando a primeira camada, ou seja, se essa propriedade tiver um objeto como valor ele poderá ser alterado.



