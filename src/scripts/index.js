import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "../styles/responsive.scss";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
    button: document.querySelector("#hamburgerButton"),
    drawer: document.querySelector("#navigationDrawer"),
    content: document.querySelector("#mainContent"),
});

window.addEventListener("load", () => {
    app.renderPage();
    swRegister();
});

window.addEventListener("hashchange", () => {
    app.renderPage();
});
