import { carregarElementoEstatico } from './utils/utils.js';
import { definirTema } from './modules/mudanca_tema.js';

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const header = document.getElementById('header-placeholder');
    const footer = document.getElementById('footer-placeholder');
    
    definirTema(body);

    carregarElementoEstatico('../partials/header.html', header);
    carregarElementoEstatico('../partials/footer.html', footer);
});