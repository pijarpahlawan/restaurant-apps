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

async function getRestaurantDetail(id) {
    try {
        const response = await fetch(API_ENDPOINTS.RESTAURANT_DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    } catch (error) {
        return error.message;
    }
}

async function addRestaurantReview(review) {
    try {
        const response = await fetch(API_ENDPOINTS.RESTAURANT_REVIEW, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
        });
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return error.message;
    }
}

export { getAllRestaurant, getRestaurantDetail, addRestaurantReview };
