import CartsController from "./Controllers/CartsController.js";
import GuitarsController from "./Controllers/GuitarsController.js";


class App {
  cartsController = new CartsController 
  guitarsController = new GuitarsController
}

window["app"] = new App();
