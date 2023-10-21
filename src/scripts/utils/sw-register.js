import { Workbox } from "workbox-window";

const swRegister = async () => {
    if (!("serviceWorker" in navigator)) {
        console.log("Service worker is not supported by this browser");
        return;
    }

    const wb = new Workbox("./sw.bundle.js");

    try {
        await wb.register();
        console.log("Service worker is successfully registered");
    } catch (error) {
        console.log("Failed to register service worker", error);
    }
};

export default swRegister;
