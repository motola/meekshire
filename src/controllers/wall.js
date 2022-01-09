import AbstractView from './AbstractView.js';
import Item from '../views/wall.html';


export default class extends AbstractView {  
    constructor(params){
        super(params);
        this.setTitle("Wall");

    }

    async getHtml() {
        const div = document.createElement('div');
        div.innerHTML = Item
    return div
}


}