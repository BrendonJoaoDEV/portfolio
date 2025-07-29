export function definirTema (elementoPrincipal) {
    const preferenciaTema = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (preferenciaTema) {
        elementoPrincipal.setAttribute('data-theme', 'dark');
    } else {
        elementoPrincipal.setAttribute('data-theme', 'light');
    }
}

function mudarTema () {}