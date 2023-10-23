class ToasterInitiator {
    static #message = null;

    static init(message) {
        this.#message = message;
        this.#renderToaster();
    }

    static #renderToaster() {
        const bodyElement = document.querySelector("body");
        const toastAlertElement = document.createElement("toast-alert");
        bodyElement.appendChild(toastAlertElement);
        toastAlertElement.message = this.#message;
    }
}

export default ToasterInitiator;
