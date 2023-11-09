const routes = {
  '/': () =>
    import('../views/pages/home-page').then((module) => module.default), // default page
  '/home': () =>
    import('../views/pages/home-page').then((module) => module.default),
  '/favorite': () =>
    import('../views/pages/favorite-page').then((module) => module.default),
  '/detail/:id': () =>
    import('../views/pages/detail-page').then((module) => module.default),
};

export default routes;
