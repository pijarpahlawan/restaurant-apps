import API_ENDPOINTS from "./api-endpoint";

async function getAllRestaurant() {
    try {
        const response = await fetch(API_ENDPOINTS.RESTAURANT_LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    } catch (error) {
        return error.message;
    }
}

export { getAllRestaurant };
