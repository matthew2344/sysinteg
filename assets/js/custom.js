function myFunction() {

    var nav = document.querySelector('[aria-label="Main"]');
    var x = nav.getAttribute("aria-expanded");
    if (x == "true") 
    {
        x = "false"
    } else {
        x = "true"
    }
    

    nav.setAttribute("aria-expanded", x);
    // document.getElementsByClassName("toggle").setAttribute("aria-expanded", x);
}

