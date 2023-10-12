import template from "./templates/home-page.html";

const HomePage = {
    async render() {
        return template;
    },

    async afterRender() {
        // ...
    },
};

export default HomePage;
