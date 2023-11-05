import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';

const createFavoriteButtonPresenter = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('favorite-button'),
    restaurant,
  });
};

export default createFavoriteButtonPresenter;
