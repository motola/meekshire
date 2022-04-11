import AbstractView from './AbstractView.js';
import Item from '../views/products.html';
import addToCartClicked  from  '../controllers/orders.js'


export default class extends AbstractView {  
    constructor(params){
        super(params);
        this.setTitle("New");

    }

    async getHtml() {
        const div = document.createElement('div');
        div.innerHTML = Item
   
    //   let clickItem = new addToCartClicked

        let cartAdder = div.getElementsByClassName('cart-adder');
        console.log(cartAdder);
        for (let i = 0; i < cartAdder.length; i++) {
            let button = cartAdder[i];
            button.addEventListener('click', new addToCartClicked);
        }
    return div
}

}