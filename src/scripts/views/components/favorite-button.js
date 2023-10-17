import favorite from "../../../assets/icons/favorite.svg";
import favoriteFilled from "../../../assets/icons/favorite-filled.svg";

class FavoriteButton extends HTMLElement {
    #isLiked = false;

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <button id="favoriteButton" type="button"></button>
        `;
        this.renderIcon();
    }

    set isLiked(value) {
        this.#isLiked = value;
        this.renderIcon();
    }

    get isLiked() {
        return this.#isLiked;
    }

    renderIcon() {
        const favoriteButton = this.querySelector("#favoriteButton");
        favoriteButton.innerHTML = this.#isLiked ? favoriteFilled : favorite;
    }
}

customElements.define("favorite-button", FavoriteButton);
