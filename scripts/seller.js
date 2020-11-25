

const sellerProducts = JSON.parse(localStorage.getItem("sellerProducts"))

// || [
//   {
//     id: "1",
//     name: "Laptop",
//     price: 500,
//     imageURL:
//       "https://www.notebookcheck.net/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG",
//     category: "Technology",
//     details: "Some details",
//   },
//   {
//     id: "1",
//     name: "BMW",
//     price: 500000,
//     imageURL:
//       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmwi8-mmp-1-1573836896.jpg?crop=0.949xw:0.712xh;0,0.243xh&resize=1200:*",
//     category: "Cars",
//     details: "Some details",
//   },
//   {
//     id: "1",
//     name: "Barbell",
//     price: 100,
//     imageURL: "https://www.alphafit.com.au/assets/full/863.jpg?20200903125631",
//     category: "Fitness",
//     details: "Some details",
//   },
//   {
//     id: "1",
//     name: "Hair Dryer",
//     price: 85,
//     imageURL:
//       "https://images-na.ssl-images-amazon.com/images/I/51lhNUYlzeL.jpg",
//     category: "Beauty",
//     details: "Some details",
//   },
//   {
//     id: "1",
//     name: "Dress",
//     price: 50,
//     imageURL:
//       "https://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733_900x.jpg?v=1576267132",
//     category: "Fashion",
//     details: "Some details",
//   }
// ];


function populateSellerProduct(products) {
  productsGrid = document.querySelector("#products .products-grid");
  productsGrid.innerHTML = "";
  if (products.length === 0) {
    productsGrid.innerHTML =
      "<h3>You don't have any products <a href='#'>click here</a> to add one </h3>";
  } else {
    products.forEach((product) => {
      productsGrid.appendChild(createSellerProductCard(product));
    });
  }
}
populateSellerProduct(sellerProducts);  


function createSellerProductCard(sellerProducts) {
  const card = document.createElement("div");
  card.classList.add("card");

  const namePrice = document.createElement("div");
  namePrice.classList.add("name-price");
  const name = document.createElement("h3");
  name.textContent = sellerProducts.name;
  const price = document.createElement("span");
  price.textContent = sellerProducts.price + "$";
  namePrice.appendChild(name);
  namePrice.appendChild(price);

  const image = document.createElement("img");
  image.setAttribute("src", sellerProducts.imageURL);
  image.setAttribute("alt", "product image");

  const deleteEdit = document.createElement("div"); 
  deleteEdit.classList.add("delete-edit");
  const deleteButton = document.createElement("button"); 
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-edit__button");
  deleteButton.setAttribute("id","delete");
  const editButton = document.createElement("button"); 
  editButton.textContent ="Edit";
  editButton.classList.add("delete-edit__button");
  editButton.setAttribute("id","edit");
  deleteEdit.appendChild(deleteButton); 
  deleteEdit.appendChild(editButton);

  card.appendChild(namePrice);
  card.appendChild(image); 
  card.appendChild(deleteEdit);
  
  return card;
}