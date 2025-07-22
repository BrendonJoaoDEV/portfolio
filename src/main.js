import { carregarElementoEstatico } from './utils/utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header-placeholder');
    const footer = document.getElementById('footer-placeholder');

    carregarElementoEstatico('../partials/header.html', header);
    carregarElementoEstatico('../partials/footer.html', footer);
});