
 let hamburgerMenu = document.getElementById("hamburgerContent");
let toggleMenu = document.getElementById("hamburger");


toggleMenu.addEventListener('click' , function(){
   hamburgerMenu.classList.add("open");


});


document.getElementById("body").addEventListener('click' , function(evt){
    if (!hamburgerMenu.classList.contains("open")) return;
    var isMenu = hamburgerMenu.contains(evt.target) || toggleMenu.contains(evt.target);
    if (!isMenu) {
        hamburgerMenu.classList.remove("open");
    }
});