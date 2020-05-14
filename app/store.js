import Guitar from "./Models/guitar.js";
import Cart from "./Models/Cart.js";


let _state = {
  /**@type {Guitar[]}*/
  guitars: [],
  /**@type {Cart[]} */
  cart: []
};

class Store {
  /**
   * Provides access to application state data
   */

  get State() {
    return _state;
  }

  addGuitar(guitar){
    _state.guitars.push(guitar)
  }

  removeGuitar(id){
    let index = _state.guitars.findIndex(g => g.id == id)
    if (index == -1){
      console.error("invalid id")
      return;
    } 
    _state.guitars.splice(index, 1)
  }
  pushCart(id){
    let index = _state.guitars.find(g => g.id == id)
    let cartItem = new Cart(index)
    _state.cart.push(cartItem)
  }
  pullCart(id){
    let index = _state.cart.findIndex(c => c.id == id)
    if (index == -1){
        console.error("invalid id")
        return;
    }
    _state.cart.splice(index, 1)
  }
}

const STORE = new Store();
export default STORE;
