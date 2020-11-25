// Products Array 
const products = [ 
    {
        id: generateRandomNumber(),
        name: "Laptop",
        price: 500,
        imageURL: "https://www.notebookcheck.net/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG",
        category: "Technology",
        details: "Some details"
    },
    {
        id: generateRandomNumber(),
        name: "BMW",
        price: 500000,
        imageURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmwi8-mmp-1-1573836896.jpg?crop=0.949xw:0.712xh;0,0.243xh&resize=1200:*",
        category: "Car",
        details: "Some details"
    },
    {
        id: generateRandomNumber(),
        name: "Barbell",
        price: 100,
        imageURL: "https://www.alphafit.com.au/assets/full/863.jpg?20200903125631",
        category: "Fitness",
        details: "Some details"
    },
    {
        id: generateRandomNumber(),
        name: "Hair Dryer",
        price: 85,
        imageURL: "https://images-na.ssl-images-amazon.com/images/I/51lhNUYlzeL.jpg",
        category: "Beauty",
        details: "Some details"
    },
    {
        id: generateRandomNumber(),
        name: "Dress",
        price: 50, 
        imageURL: "https://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733_900x.jpg?v=1576267132", 
        category: "Fashion",
        details: "Some details"
    },
    {
        id: generateRandomNumber(),
        name: "Lip Gloss",
        price: 10, 
        imageURL: "https://www.sephora.com/productimages/sku/s1925965-main-zoom.jpg", 
        category: "Beauty",
        details: "Some details"
    },
    {
        id: generateRandomNumber(),
        name: "iphone 12",
        price: 1300,
        imageURL: "https://www.telstra.com.au/content/dam/tcom/lego/2020/plans-devices/mobiles/iphone-12-pro-max/shared-iphone-12-pro-max-pacific-blue-01-900x1200.jpg",
        category: "Technology",
        details: "Some details"
    },
    {
        id: generateRandomNumber(), 
        name: "Shoes",
        price: 160,
        imageURL:"https://cdn.fleetfeet.com/products/1012A714_020_SR_RT_PNG_1280x1280-JPG.jpg/width:720-height:540-fit:trim/1012A714_020_SR_RT_PNG_1280x1280-JPG.jpg?signature=205cac59",
        category: "Fashion",
        details: "Some details"
    },
    {
        id: generateRandomNumber(), 
        name: "Jumping Rope",
        price: 20,
        imageURL:"https://www.dragonsports.eu/333581-verylarge_default/nylon-jumping-rope-grip-foam-adi1102-adidas.jpg",
        category: "Fitness",
        details: "Some details"
    }


]; 
console.log(typeof products[0].id);


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
const searchBox = document.querySelector(".search-box");
const searchIcon = document.querySelector(".search-icon");
searchInputField =  document.querySelector(".search-box input[type='text']");
searchIcon.addEventListener("click",()=>{
    if(searchBox.classList.contains("hide-search-box")){
        searchBox.classList.remove("hide-search-box");
        searchInputField.value = "";
    }else{
        searchBox.classList.add("hide-search-box");
    }
});  

// prevent page from reload when the search form get submitted 
document.querySelector(".search-box").addEventListener("submit",event=>{
    event.preventDefault(); 
    searchInputField.value = "";
});


// Remove the menu and search box
// if screen width > 550
window.onresize = ()=>{
    if(window.innerWidth > 550){
        if(menuContent.classList.contains("show")){
            menuContent.classList.add("hide");
            menuContent.classList.remove("show");
        }
        if(burgerMenu.classList.contains("open")){
            burgerMenu.classList.remove("open");
        }
        searchBox.classList.add("hide-search-box");
    }
}  

// This function addes product card to the products grid
function populateProduct(){
    productsGrid = document.querySelector("#products .products-grid");
    products.forEach(product =>{
        productsGrid.appendChild(createProductCard(product));
    });  
} 
populateProduct(); 

// This function creates product card using its details 
// It takes a product object as input and 
// returns a reference to a card div
function createProductCard(product){
    const card = document.createElement("div"); 
    card.classList.add("card");

    const namePrice = document.createElement("div"); 
    namePrice.classList.add("name-price"); 
    const name = document.createElement("h3");
    name.textContent = product.name; 
    const price = document.createElement("span");
    price.textContent = product.price+"$";  
    namePrice.appendChild(name); 
    namePrice.appendChild(price); 

    const image = document.createElement("img");  
    image.setAttribute("src",product.imageURL); 
    image.setAttribute("alt","product image");  

    const addToCart = document.createElement("div");
    addToCart.classList.add("add-to-cart") 
    const addToCartImage = document.createElement("img");
    addToCartImage.setAttribute("src","./images/shopping-cart2.svg");
    addToCartImage.setAttribute("alt","add to cart image"); 
    const addToCartText = document.createElement("span");
    addToCartText.textContent = "Add to cart";   
    addToCart.appendChild(addToCartImage); 
    addToCart.appendChild(addToCartText); 
    card.appendChild(namePrice); 
    card.appendChild(image); 
    card.appendChild(addToCart);


    return card; 
}  

// This function generates random number
// returns a random number
// uses time object to get unique number to be used 
// as product id.
function generateRandomNumber(){
    return new Date().getTime(); 
} 
