import template from './templates/home-page.html';
import './styles/home-page.scss';

const HomePage = {
  async render() {
    return template;
  },

  async afterRender() {
    const restaurantListElement = document.querySelector('restaurant-list');

    const restaurants = await import('../../data/data-source').then((module) =>
      module.getAllRestaurant(),
    );

    restaurantListElement.restaurants = restaurants;
  },
};

export default HomePage;
