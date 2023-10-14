import template from "./templates/home-page.html";
import "./styles/home-page.scss";
import { getAllRestaurant } from "../../data/data-source";

const HomePage = {
    async render() {
        return template;
    },

    async afterRender() {
        const restaurantList = await getAllRestaurant();
        const restaurantListElement = document.querySelector("restaurant-list");
        restaurantListElement.restaurants = restaurantList;
    },
};

export default HomePage;
