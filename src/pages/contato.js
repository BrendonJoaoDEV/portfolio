import { carregarElementoEstatico, validarNome, validarEmail, validarVazio} from '../utils/utils.js';
import { definirTema, mudarTema } from '../modules/mudanca_tema.js';

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const header = document.getElementById('header-placeholder');
    const footer = document.getElementById('footer-placeholder');
    const btnTema = document.getElementById('btn-tema');
    const btnEnviar = document.getElementById('enviar-formulario');
    const entradaNome = document.getElementById('entrada-nome');
    const entradaEmail = document.getElementById('entrada-email');
    const entradaMotivo = document.getElementById('entrada-motivo');
    const entradaMensagem = document.getElementById('entrada-mensagem');
    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const erroMensagem = document.getElementById('erro-mensagem');

    definirTema(body);

    carregarElementoEstatico('../partials/header.html', header);
    carregarElementoEstatico('../partials/footer.html', footer);

    btnTema.addEventListener('click', () => {mudarTema(body)});

    btnEnviar.addEventListener('click', () => {
        // Pegar valores dos campos de entrada
        let nome = entradaNome.value;
        let email = entradaEmail.value;
        let motivo = entradaMotivo.value;
        let mensagem = entradaMensagem.value;
        
        // Validar cada um desses valores
        let validacao = validarNome(nome);
        if (!validacao.valido) {
            erroNome.style.display = 'block';
            erroNome.textContent = validacao.erro;
        } else {
            erroNome.style.display = 'none';
        }

        validacao = validarEmail(email);
        if (!validacao.valido) {
            erroEmail.style.display = 'block';
            erroEmail.textContent = validacao.erro;
        } else {
            erroEmail.style.display = 'none';
        }

        validacao = validarVazio('Mensagem', mensagem);
        if (!validacao.valido) {
            erroMensagem.style.display = 'block';
            erroMensagem.textContent = validacao.erro;
        } else {
            erroMensagem.style.display = 'none';
        }
        // Validar se o usuário parece humano suficiente
            // Se todos forem válidos e usuário humano: enviar dados estruturados a função de envio
            // Se não, pedir para o usuário reinserir o dado invalido
    });
});