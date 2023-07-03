// responsive navbar

// toggle effect on navbar 

let responsiveIcon = document.querySelector(".nav-icon-parent");
let responsiveNavbar = document.querySelector(".responsive-navbar ")
let zNav = document.querySelector(".nav-z")
function toggleNavbar() {
    responsiveNavbar.classList.toggle("nav-active")
}
responsiveIcon.addEventListener("click", ()=> toggleNavbar())

// toggle effect on drop down menu
function productToggleDropdown(a, b) {
    let dropdown = a;
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        b.style.color = "#183b56";
    } else {
        dropdown.style.display = "block";
        b.style.color = "#2294ed";
        
    }
}
// product dropdown menu
let product = document.querySelector(".product");
product.addEventListener("click", ()=>{
    productToggleDropdown(myProductDropdown, product)
})
let myProductDropdown = document.getElementById("myProductDropdown");

// resource dropdown menu

let resources = document.querySelector(".resource");
resources.addEventListener("click", ()=>{
    productToggleDropdown(myResourceDropdown, resources)
})
let myResourceDropdown = document.getElementById("myResourceDropdown");
