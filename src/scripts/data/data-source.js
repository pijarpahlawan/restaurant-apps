import API_ENDPOINTS from "./api-endpoint";

async function getAllRestaurant() {
    const response = await fetch(API_ENDPOINTS.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
}

async function getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINTS.RESTAURANT_DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
}

async function addRestaurantReview(review) {
    const response = await fetch(API_ENDPOINTS.RESTAURANT_REVIEW, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
    });
    const responseJson = await response.json();
    return responseJson;
}

export { getAllRestaurant, getRestaurantDetail, addRestaurantReview };
