import { validarVazio } from "../utils/utils.js";

export function verificarHoneypot(elementoHoneypot) {
    let validacao = validarVazio('Honeypot', elementoHoneypot.value);
    if (validacao.valido) {
        return {valido: false, erro: 'Campo honeypot não deveria ser preenchido'};
    } else {
        return {valido: true, erro: 'Tudo certo!'};
    }
}

export function verificarTempo(tempoInicio) {

}

export function verificarToken() {

}