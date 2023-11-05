import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import '../src/scripts/views/components/favorite-button';

describe('Liking A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<favorite-button></favorite-button>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('favorite-button'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('favorite-button').isLiked).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('favorite-button'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('favorite-button'),
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([
      { id: 1 },
    ]);

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('favorite-button'),
      restaurant: {},
    });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
