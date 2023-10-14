import FavoriteRestaurantIdb from "../data/favorite-restaurant-idb";

class LikeButtonInitiator {
    static #likeButtonContainer = null;
    static #restaurant = null;

    static async init({ likeButtonContainer, restaurant }) {
        this.#likeButtonContainer = likeButtonContainer;
        this.#restaurant = restaurant;

        await this.#renderButton();
    }

    static async #renderButton() {
        const { id } = this.#restaurant;

        if (await this.#isRestaurantExist(id)) {
            this.#renderLiked();
        } else {
            this.#renderLike();
        }
    }

    static async #isRestaurantExist(id) {
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
        return !!restaurant;
    }

    static #renderLike() {
        this.#likeButtonContainer.liked = false;

        const likeButton = document.querySelector("#like-button");
        likeButton.addEventListener("click", async () => {
            await FavoriteRestaurantIdb.putRestaurant(this.#restaurant);
            this.#renderButton();
        });
    }

    static #renderLiked() {
        this.#likeButtonContainer.liked = true;

        const likeButton = document.querySelector("#like-button");
        likeButton.addEventListener("click", async () => {
            await FavoriteRestaurantIdb.deleteRestaurant(this.#restaurant.id);
            this.#renderButton();
        });
    }
}

export default LikeButtonInitiator;
