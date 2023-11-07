import template from './templates/restaurant-item.html';
import './styles/restaurant-item.scss';
import API_ENDPOINTS from '../../data/api-endpoint';

class RestaurantItem extends HTMLElement {
  #restaurant = null;

  set restaurant(value) {
    this.#restaurant = value;
    this.render();
  }

  get restaurant() {
    return this.#restaurant;
  }

  render() {
    // assign main class and innerHTML
    this.className = 'restaurant-item';
    this.innerHTML = template;

    // get elements
    const anchorElement = this.querySelector('#restaurantItemAnchor');
    const pictureElement = this.querySelector('#restaurantItemPicture');
    const ratingElement = this.querySelector('#restaurantItemRating');
    const nameElement = this.querySelector('#restaurantItemName');
    const descriptionElement = this.querySelector('#restaurantItemDescription');

    // set elements attribute value
    this.id = this.#restaurant.id;

    anchorElement.href = `/#/detail/${this.#restaurant.id}`;

    pictureElement.src = API_ENDPOINTS.RESTAURANT_IMAGE(
      this.#restaurant.pictureId,
    );
    pictureElement.alt = this.#restaurant.name;

    ratingElement.innerHTML = this.#restaurant.rating;

    nameElement.innerHTML = this.#restaurant.name;

    descriptionElement.innerHTML = this.#restaurant.description;
  }
}

customElements.define('restaurant-item', RestaurantItem);
