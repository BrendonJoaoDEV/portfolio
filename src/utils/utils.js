export async function carregarElementoEstatico(caminhoElemento, elementoPlaceholder) {
    try {
        let novoElemento = await fetch(caminhoElemento);
        novoElemento = await novoElemento.text();
        novoElemento = converterStringEmElemento(novoElemento);
        elementoPlaceholder.replaceWith(novoElemento);
    } catch (error) {
        console.error(error.text);
    }
}

export function converterStringEmElemento(stringHTML) {
    let elemento = new DOMParser();
    elemento = elemento.parseFromString(stringHTML, 'text/html');
    elemento = elemento.body.firstElementChild;
    return elemento;
}