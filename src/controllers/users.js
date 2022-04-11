import AbstractView from './AbstractView.js';
import Item from '../views/users.html';



export default class extends AbstractView {  
    constructor(params){
        super(params);
        this.setTitle("User");

    }

    async getHtml() {
        const div = document.createElement('div');
        div.innerHTML = Item


        let hamburgerMenu = div.querySelector('#hamburgerContent');
let toggleMenu = div.querySelector('#hamburger');
let clickBody = div.querySelector('#body');  



   
    if (toggleMenu) {
    toggleMenu.addEventListener('click', function(evt){
 
        if (!hamburgerMenu.classList.contains("open")) {
         hamburgerMenu.classList.add("open");
         console.log(toggleMenu)
         console.log(clickBody)
         console.log(hamburgerMenu)
         clickBody.style.opacity = "0.5";
        
        }
       else {
          hamburgerMenu.classList.remove("open");
        clickBody.style.opacity = "2"
      }
      });
    }

// Click anywhere in the body to remove the popup menu
 if(clickBody){
clickBody.addEventListener('click' , function(evt){
    if (!hamburgerMenu.classList.contains("open")) return;
    var isMenu = hamburgerMenu.contains(evt.target) || toggleMenu.contains(evt.target);
    // var isClose = hamburgerMenu.contains(evt.target) && toggleMenu.contains(evt.target);
    if (!isMenu) {  
        hamburgerMenu.classList.remove("open");
       clickBody.style.opacity = "2";
    }
       
});
 }
 
    return div
}

}