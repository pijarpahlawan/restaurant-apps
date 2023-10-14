class DrawerInitiator {
    static #toggleDrawer(event, button, drawer) {
        event.stopPropagation();
        drawer.classList.toggle("open");

        // change button fill
        const buttonState = button.parentElement.isOpen;
        button.parentElement.isOpen = !buttonState;
    }

    static #closeDrawer(event, button, drawer) {
        event.stopPropagation();
        drawer.classList.remove("open");

        button.parentElement.isOpen = false;
    }

    static init({ button, drawer, content }) {
        button.addEventListener("click", (event) => {
            this.#toggleDrawer(event, button, drawer);
        });

        content.addEventListener("click", (event) => {
            this.#closeDrawer(event, button, drawer);
        });

        // add event listener in every drawer link
        const drawerLinks = drawer.querySelectorAll("li");
        drawerLinks.forEach((link) => {
            link.addEventListener("click", (event) => {
                this.#closeDrawer(event, button, drawer);
            });
        });
    }
}

export default DrawerInitiator;
