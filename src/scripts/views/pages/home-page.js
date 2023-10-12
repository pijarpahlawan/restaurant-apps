import template from "./templates/home-page.html";
import "./styles/home-page.scss";

const HomePage = {
    async render() {
        return template;
    },

    async afterRender() {
        // ...
    },
};

export default HomePage;
