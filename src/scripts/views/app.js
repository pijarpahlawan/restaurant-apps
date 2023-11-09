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

    const page = await routes[url]();

    if (page === undefined) {
      this.#content.innerHTML = await import('./pages/error-page').then(
        (module) => module.default.render(),
      );
      return;
    }

    this.#content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElement = document.querySelector('#skipLink');
    skipLinkElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}

export default App;
