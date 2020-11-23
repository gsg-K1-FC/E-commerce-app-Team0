// Hamburger Menu Animation
const burgerMenu = document.querySelector(".hamburger-menu");
const menuContent = document.querySelector(".menu-content");

burgerMenu.addEventListener("click",()=>{
    burgerMenu.classList.toggle("open");
    if(menuContent.classList.contains("show")){
        menuContent.classList.remove("show"); 
        menuContent.classList.add("hide"); 
    }else{
        menuContent.classList.remove("hide"); 
        menuContent.classList.add("show");
    }
}); 


// Small screen search icon
const searchBar = document.querySelector(".search-bar");
const searchIcon = document.querySelector(".search-icon");
searchInputField =  document.querySelector("#header .search input");
searchIcon.addEventListener("click",()=>{
    if(searchBar.classList.contains("hide-search-bar")){
        searchBar.classList.remove("hide-search-bar");
        searchInputField.value = "";
    }else{
        searchBar.classList.add("hide-search-bar");
    }
});  

// prevent page from reload when the search form get submitted 
document.querySelector("#header .search-bar form").addEventListener("submit",event=>{
    event.preventDefault(); 
    searchInputField.value = "";
});
