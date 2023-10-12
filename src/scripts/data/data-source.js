import API_ENDPOINTS from "./api-endpoints";

async function getAllMenu() {
    try {
        const response = await fetch(API_ENDPOINTS.MENU_LIST);
        const responseJson = await response.json();
        return responseJson.meals;
    } catch (error) {
        return error.message;
    }
}

async function getAllRestaurant() {
    try {
        const response = await fetch(API_ENDPOINTS.RESTAURANT_LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    } catch (error) {
        return error.message;
    }
}

export { getAllMenu, getAllRestaurant };
