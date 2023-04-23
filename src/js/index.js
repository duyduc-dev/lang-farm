import app from "./app";
const bootstrap = () => {
  app().init();
  Alpine.start();
};

bootstrap();
