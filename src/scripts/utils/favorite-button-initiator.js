import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

class FavoriteButtonInitiator {
  static #favoriteButtonContainer = null;

  static #restaurant = null;

  static async init({ favoriteButtonContainer, restaurant }) {
    this.#favoriteButtonContainer = favoriteButtonContainer;
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
    this.#favoriteButtonContainer.isLiked = false;

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this.#restaurant);
      this.#renderButton();
    });
  }

  static #renderLiked() {
    this.#favoriteButtonContainer.isLiked = true;

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this.#restaurant.id);
      this.#renderButton();
    });
  }
}

export default FavoriteButtonInitiator;
