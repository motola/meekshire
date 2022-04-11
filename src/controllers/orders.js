import AbstractView from './AbstractView.js';
import Item from '../views/orders.html';


export default class extends AbstractView {  
    constructor(params){
        super(params);
        this.setTitle("New");

    }

    async getHtml() {
        const div = document.createElement('div');
        div.innerHTML = Item


        // let btnMinus = div.querySelector('.substract');
        // let btnValue = div.querySelector('.value');
        // let btnAdd = div.querySelector('.add');

        let btnMinus = div.getElementsByClassName("substract");
        let btnValue = div.getElementsByClassName("value");
        let btnAdd = div.getElementsByClassName("add");
        

       // ITERATOR FOR INCREMENT
    for (var i = 0; i < btnAdd.length; i++) {   
        var added = btnAdd[i]
        added.addEventListener('click', increment);  
      
                }
                //INCREASE BUTTON
        function increment(event){
            let buttonClicked = event.target
       
             let d = buttonClicked.parentElement.children[2]
              let inputValue = d.value
             let newValue = parseInt(inputValue) + 1
             
             d.value = newValue
             updateCartTotal()    
        } 
        
        

        // ITERATOR FOR DECREMENT
           for (let i = 0; i < btnMinus.length; i++) {
            let clicked = btnMinus[i]
            clicked.addEventListener('click', decrement);
         }

        // DECREASE BUTTON
         function decrement (event) {
            let buttonClicked = event.target
            var d  =  buttonClicked.parentElement.children[2]
            let inputValue = d.value
        
            let newValue = parseInt(inputValue) - 1
            if (newValue >= 1) {
                d.value = newValue;
                updateCartTotal()
            }
            else {
                 return 1
            }
            
           }
           //UPDATE CART TOTALS
  function updateCartTotal () {
    let storePayments = div.getElementsByClassName('store-payments')[0]
    let storeRows = storePayments.getElementsByClassName('store-row');
    let subTotal = 0
    let total = 0
    
    for (let i= 0 ; i < storeRows.length; i++) {
        let storeRow  = storeRows[i];
        let itemPrice = storeRow.getElementsByClassName('item-price')[0];
        let itemQuantity = storeRow.getElementsByClassName('qty')[0];
        let price = parseFloat(itemPrice.innerText.replace('₦', ''));
        let deliveryFee = div.getElementsByClassName('del-fee')[0]
        let discount = div.getElementsByClassName('total-discount')[0];
        let finalDeliveryFee = parseFloat(deliveryFee.innerText.replace('₦', ''));
        let finalDiscount =  parseFloat(discount.innerText.replace('₦', ''));
        console.log('deliveryFee:'+ finalDeliveryFee, 'discount:' + finalDiscount);
      
        let quantity = itemQuantity.value
        console.log(quantity)
        
        
        subTotal = subTotal + (price * quantity)
        total = finalDeliveryFee + subTotal - finalDiscount
        console.log(total);
        
    }
    total = Math.round(total * 100) / 100
    div.getElementsByClassName('sub-total')[0].innerText = '₦ ' + subTotal
    div.getElementsByClassName('total-price')[0].innerText = '₦ ' + total

  }

  updateCartTotal();


let removeCartItem = () =>  {
     let removeButton = div.getElementsByClassName('remove')
     for (let i = 0; i < removeButton.length; i++) {
         let button = removeButton[i]
         button.addEventListener('click', function(event) {
             let buttonClicked = event.target
             buttonClicked.parentElement.parentElement.remove()
             updateCartTotal()

         })
     }
    }
 removeCartItem();


 function addToCartClicked (event) {
  let button = event.target
  let storeItem = button.parentElement.parentElement
  let store = storeItem.getElementsByClassName('cart-name')[0].innerText
  let price = storeItem.getElementsByClassName('item-price')[0].innerText
  console.log(store, price, "123");
 }
 
 console.log(addToCartClicked);



 
     
    return div
}

}