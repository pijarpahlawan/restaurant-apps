import { openDB } from 'idb';
import DB_CONFIG from '../config/db-config';

const dbPromise = openDB(DB_CONFIG.DB_NAME, DB_CONFIG.DB_VERSION, {
  upgrade(database) {
    database.createObjectStore(DB_CONFIG.OBJECT_STORE_NAME, {
      keyPath: 'id',
    });
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    return (await dbPromise).get(DB_CONFIG.OBJECT_STORE_NAME, id);
  },

  async getAllRestaurants() {
    return (await dbPromise).getAll(DB_CONFIG.OBJECT_STORE_NAME);
  },

  async putRestaurant(restaurant) {
    return (await dbPromise).put(DB_CONFIG.OBJECT_STORE_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(DB_CONFIG.OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestaurantIdb;
