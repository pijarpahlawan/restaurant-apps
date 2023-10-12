import DrawerInitiator from "../utils/drawer-initiator";

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
}

export default App;
