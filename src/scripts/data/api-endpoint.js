import API_CONFIG from "../config/api-config";

const API_ENDPOINTS = {
    RESTAURANT_LIST: `${API_CONFIG.BASE_URL}list`,
    RESTAURANT_DETAIL: (id) => `${API_CONFIG.BASE_URL}detail/${id}`,
    RESTAURANT_REVIEW: `${API_CONFIG.BASE_URL}review`,
    RESTAURANT_SMALL_IMAGE: (pictureId) =>
        `${API_CONFIG.BASE_SMALL_IMAGE_URL}${pictureId}`,
    RESTAURANT_MEDIUM_IMAGE: (pictureId) =>
        `${API_CONFIG.BASE_MEDIUM_IMAGE_URL}${pictureId}`,
};

export default API_ENDPOINTS;
