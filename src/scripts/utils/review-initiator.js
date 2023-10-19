import { addRestaurantReview } from "../data/data-source";

class ReviewInitiator {
    static #reviewContainer = null;
    static #reviews = null;

    static init({ restaurantId, reviewContainer, initialReviews, reviewForm }) {
        // assign private field
        this.#reviewContainer = reviewContainer;
        this.#reviews = initialReviews;

        // add event listener to form when submit
        reviewForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            try {
                const formData = new FormData(event.currentTarget);
                const formObject = { id: restaurantId };
                formData.forEach((value, key) => {
                    formObject[key] = value;
                });

                const updatedReview = (await addRestaurantReview(formObject))
                    .customerReviews;
                this.#reviews = updatedReview;

                this.#renderReviews();
            } catch (error) {
                const detailPage = document.querySelector(".restaurant-detail");
                const toastAlertElement = document.createElement("toast-alert");
                detailPage.appendChild(toastAlertElement);
                toastAlertElement.message = error.message;
            }

            event.target.reset();
        });

        this.#renderReviews();
    }

    static #renderReviews() {
        this.#reviewContainer.innerHTML = "";
        this.#reviews.forEach((review) => {
            const reviewElement = document.createElement("review-item");
            reviewElement.review = review;
            this.#reviewContainer.appendChild(reviewElement);
        });
    }
}

export default ReviewInitiator;
