/**
 * Configura la pàgina amb el tema indicat.
 * @param {*} theme 
 * @param {*} save 
 */
function setTheme(theme, save) {
    const html = document.documentElement;
    const selectedTheme = theme === "osdefault"
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light")
        : theme;

    html.dataset.theme = selectedTheme;

    if (save) {
        localStorage.setItem('ring-theme', selectedTheme);
    }
}

/**
 * Inicialitza el tema de la pàgina. Mira si l'usuari ha seleccionat cap opció prèviament del localStorage. Si no, per defecte mira la config del SO.
 */
function setThemeInitial() {
    const theme = localStorage.getItem('ring-theme');

    if (theme) {
        setTheme(theme, false);
        document.querySelector(`#theme-${theme}-radio`).checked = true;
    } else {
        setTheme('osdefault', false);
    }
}

/**
 * Inicialitza la funcionalitat dels botons del tema.
 */
export function initTheme() {
    const lightButton = document.querySelector("#theme-light");
    const darkButton = document.querySelector("#theme-dark");
    const osButton = document.querySelector("#theme-osdefault");

    lightButton.addEventListener("click", () => setTheme('light', true));
    darkButton.addEventListener("click", () => setTheme('dark', true));
    osButton.addEventListener("click", () => setTheme('osdefault', true));

    setThemeInitial();
}