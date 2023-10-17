import template from "./templates/restaurant-item.html";
import "./styles/restaurant-item.scss";
import API_CONFIG from "../../config/api-config";

class RestaurantItem extends HTMLElement {
    #restaurant = null;

    connectedCallback() {
        this.render();
    }

    set restaurant(value) {
        this.#restaurant = value;
        this.afterRender();
    }

    get restaurant() {
        return this.#restaurant;
    }

    render() {
        // assign main class and innerHTML
        this.className = "restaurant-item";
        this.innerHTML = template;
    }

    afterRender() {
        // get elements
        const anchorElement = this.querySelector("#restaurant-item-anchor");
        const pictureElement = this.querySelector("#restaurant-item-picture");
        const ratingElement = this.querySelector("#restaurant-item-rating");
        const nameElement = this.querySelector("#restaurant-item-name");
        const descriptionElement = this.querySelector(
            "#restaurant-item-description"
        );

        // set elements attribute value
        anchorElement.href = `/#/detail/${this.restaurant.id}`;

        pictureElement.src = `${API_CONFIG.BASE_IMAGE_URL}${this.restaurant.pictureId}`;
        pictureElement.alt = this.restaurant.name;

        ratingElement.innerHTML = this.restaurant.rating;

        nameElement.innerHTML = this.restaurant.name;

        descriptionElement.innerHTML = this.restaurant.description;
    }
}

customElements.define("restaurant-item", RestaurantItem);
