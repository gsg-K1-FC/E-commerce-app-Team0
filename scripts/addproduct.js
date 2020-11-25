
const addProduct = document.querySelector("#add-product ");
let categories = document.getElementById("categories")
let storedProducts =  JSON.parse(localStorage.getItem("sellerProducts"));
const sellerProducts = storedProducts?storedProducts:[]
 

addProduct.addEventListener("submit",function(event){
    event.preventDefault();
    
    if(categories.value === "Select Category"){
     
        
        alert("Please choose category");
    }else{
      
         
        let formFields = event.target.children;
       
           const newProduct = {
            id:"randomId",
            imageUrl: formFields[0].children[1].value,
            name: formFields[1].children[0].value,
            price: formFields[1].children[1].value,
            detalis:formFields[1].children[2].value,
            category: categories.value
            };
            
            sellerProducts.push(newProduct);
            localStorage.setItem("sellerProducts",JSON.stringify(sellerProducts));
            
         
          
   }
})