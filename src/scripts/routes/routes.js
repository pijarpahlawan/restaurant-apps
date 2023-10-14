import HomePage from "../views/pages/home-page";
import FavoritePage from "../views/pages/favorite-page";

const routes = {
    "/": HomePage, // default page
    "/home": HomePage,
    "/favorite": FavoritePage,
};

export default routes;
