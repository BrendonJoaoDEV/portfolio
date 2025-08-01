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

export function validarNome(nome) {
    if (!nome || nome.trim() === '') {
        return {valido: false, erro: 'Preencha o campo "Nome"'};
    }

    if (nome.trim().split(/\s+/).length < 2) {
        return {valido: false, erro: 'Prencha o campo "Nome" com nome e sobrenome'};
    }

    const regex = /^[a-zA-ZÀ-ÿ\s]+$/;
    if (regex.test(nome)) {
        return {valido: true, erro: 'Tudo certo!'};
    } else {
        return {valido: false, erro: 'O campo "Nome" não pode conter caracteres especiais'};
    }
}

export function validarEmail(email) {
    if (!email || email.trim() === '') {
        return {valido: false, erro: 'Prencha o campo "Email"'};
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (regex.test(email)) {
        return {valido: true, erro: 'Tudo certo!'};
    } else {
        return {valido: false, erro: 'O campo "email" deve conter um email válido'};
    }
}

export function validarVazio(nomeCampo, valor) {
    if (!valor || valor.trim() === '') {
        return {valido: false, erro: `Prencha o campo "${nomeCampo}"`};
    } else {
        return {valido: true, erro: 'Tudo certo!'};
    }
}