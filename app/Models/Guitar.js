import { generateId } from "../Utils.js"

export default class Guitar {
  constructor(data) {
      this.id = generateId()
      this.title = data.title
      this.brand = data.title
      this.model = data.model
      this.price = data.price
      this.description = data.description
      this.imgUrl = data.imgUrl
  }

  get Template() {
      return /*html*/ `<div class="col-3">
      <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.brand} - ${this.model} - $${this.price}</p>
            <p class="card-text">${this.description}</p>
            <button class="btn btn-success" onclick="app.cartsController.addCart('${this.id}') & app.guitarsController.buy('${this.id}')">Add to Cart</button>
          </div>
        </div>
  </div>`
  }
}

