export function definirTema (elementoPrincipal) {
    const preferenciaTema = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (preferenciaTema) {
        elementoPrincipal.setAttribute('data-theme', 'dark');
    } else {
        elementoPrincipal.setAttribute('data-theme', 'light');
    }
}

export function mudarTema (elementoPrincipal) {
    const temaAtual = elementoPrincipal.getAttribute('data-theme');

    if (temaAtual === 'light') {
        elementoPrincipal.setAttribute('data-theme', 'dark');
    } else {
        elementoPrincipal.setAttribute('data-theme', 'light');
    }
}