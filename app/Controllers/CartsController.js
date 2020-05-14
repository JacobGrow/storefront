import CartsService from "../Services/CartsService.js";
import STORE from "../store.js";


function _draw(){
  let cart = STORE.State.cart
  let template = ''
  cart.forEach(c => template += c.Template)
  document.getElementById('cart').innerHTML = template
}
//Public
export default class CartsController {
  constructor() {
    _draw()
  }
  addCart(id){
    CartsService.addCart(id);
    _draw()
  }

  removeItem(id){
    CartsService.removeItem(id);
    _draw()
  }
}