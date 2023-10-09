import logo from "../../../assets/images/logo.svg";

class BrandLogo extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = logo;
    }
}

customElements.define("brand-logo", BrandLogo);
