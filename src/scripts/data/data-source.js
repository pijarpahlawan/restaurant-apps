import ToasterInitiator from "../utils/toaster-initiator";
import API_ENDPOINTS from "./api-endpoint";

// get restaurant list
async function getAllRestaurant() {
    try {
        const response = await fetch(API_ENDPOINTS.RESTAURANT_LIST);
        const responseJson = await response.json();

        if (responseJson.error) {
            throw new Error(responseJson.message);
        }

        return responseJson.restaurants;
    } catch (error) {
        ToasterInitiator.init(error.message);
    }
}

// get detail of restaurant
async function getRestaurantDetail(id) {
    try {
        const response = await fetch(API_ENDPOINTS.RESTAURANT_DETAIL(id));
        const responseJson = await response.json();

        if (responseJson.error) {
            throw new Error(responseJson.message);
        }

        return responseJson.restaurant;
    } catch (error) {
        ToasterInitiator.init(error.message);
    }
}

// post new review
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

        if (responseJson.error) {
            throw new Error(responseJson.message);
        }

        return responseJson.customerReviews;
    } catch (error) {
        ToasterInitiator.init(error.message);
    }
}

export { getAllRestaurant, getRestaurantDetail, addRestaurantReview };
