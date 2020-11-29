

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

productsGrid = document.querySelector("#products .product-grid");
function populateSellerProduct(products) {
  
  productsGrid.innerHTML = "";
  if (products.length === 0) {
    productsGrid.innerHTML =
      "<h3 >You don't have any products <a href='addproduct.html'>click here</a> to add one </h3>";
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
  name.className="name__pro";
  name.textContent = sellerProducts.name;
  const price = document.createElement("span");
  price.className="pric";
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
  deleteButton.classList.add("delete__button");
  deleteButton.setAttribute("id","delete");
  const editButton = document.createElement("button"); 
  editButton.textContent ="Edit";
  editButton.classList.add("edit__button");
  editButton.setAttribute("id","edit");
  deleteEdit.appendChild(deleteButton); 
  deleteEdit.appendChild(editButton);

  card.appendChild(namePrice);
  card.appendChild(image); 
  card.appendChild(deleteEdit);
  
  
  return card;
}
// delete button 
let del_product = document.getElementsByClassName("delete__button");
let card_pro = document.getElementsByClassName("card");
for(let i = 0 ; i<del_product.length;i++)
{
  del_product[i].addEventListener('click',function(){
    sellerProducts.splice(i, 1);
    localStorage.setItem('sellerProducts', JSON.stringify(sellerProducts));
    productsGrid.removeChild(card_pro[i]);
    //window.open ("./seller.html",'_blank')
    //populateSellerProduct(sellerProducts);

    
  });
}

// edit button 
let edit_product = document.getElementsByClassName("edit__button");
var modal = document.getElementById("myModal");
for(let i = 0 ; i<edit_product.length;i++)
{
  edit_product[i].addEventListener('click', function() {
    modal.style.display = "flex";
    let btn_edit = document.getElementById('edit1');
    const addProduct = document.querySelector("#edit-product ");
    addProduct.addEventListener('submit',function(event){
      event.preventDefault();
      let formFields = event.target.children;
       
      const editProduct = {
        id:"randomId",
        name: formFields[1].children[0].value,
       price: formFields[1].children[1].value,
       imageURL: formFields[0].children[1].value,
      
       detalis:formFields[1].children[2].value,
       category: categories.value
       };
       
       
       sellerProducts[i]=editProduct;
       localStorage.setItem("sellerProducts",JSON.stringify(sellerProducts));
       modal.style.display = "none";
       location.reload(); 
       
       
    
    });
  });
}
let close_btn = document.getElementsByClassName("close")[0];
close_btn.onclick = function() {
  modal.style.display = "none";
}

//populateSellerProduct(sellerProducts[i]); 