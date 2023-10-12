import DrawerInitiator from "../utils/drawer-initiator";
import HomePage from "./pages/home-page";

class App {
    #button = null;
    #drawer = null;
    #content = null;

    #initialAppShell() {
        DrawerInitiator.init({
            button: this.#button,
            drawer: this.#drawer,
            content: this.#content,
        });
    }

    constructor({ button, drawer, content }) {
        this.#button = button;
        this.#drawer = drawer;
        this.#content = content;

        this.#initialAppShell();
    }

    async renderPage() {
        const page = HomePage;
        this.#content.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;
