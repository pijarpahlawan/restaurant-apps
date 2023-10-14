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
        const pictureElement = this.querySelector("#restaurant-item-picture");
        const ratingElement = this.querySelector("#restaurant-item-rating");
        const nameElement = this.querySelector("#restaurant-item-name");
        const descriptionElement = this.querySelector(
            "#restaurant-item-description"
        );

        // set elements attribute value
        pictureElement.src = `${API_CONFIG.BASE_SMALL_IMAGE_URL}${this.restaurant.pictureId}`;
        pictureElement.alt = this.restaurant.name;

        ratingElement.innerHTML = this.restaurant.rating;

        nameElement.innerHTML = this.restaurant.name;
        nameElement.href = `/#/detail/${this.restaurant.id}`;

        descriptionElement.innerHTML = this.restaurant.description;
    }
}

customElements.define("restaurant-item", RestaurantItem);
