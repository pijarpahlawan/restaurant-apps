import { addRestaurantReview } from "../data/data-source";

class ReviewInitiator {
    static #reviewContainer;
    static #reviews;

    static init({ restaurantId, reviewContainer, reviews, reviewForm }) {
        this.#reviewContainer = reviewContainer;
        this.#reviews = reviews;
        reviewForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const formData = new FormData(event.currentTarget);
            const formObject = { id: restaurantId };
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            const updatedReview = (await addRestaurantReview(formObject))
                .customerReviews;
            this.#reviews = updatedReview;

            event.target.reset();
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
