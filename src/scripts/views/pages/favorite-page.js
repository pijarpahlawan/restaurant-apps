import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";

const FavoritePage = {
    async render() {
        return `
            <restaurant-list title="Your Favorite Restaurant"></restaurant-list>
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        const restaurantListElement = document.querySelector("restaurant-list");
        restaurantListElement.restaurants = restaurants;
    },
};

export default FavoritePage;
