import template from "./templates/home-page.html";
import "./styles/home-page.scss";
import { getAllRestaurant } from "../../data/data-source";

const HomePage = {
    async render() {
        return template;
    },

    async afterRender() {
        const restaurantListElement = document.querySelector("restaurant-list");

        try {
            const response = await getAllRestaurant();

            if (response.error) {
                throw new Error(response.message);
            }

            restaurantListElement.restaurants = response.restaurants;
        } catch (error) {
            restaurantListElement.renderError(error);
        }
    },
};

export default HomePage;
