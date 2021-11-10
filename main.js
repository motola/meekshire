function openCategory(evt, category) {
    // Declare all variables
    var i, categorycontent;
  
    // Get all elements with class="tabcontent" and hide them
    categorycontent = document.getElementsByClassName("categorycontent");
    for (i = 0; i < categorycontent.length; i++) {
      categorycontent[i].style.display = "none";
    }

    // categorylinks = document.getElementsByClassName("categorylinks");
    // for (i = 0; i < categorylinks.length; i++) {
    //   category[i].className = tablinks[i].className.replace(" active", "");
    // }


    // document.getElementById(location).style.display = "block";
    // evt.currentTarget.className += " active";








    document.getElementById("defaultOpen").click();
  }


  