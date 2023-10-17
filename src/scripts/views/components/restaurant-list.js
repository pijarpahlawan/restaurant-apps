import template from "./templates/restaurant-list.html";
import "./styles/restaurant-list.scss";

class RestaurantList extends HTMLElement {
    #restaurants = null;

    connectedCallback() {
        this.render();
    }

    set restaurants(value) {
        this.#restaurants = value;
        this.afterRender();
    }

    get restaurants() {
        return this.#restaurants;
    }

    render() {
        // assign main class and innerHTML
        this.className = "restaurant-list";
        this.innerHTML = template;

        // get attribute value
        const title = this.getAttribute("title");
        this.querySelector("#restaurant-list-title").innerHTML = title;
    }

    afterRender() {
        // get element
        const restaurantListElement = this.querySelector("#restaurant-list");
        this.#restaurants.forEach((restaurant) => {
            const restaurantItemElement =
                document.createElement("restaurant-item");
            restaurantListElement.appendChild(restaurantItemElement);
            restaurantItemElement.restaurant = restaurant;
        });
    }
}

customElements.define("restaurant-list", RestaurantList);
