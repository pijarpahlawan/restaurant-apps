import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

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
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.#content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
