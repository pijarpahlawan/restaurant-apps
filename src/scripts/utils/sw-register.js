import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  await wb.register();
};

export default swRegister;
