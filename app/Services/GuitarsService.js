import Guitar from "../Models/Guitar.js";
import store from "../store.js";

//Public
class GuitarsService {
  newGuitar(rawGuitar){
    let guitar = new Guitar(rawGuitar)
    store.addGuitar(guitar)
  }
  buy(id){
    store.removeGuitar(id)
  }
}

const GUITAR_SERVICE = new GuitarsService();
export default GUITAR_SERVICE;
