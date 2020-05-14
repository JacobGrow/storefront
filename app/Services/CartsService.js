import Cart from "../Models/Cart.js";
import store from "../store.js";

//Public
class CartsService {
  addCart(id){
    store.pushCart(id);
  }

  removeItem(id){
    store.pullCart(id)
  }

}

const CART_SERVICE = new CartsService();
export default CART_SERVICE;