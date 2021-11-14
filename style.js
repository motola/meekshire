
 let hamburgerMenu = document.getElementById("hamburgerContent");
let toggleMenu = document.getElementById("hamburger");


toggleMenu.addEventListener('click' , function(evt){

  if (!hamburgerMenu.classList.contains("open")) {
   hamburgerMenu.classList.add("open");
   document.getElementById("body").style.opacity = "0.5";
  }
 else {
    hamburgerMenu.classList.remove("open");
    document.getElementById("body").style.opacity = "2"
}

  

});


document.getElementById("body").addEventListener('click' , function(evt){
    if (!hamburgerMenu.classList.contains("open")) return;
    var isMenu = hamburgerMenu.contains(evt.target) || toggleMenu.contains(evt.target);
    // var isClose = hamburgerMenu.contains(evt.target) && toggleMenu.contains(evt.target);
    if (!isMenu) {
        hamburgerMenu.classList.remove("open");
        document.getElementById("body").style.opacity = "2";
    }
      
});

