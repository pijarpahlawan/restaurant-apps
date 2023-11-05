import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import '../src/scripts/views/components/favorite-button';

describe('Unliking A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<favorite-button></favorite-button>';
  };

  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('favorite-button'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('favorite-button').isLiked).toBeTruthy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('favorite-button'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('favorite-button'),
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
