import Home from '../controllers/Home.js';
import New from '../controllers/New.js';
import Dashboard from '../controllers/Dashboard.js'
import product from '../controllers/product.js';
import wall from '../controllers/wall.js';


const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");  

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
   console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));
   return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]]; 
   }));

};
    const navigateTo = url => {
        history.pushState(null, null, url);
        router(); 
    }



    const router = async () => {
        console.log(pathToRegex("/new/:id")); 
        const routes = [
            {path: "/", view: Home },
            {path: "/new", view: New },
            {path: "/new/:id", view: New},
            {path: "/posts", view: Dashboard},
            {path: "/posts/:id", view: Dashboard},
            {path: "/product", view: product},
            {path: "/wall", view: wall},
            // {path: "/settings", view: () => console.log("viewing settings")},
        ];


    // Test each Routes for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
  
        }; 
    });
    
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
   
    if(!match) { 
        match = {
            route: routes[0],
            result: [location.pathname] 
        };
    } 
    const view = new match.route.view(getParams(match));
    document.querySelector('#app').appendChild(await view.getHtml());
    console.log(new match.route.view());

    };

    window.addEventListener("popstate", router);

    document.addEventListener("DOMContentLoaded", () => {
        document.body.addEventListener("click", e => {
            if(e.target.matches("[data-link]")) {
                e.preventDefault();
                navigateTo(e.target.href);
            }
        })
        router();
    }); ; 