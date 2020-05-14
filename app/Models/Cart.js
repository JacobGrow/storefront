export default class Cart {
    constructor(data) {
        this.imgUrl = data.imgUrl
        this.title = data.title
        this.price = data.price
        this.id = data.id
    }

    get Template() {
        return ` <div class="col-12 d-inline-flex align-items-center mt-3">
        <img src="${this.imgUrl}" alt="..." class="img-thumbnail picture-small">
        <p class="ml-3">${this.title}</p>
        <p class="ml-3">$${this.price}</p>
    <button class=" ml-3 btn btn-danger" onclick="app.cartsController.removeItem('${this.id}')">Remove</button>
    </div>`
    }
}