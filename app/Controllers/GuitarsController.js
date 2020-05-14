import GuitarsService from "../Services/GuitarsService.js";
import STORE from "../store.js";


function _draw(){
  let guitars = STORE.State.guitars
  let template = ''
  guitars.forEach(g => template += g.Template)
  document.getElementById('guitars').innerHTML = template
}

//Public
export default class GuitarsController {
  constructor() {}
  
  newGuitar(event){
    event.preventDefault();
    let formData = event.target 
    let rawGuitar = {
      title: formData.title.value,
      brand: formData.brand.value,
      model: formData.model.value,
      price: formData.price.value,
      description: formData.description.value,
      imgUrl: formData.imgUrl.value
    }
    formData.reset();
    GuitarsService.newGuitar(rawGuitar)
    _draw()
  }
  buy(id){
    GuitarsService.buy(id);
    _draw()
  }
}