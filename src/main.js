import { carregarElementoEstatico } from './utils/utils.js';
import { definirTema, mudarTema } from './modules/mudanca_tema.js';

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const header = document.getElementById('header-placeholder');
    const footer = document.getElementById('footer-placeholder');
    const btnTema = document.getElementById('btn-tema');
    
    definirTema(body);

    carregarElementoEstatico('/portfolio/partials/header.html', header);
    carregarElementoEstatico('/portfolio/partials/footer.html', footer);

    btnTema.addEventListener('click', () => {mudarTema(body)});
});