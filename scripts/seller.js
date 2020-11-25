
let productContainer=document.getElementById("productContainer")


   sellerProducts.forEach(function (product ){
 let card=document.createElement("div")
 card.classList.add("card")

 let priceContainer=document.createElement("div")
 priceContainer.classList.add("name-Price")

 let name=document.createElement("h3")
 name.innerText=product.name

 let price=document.createElement("span")
 price.innerText=product.price +"$"

 priceContainer.appendChild(name)
 priceContainer.appendChild(price)

 let image=document.createElement("img")
 image.src=product.imageURL

 card.appendChild(priceContainer)
 card.appendChild(image)
 productContainer.appendChild(card)

   })