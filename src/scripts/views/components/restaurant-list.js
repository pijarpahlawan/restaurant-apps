import './styles/restaurant-list.scss';

class RestaurantList extends HTMLElement {
  #restaurants = null;

  connectedCallback() {
    this.render();
  }

  set restaurants(value) {
    this.#restaurants = value;
    this.afterRender();
  }

  get restaurants() {
    return this.#restaurants;
  }

  render() {
    // assign main class and innerHTML
    this.className = 'restaurant-list';

    const title = this.getAttribute('title');

    this.innerHTML = `<h1 id="restaurantListTitle">${title}</h1>`;
  }

  afterRender() {
    const tempElement = document.createElement('div');

    if (this.#restaurants === undefined || this.#restaurants.length === 0) {
      tempElement.innerHTML =
        '<h2 id="restaurantListNotFound">Restaurant not found</h2>';
      this.appendChild(tempElement.firstChild);
      return;
    }

    tempElement.innerHTML = '<div id="restaurantListContainer"></div>';
    this.appendChild(tempElement.firstChild);

    const restaurantListElement = document.querySelector(
      '#restaurantListContainer',
    );

    this.#restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantListElement.appendChild(restaurantItemElement);
      restaurantItemElement.restaurant = restaurant;
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
