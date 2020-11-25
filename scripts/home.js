// Products Array
const products = [
  {
    id: generateRandomNumber(),
    name: "Laptop",
    price: 500,
    imageURL:
      "https://www.notebookcheck.net/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG",
    category: "Technology",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "BMW",
    price: 500000,
    imageURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmwi8-mmp-1-1573836896.jpg?crop=0.949xw:0.712xh;0,0.243xh&resize=1200:*",
    category: "Cars",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Barbell",
    price: 100,
    imageURL: "https://www.alphafit.com.au/assets/full/863.jpg?20200903125631",
    category: "Fitness",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Hair Dryer",
    price: 85,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/51lhNUYlzeL.jpg",
    category: "Beauty",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Dress",
    price: 50,
    imageURL:
      "https://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733_900x.jpg?v=1576267132",
    category: "Fashion",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Lip Gloss",
    price: 10,
    imageURL:
      "https://www.sephora.com/productimages/sku/s1925965-main-zoom.jpg",
    category: "Beauty",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "iphone 12",
    price: 1300,
    imageURL:
      "https://www.telstra.com.au/content/dam/tcom/lego/2020/plans-devices/mobiles/iphone-12-pro-max/shared-iphone-12-pro-max-pacific-blue-01-900x1200.jpg",
    category: "Technology",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Shoes",
    price: 160,
    imageURL:
      "https://cdn.fleetfeet.com/products/1012A714_020_SR_RT_PNG_1280x1280-JPG.jpg/width:720-height:540-fit:trim/1012A714_020_SR_RT_PNG_1280x1280-JPG.jpg?signature=205cac59",
    category: "Fashion",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Jumping Rope",
    price: 20,
    imageURL:
      "https://www.dragonsports.eu/333581-verylarge_default/nylon-jumping-rope-grip-foam-adi1102-adidas.jpg",
    category: "Fitness",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Laptop",
    price: 500,
    imageURL:
      "https://www.notebookcheck.net/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG",
    category: "Technology",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "BMW",
    price: 500000,
    imageURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmwi8-mmp-1-1573836896.jpg?crop=0.949xw:0.712xh;0,0.243xh&resize=1200:*",
    category: "Cars",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Barbell",
    price: 100,
    imageURL: "https://www.alphafit.com.au/assets/full/863.jpg?20200903125631",
    category: "Fitness",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Hair Dryer",
    price: 85,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/51lhNUYlzeL.jpg",
    category: "Beauty",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Dress",
    price: 50,
    imageURL:
      "https://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733_900x.jpg?v=1576267132",
    category: "Fashion",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Lip Gloss",
    price: 10,
    imageURL:
      "https://www.sephora.com/productimages/sku/s1925965-main-zoom.jpg",
    category: "Beauty",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "iphone 12",
    price: 1300,
    imageURL:
      "https://www.telstra.com.au/content/dam/tcom/lego/2020/plans-devices/mobiles/iphone-12-pro-max/shared-iphone-12-pro-max-pacific-blue-01-900x1200.jpg",
    category: "Technology",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Shoes",
    price: 160,
    imageURL:
      "https://cdn.fleetfeet.com/products/1012A714_020_SR_RT_PNG_1280x1280-JPG.jpg/width:720-height:540-fit:trim/1012A714_020_SR_RT_PNG_1280x1280-JPG.jpg?signature=205cac59",
    category: "Fashion",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Jumping Rope",
    price: 20,
    imageURL:
      "https://www.dragonsports.eu/333581-verylarge_default/nylon-jumping-rope-grip-foam-adi1102-adidas.jpg",
    category: "Fitness",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Laptop",
    price: 500,
    imageURL:
      "https://www.notebookcheck.net/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG",
    category: "Technology",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "BMW",
    price: 500000,
    imageURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmwi8-mmp-1-1573836896.jpg?crop=0.949xw:0.712xh;0,0.243xh&resize=1200:*",
    category: "Cars",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Barbell",
    price: 100,
    imageURL: "https://www.alphafit.com.au/assets/full/863.jpg?20200903125631",
    category: "Fitness",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Hair Dryer",
    price: 85,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/51lhNUYlzeL.jpg",
    category: "Beauty",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Dress",
    price: 50,
    imageURL:
      "https://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733_900x.jpg?v=1576267132",
    category: "Fashion",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Lip Gloss",
    price: 10,
    imageURL:
      "https://www.sephora.com/productimages/sku/s1925965-main-zoom.jpg",
    category: "Beauty",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "iphone 12",
    price: 1300,
    imageURL:
      "https://www.telstra.com.au/content/dam/tcom/lego/2020/plans-devices/mobiles/iphone-12-pro-max/shared-iphone-12-pro-max-pacific-blue-01-900x1200.jpg",
    category: "Technology",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Shoes",
    price: 160,
    imageURL:
      "https://cdn.fleetfeet.com/products/1012A714_020_SR_RT_PNG_1280x1280-JPG.jpg/width:720-height:540-fit:trim/1012A714_020_SR_RT_PNG_1280x1280-JPG.jpg?signature=205cac59",
    category: "Fashion",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Jumping Rope",
    price: 20,
    imageURL:
      "https://www.dragonsports.eu/333581-verylarge_default/nylon-jumping-rope-grip-foam-adi1102-adidas.jpg",
    category: "Fitness",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Laptop",
    price: 500,
    imageURL:
      "https://www.notebookcheck.net/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG",
    category: "Technology",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "BMW",
    price: 500000,
    imageURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmwi8-mmp-1-1573836896.jpg?crop=0.949xw:0.712xh;0,0.243xh&resize=1200:*",
    category: "Cars",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Barbell",
    price: 100,
    imageURL: "https://www.alphafit.com.au/assets/full/863.jpg?20200903125631",
    category: "Fitness",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Hair Dryer",
    price: 85,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/51lhNUYlzeL.jpg",
    category: "Beauty",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Dress",
    price: 50,
    imageURL:
      "https://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733_900x.jpg?v=1576267132",
    category: "Fashion",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Lip Gloss",
    price: 10,
    imageURL:
      "https://www.sephora.com/productimages/sku/s1925965-main-zoom.jpg",
    category: "Beauty",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "iphone 12",
    price: 1300,
    imageURL:
      "https://www.telstra.com.au/content/dam/tcom/lego/2020/plans-devices/mobiles/iphone-12-pro-max/shared-iphone-12-pro-max-pacific-blue-01-900x1200.jpg",
    category: "Technology",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Shoes",
    price: 160,
    imageURL:
      "https://cdn.fleetfeet.com/products/1012A714_020_SR_RT_PNG_1280x1280-JPG.jpg/width:720-height:540-fit:trim/1012A714_020_SR_RT_PNG_1280x1280-JPG.jpg?signature=205cac59",
    category: "Fashion",
    details: "Some details",
  },
  {
    id: generateRandomNumber(),
    name: "Jumping Rope",
    price: 20,
    imageURL:
      "https://www.dragonsports.eu/333581-verylarge_default/nylon-jumping-rope-grip-foam-adi1102-adidas.jpg",
    category: "Fitness",
    details: "Some details",
  },
];
const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
if(cartProducts.length !== 0){
  showCartBadge();
}
// Array to store the products currently shown on the screen
let productsCurrentlyShown = products;

// Refresh the page when the brand name is clicked
document.querySelector(".brand-name").addEventListener("click", () => {
  location.reload();
});

// Hamburger Menu Animation
const burgerMenu = document.querySelector(".hamburger-menu");
const menuContent = document.querySelector(".menu-content");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");
  if (menuContent.classList.contains("show")) {
    menuContent.classList.remove("show");
    menuContent.classList.add("hide");
    document.querySelector("body").style.overflowY = "scroll";
  } else {
    menuContent.classList.remove("hide");
    menuContent.classList.add("show");
    document.querySelector("body").style.overflowY = "hidden";
  }
});

// Small screen search icon
const searchBox = document.querySelector(".search-box");
const searchIcon = document.querySelector(".search-icon");
const searchInputField = document.querySelector(".search-box input[type='text']");
searchIcon.addEventListener("click", () => {
  if (searchBox.classList.contains("hide-search-box")) {
    searchBox.classList.remove("hide-search-box");
    searchInputField.value = "";
  } else {
    searchBox.classList.add("hide-search-box");
  }
});

// Remove the menu and search box
// if screen width > 550
window.onresize = () => {
  if (window.innerWidth > 550) {
    if (menuContent.classList.contains("show")) {
      menuContent.classList.add("hide");
      menuContent.classList.remove("show");
      document.querySelector("body").style.overflowY = "scroll";
    }
    if (burgerMenu.classList.contains("open")) {
      burgerMenu.classList.remove("open");
    }
    searchBox.classList.add("hide-search-box");
  }
};

// Filter By Category
// Add event listener to the utilites box (big and medium screens)
document
  .querySelector(".utilities-box__content .categories")
  .addEventListener("click", event => {
    const categoryTitle = event.target.title;
    if (categoryTitle) {
      productsCurrentlyShown = filterByCategory(categoryTitle);
      populateProduct(productsCurrentlyShown);
      document.querySelector("html").scrollTop = 0;
    }
    sortMenus.forEach(sortMenu => {
      sortMenu.selectedIndex = 0;
    });
  });

// Add event listener to the categories section of the pop up menu
// small screens
document
  .querySelector(".menu-content .categories")
  .addEventListener("click", (event) => {
    let categoryTitle = event.target.id;
    if (!categoryTitle) {
      categoryTitle = event.target.parentElement.id;
    }
    if (categoryTitle) {
      productsCurrentlyShown = filterByCategory(categoryTitle);
      populateProduct(productsCurrentlyShown);
      menuContent.classList.remove("show");
      burgerMenu.classList.remove("open");
      document.querySelector("body").style.overflowY = "scroll";
      document.querySelector("html").scrollTop = 0;
    }
    menuFilter.selectedIndex = 0;
  });

// Filter By Price
// Get handle of the Filter drop downs in both big and medium screens
const sortMenus = Array.from(document.querySelectorAll(".sort-drop-menu"));
// Add event listener to the filter by price
// drop down menus in both big and medium screens
sortMenus.forEach(sortMenu => {
  sortMenu.addEventListener("change", event => {
    onPriceChange(event);
  });
});

// Get handle of filter by price menu in small screens (menu content)
// Add event listener to it (change)
const menuFilter = document.querySelector("#menu-sort");
menuFilter.addEventListener("change", event => {
  onPriceChange(event);
  menuContent.classList.remove("show");
  burgerMenu.classList.remove("open");
  document.querySelector("body").style.overflowY = "scroll";
});  

// This function decides what will happen when the price in the 
// price filter drop down menu changes. 
function onPriceChange(event){
  const target = event.target;
  const priceRange = target.options[target.selectedIndex].label;
  if (priceRange === "Select Price Range") {
    populateProduct(productsCurrentlyShown);
  } else {
    filterProducts(priceRange);
  } 
  document.querySelector("html").scrollTop = 0;
}

// This function filter products array according to
// range paramenter
// returns filtered array.
function filterProducts(range) {
  if (range === "All") {
    const tempProductArray = [...productsCurrentlyShown];
    sortProductsDesc(tempProductArray);
    populateProduct(tempProductArray);
  } else {
    const productsInRange = checkInRange(productsCurrentlyShown, range);
    if (productsInRange.length !== 0) {
      populateProduct(productsInRange);
    } else {
      document.querySelector("#products .products-grid").textContent =
        "Sorry, No matchs for the price range selected";
    }
  }
}

// This function sort products array in descending order on price
// It takes an array of products and sorts it in place
function sortProductsDesc(products) {
  products.sort((a, b) => (a.price > b.price ? -1 : a.price < b.price ? 1 : 0));
}

// This function checks if a number(price) in a price range
// It takes the products array and the range as input
// It returns an array of products which match the criteria
function checkInRange(products, range) {
  let minBound, maxBound;
  if (range.indexOf("-") !== -1) {
    minBound = +range.slice(0, range.indexOf("-"));
    maxBound = +range.slice(range.indexOf("-") + 1, range.indexOf(" "));
  } else {
    minBound = +range.slice(0, 5);
    maxBound = Number.MAX_SAFE_INTEGER;
  }
  return products.filter(
    (product) => product.price >= minBound && product.price <= maxBound
  );
}

// Search by name
// Get handle of all search boxes
// Add event listener to each of them
const searchBoxes = Array.from(document.querySelectorAll(".search-box"));
searchBoxes.forEach(searchBox => {
  const inputField = searchBox.children[0].children[1];

  searchBox.addEventListener("submit", event => {
    event.preventDefault();
    if (searchResult.length !== 0) {
      populateProduct(searchResult);
    } else {
      document.querySelector("#products .products-grid").textContent =
        "Sorry, No matchs for the name you typed";
    }
    event.target.children[0].children[1].value = "";
  });

  let searchResult;
  inputField.addEventListener("keyup", event => {
    // keyCode 13 is the Enter key
    if (event.keyCode !== 13) {
      const searchValue = event.target.value;
      searchResult = searchProductsByName(productsCurrentlyShown, searchValue);
      if (searchResult.length !== 0) {
        populateProduct(searchResult);
      } else {
        document.querySelector("#products .products-grid").textContent =
          "Sorry, No matchs for the name you typed";
      }
    }
  });
});

// This function search an array of products for product name
// It takes products array as well as name as input
// and returns an array of products that has the intended name

function searchProductsByName(products, name) {
  const regExp = new RegExp(name.toLowerCase().trim(), "g");
  return products.filter(product => {
    if (product.name.toLowerCase().match(regExp)) {
      return true;
    }
    return false;
  });
}

// Add event listenr to the products grid
// It spots the (add to cart) button
document.querySelector(".products-grid").addEventListener("click", event => {
  const cardId = event.target.id
    ? event.target.id
    : event.target.parentElement.id;
  if (cardId && cardId !== "products") {
    cartProducts.push(
      productsCurrentlyShown.find(product => product.id === cardId)
    );
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    const badges = document.querySelectorAll(".cart span");
    showCartBadge();
  }
}); 

// This function shows a bubble with a number 
// on top of the cart icon if items where added. 
function showCartBadge(){
  const badges = document.querySelectorAll(".cart span");
    Array.from(badges).forEach(badge => {
      badge.style.display = "flex";
      if (cartProducts.length <= 99) {
        badge.textContent = cartProducts.length;
      } else {
        badge.style.fontSize = "10px";
        badge.textContent = "99+";
      }
    });
}

// This function addes product card to the products grid
// It takes a products array as argument
function populateProduct(products) {
  productsGrid = document.querySelector("#products .products-grid");
  productsGrid.innerHTML = "";
  products.forEach(product => {
    productsGrid.appendChild(createProductCard(product));
  });
}
populateProduct(products);

// This function creates product card using its details
// It takes a product object as input and
// returns a reference to a card div
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const namePrice = document.createElement("div");
  namePrice.classList.add("name-price");
  const name = document.createElement("h3");
  name.textContent = product.name;
  const price = document.createElement("span");
  price.textContent = product.price + "$";
  namePrice.appendChild(name);
  namePrice.appendChild(price);

  const image = document.createElement("img");
  image.setAttribute("src", product.imageURL);
  image.setAttribute("alt", "product image");

  const addToCart = document.createElement("div");
  addToCart.classList.add("add-to-cart");
  addToCart.setAttribute("id", product.id);
  const addToCartImage = document.createElement("img");
  addToCartImage.setAttribute("src", "./images/shopping-cart2.svg");
  addToCartImage.setAttribute("alt", "add to cart image");
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
// returns a random number as string
// uses Math object to get random number to be used
// as product id.
function generateRandomNumber() {
  return Math.random().toString().slice(2);
}

// This function takes an argument of category name
// and return an array of products that matches that name
function filterByCategory(categoryName) {
  return products.filter(
    product => product.category.toLowerCase() === categoryName.toLowerCase()
  );
}
