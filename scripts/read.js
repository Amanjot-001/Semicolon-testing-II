

const nav = document.querySelector('nav');




function semToggleDropdown() {
    var dropdownMenu = document.getElementById("semDropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
  }

function unitToggleDropdown() {
    var dropdownMenu = document.getElementById("unitDropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
}

function subToggleDropdown() {
  var dropdownMenu = document.getElementById("subDropdownMenu");
  dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
}
  
  document.addEventListener("click", function(event) {
    var semDropdownMenu = document.getElementById("semDropdownMenu");
    var unitDropdownMenu = document.getElementById("unitDropdownMenu");
    var subDropdownMenu = document.getElementById("subDropdownMenu");
    var semDropdownToggle = document.querySelector(".sem-dropdown-toggle");
    var unitDropdownToggle = document.querySelector(".unit-dropdown-toggle");
    var subDropdownToggle = document.querySelector(".sub-dropdown-toggle");
    
    if (!semDropdownToggle.contains(event.target)) {
      semDropdownMenu.style.display = "none";
    }
    if (!unitDropdownToggle.contains(event.target)) {
        unitDropdownMenu.style.display = "none";
    }
    if (!subDropdownToggle.contains(event.target)) {
        subDropdownMenu.style.display = "none";
    }
  });


function handleNavToggle(){
  nav.dataset.transitionable = 'true';
  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true" ;
}

window.matchMedia("(max-width: 800px)").onchange = e => {
  nav.dataset.transitionable = "false";
  nav.dataset.toggled = "false";
}