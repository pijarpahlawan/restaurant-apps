import template from "./templates/home-page.html";
import "./styles/home-page.scss";
import { getAllRestaurant } from "../../data/data-source";

const HomePage = {
    async render() {
        return template;
    },

    async afterRender() {
        const restaurantList = await getAllRestaurant();
        const restaurantListElement =
            document.getElementById("restaurant-list");

        restaurantList.forEach((restaurant) => {
            const restaurantItemElement =
                document.createElement("restaurant-item");
            restaurantListElement.appendChild(restaurantItemElement);
            restaurantItemElement.restaurant = restaurant;
        });
    },
};

export default HomePage;
