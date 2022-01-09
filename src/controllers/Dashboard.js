    import AbstractView from './AbstractView.js';
    import dropItem from '../views/home.html';


    export default class extends AbstractView {  
        constructor(params){
            super(params);
            this.setTitle("Dashboard");

        }

        async getHtml() {
            const div = document.createElement('div');
            div.innerHTML = dropItem
        return div;
    }


    }