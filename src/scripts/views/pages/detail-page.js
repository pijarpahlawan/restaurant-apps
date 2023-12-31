import template from './templates/detail-page.html';
import './styles/detail-page.scss';
import UrlParser from '../../routes/url-parser';
import API_ENDPOINTS from '../../data/api-endpoint';
import ReviewInitiator from '../../utils/review-initiator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const DetailPage = {
  async render() {
    return template;
  },

  async afterRender() {
    // get data from url
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const restaurant = await import('../../data/data-source').then((module) =>
      module.getRestaurantDetail(url.id),
    );

    if (restaurant === undefined) {
      return;
    }

    // get element
    const nameElement = document.getElementById('restaurantName');
    const pictureElement = document.getElementById('restaurantPicture');
    const addressElement = document.getElementById('restaurantAddress');
    const cityElement = document.getElementById('restaurantCity');
    const descriptionElement = document.getElementById('restaurantDescription');
    const ratingElement = document.getElementById('restaurantRating');
    const foodsElement = document.getElementById('restaurantFoods');
    const drinksElement = document.getElementById('restaurantDrinks');
    const reviewsElement = document.getElementById('restaurantReviews');
    const reviewFormElement = document.getElementById('reviewForm');
    const favoriteButtonElement = document.querySelector('favorite-button');

    // set element attribute value
    nameElement.innerHTML = restaurant.name;

    pictureElement.setAttribute(
      'src',
      `${API_ENDPOINTS.RESTAURANT_IMAGE(restaurant.pictureId)}`,
    );
    pictureElement.setAttribute('alt', `${restaurant.name}`);

    addressElement.innerHTML = restaurant.address;

    cityElement.innerHTML = restaurant.city;

    ratingElement.innerHTML = `⭐️ ${restaurant.rating}`;

    descriptionElement.innerHTML = restaurant.description;

    restaurant.menus.foods.forEach((food) => {
      const foodElement = document.createElement('li');
      foodElement.innerHTML = food.name;
      foodsElement.appendChild(foodElement);
    });

    restaurant.menus.drinks.forEach((drink) => {
      const drinkElement = document.createElement('li');
      drinkElement.innerHTML = drink.name;
      drinksElement.appendChild(drinkElement);
    });

    ReviewInitiator.init({
      restaurantId: restaurant.id,
      reviewContainer: reviewsElement,
      initialReviews: restaurant.customerReviews,
      reviewForm: reviewFormElement,
    });

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: favoriteButtonElement,
      restaurant,
    });
  },
};

export default DetailPage;
