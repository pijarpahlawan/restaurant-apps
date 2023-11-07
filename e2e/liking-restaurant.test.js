const { pause } = require('codeceptjs');
const assert = require('assert');

Feature('Liking Restaurant');

Scenario('showing empty liked restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('Your Favorite Restaurant', '#restaurantListTitle');
  I.see('Restaurant not found', '#restaurantListNotFound');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-item');

  const firstRestaurant = locate('.restaurant-item').first();

  I.click(firstRestaurant);

  const restaurantName = await I.grabTextFrom('#restaurantName');

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  I.click(locate('.restaurant-item').first());

  const likedRestaurantName = await I.grabTextFrom('#restaurantName');

  assert.strictEqual(restaurantName, likedRestaurantName);
});
