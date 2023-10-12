import hamburger from "../../../assets/icons/hamburger.svg";
import close from "../../../assets/icons/close.svg";

class HamburgerButton extends HTMLElement {
    #isOpen = false;

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <button id="hamburgerButton" type="button"></button>
        `;
        this.renderIcon();
    }

    set isOpen(value) {
        this.#isOpen = value;
        this.renderIcon();
    }

    get isOpen() {
        return this.#isOpen;
    }

    renderIcon() {
        const hamburgerButton = this.querySelector("#hamburgerButton");
        hamburgerButton.innerHTML = this.#isOpen ? close : hamburger;
    }
}

customElements.define("hamburger-button", HamburgerButton);
