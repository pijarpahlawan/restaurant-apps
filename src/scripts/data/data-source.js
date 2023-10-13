async function getAllRestaurant() {
    try {
        const response = await fetch("./data/DATA.json");
        const responseJson = await response.json();
        return responseJson.restaurants;
    } catch (error) {
        return error.message;
    }
}

export { getAllRestaurant };
