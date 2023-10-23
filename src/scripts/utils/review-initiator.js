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

            const formData = new FormData(event.currentTarget);

            const formObject = { id: restaurantId };

            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            const customerReviews = await addRestaurantReview(formObject);

            event.target.reset();

            if (customerReviews === undefined) {
                return;
            }

            this.#reviews = customerReviews;

            this.#renderReviews();
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
