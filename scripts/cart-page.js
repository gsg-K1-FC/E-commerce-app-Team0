

let sec=document.getElementsByClassName("section-1");
var tab_pro= document.getElementsByClassName("tab-pro");
      tab_pro[0].setAttribute('style','visibility:visible');
     console.log(tab_pro[0]);
     var list_pro= document.getElementsByClassName("grid-pro");
     list_pro[0].setAttribute('style','visibility:hidden;');
     if(cartProducts.length !=0)
{     console.log("hello");
      for( let i =0 ; i < cartProducts.length;i++)
      {
            let tr_tab = document.createElement('tr');
            let th1_tab = document.createElement('td');
            let img_pro = document.createElement('img');
            img_pro.setAttribute('style','width:100px;hright:200px;')
            img_pro.src=cartProducts[i].imageURL;
            let name_pro =document.createElement('span');

            name_pro.textContent=cartProducts[i].name;
            let div1 = document.createElement('div');
            div1.id="div"+i;
            div1.setAttribute('style','display:flex;flex-direction:row;')
            div1.appendChild(img_pro);
            div1.appendChild(name_pro);
            th1_tab.appendChild(div1);
            tr_tab.append(th1_tab);
            let th2_tab = document.createElement('td');
            let price = document.createElement('span');

            price.textContent = cartProducts[i].price;
            th2_tab.appendChild(price);
           
            let qty =document.createElement('input');
            qty.className="in-value";
            let td4_tab = document.createElement('td');
            let total = document.createElement('span');
            qty.value=1;
            total.textContent= qty.value * cartProducts[i].price;
            let p = document.getElementById('price');
            let p1 = document.getElementById('price2');
            qty.addEventListener('input',function(evt){
                  
                               
                  total.textContent= evt.target.value * cartProducts[i].price;
                  let pre=parseInt(p.textContent);
                  p.textContent= pre+ parseInt(total.textContent)+'$';
                  p1.textContent=p.textContent;


             });
            qty.setAttribute('style','width:50px;')
            let th3_tab = document.createElement('td');
            qty.type="number";
            qty.value=1;
           
            let del = document.createElement('td');
            let s_del = document.createElement('span');
            let delete_1 = document.createElement('i');
            delete_1.className="far fa-times-circle";
            s_del.appendChild(delete_1);
            s_del.setAttribute('style','cursor:pointer;')
            s_del.addEventListener('click',function(){
                  console.log(i);
                  //delete cartProducts[i];
                  let pre=parseInt(p.textContent);
                  p.textContent= pre- parseInt(total.textContent)+'$';
                  p1.textContent=p.textContent
                  cartProducts.splice(i, 1);
                  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
                  div1.removeChild(img_pro);
                  div1.removeChild(name_pro);
                  th1_tab.removeChild(div1);
                  tr_tab.append(th1_tab);
                  th2_tab.removeChild(price);
                  th3_tab.removeChild(qty);
                  td4_tab.removeChild(total);
                  tr_tab.removeChild(th2_tab);
                  tr_tab.removeChild(th3_tab);
                  tr_tab.removeChild(td4_tab);
                  tr_tab.removeChild(del);
                  tab_pro[0].removeChild(tr_tab);

                  
            });
            del.appendChild(s_del);

            th3_tab.appendChild(qty);
            td4_tab.appendChild(total);
            tr_tab.appendChild(th2_tab);
            tr_tab.appendChild(th3_tab);
            tr_tab.appendChild(td4_tab);
            tr_tab.appendChild(del);
            tr_tab.setAttribute('style','margin-top:30px;text-align:center;')
            tab_pro[0].appendChild(tr_tab);
            
            let pre=parseInt(p.textContent);
            p.textContent= pre+ parseInt(total.textContent)+'$';
            p1.textContent=p.textContent;
       // sec[0].insertBefore(tab_pro[0], sec[0].childNodes[5]);

      }}
      sec[0].insertBefore(tab_pro[0], sec[0].childNodes[5]);

            

      if(cartProducts.length ==0)
      {
            var tab_pro= document.getElementsByClassName("tab-pro");
            tab_pro[0].setAttribute('style','visibility:hidden');
           console.log(tab_pro[0]);
           var list_pro= document.getElementsByClassName("grid-pro");
           list_pro[0].setAttribute('style','visibility:hidden;');
            let messageEmpty = document.createElement("div");
            messageEmpty.className="message";
            messageEmpty.textContent="The cart is empty, if you want to shop click the button";
           
            let btnHome = document.createElement('button');
             btnHome.id="checkout";
             let btnHome1 = document.createElement('a');
             btnHome1.href="index.html";
             btnHome1.id="return-home";
             btnHome1.textContent="Home Page ";
             btnHome.appendChild(btnHome1);
             messageEmpty.appendChild(btnHome);
            let sec=document.getElementsByClassName("section-1");
            //sec[0].Child(messageEmpty);
            sec[0].insertBefore(messageEmpty, sec[0].childNodes[6]);
      
      }
      









var list_pro=document.getElementById("list");
list_pro.addEventListener('click',function(){
      
      var tab_pro= document.getElementsByClassName("tab-pro");
      tab_pro[0].setAttribute('style','visibility:visible');
     console.log(tab_pro[0]);
     var list_pro= document.getElementsByClassName("grid-pro");
     list_pro[0].setAttribute('style','visibility:hidden;');
     if(cartProducts.length !=0)
{     console.log("hello");
      for( let i =0 ; i < cartProducts.length;i++)
      {
            let tr_tab = document.createElement('tr');
            let th1_tab = document.createElement('td');
            let img_pro = document.createElement('img');
            img_pro.setAttribute('style','width:100px;hright:200px;')
            img_pro.src=cartProducts[i].imageURL;
            let name_pro =document.createElement('span');

            name_pro.textContent=cartProducts[i].name;
            let div1 = document.createElement('div');
            div1.id="div"+i;
            div1.setAttribute('style','display:flex;flex-direction:row;')
            div1.appendChild(img_pro);
            div1.appendChild(name_pro);
            th1_tab.appendChild(div1);
            tr_tab.append(th1_tab);
            let th2_tab = document.createElement('td');
            let price = document.createElement('span');

            price.textContent = cartProducts[i].price;
            th2_tab.appendChild(price);
           
            let qty =document.createElement('input');
            qty.className="in-value";
            let td4_tab = document.createElement('td');
            let total = document.createElement('span');
            qty.value=1;
            total.textContent= qty.value * cartProducts[i].price;
            let p = document.getElementById('price');
            let p1 = document.getElementById('price2');
            qty.addEventListener('input',function(evt){
                  
                               
                  total.textContent= evt.target.value * cartProducts[i].price;
                  let pre=parseInt(p.textContent);
                  p.textContent= pre+ parseInt(total.textContent)+'$';
                  p1.textContent=p.textContent;


             });
            qty.setAttribute('style','width:50px;')
            let th3_tab = document.createElement('td');
            qty.type="number";
            qty.value=1;
           
            let del = document.createElement('td');
            let s_del = document.createElement('span');
            let delete_1 = document.createElement('i');
            delete_1.className="far fa-times-circle";
            s_del.appendChild(delete_1);
            s_del.setAttribute('style','cursor:pointer;')
            s_del.addEventListener('click',function(){
                  console.log(i);
                  //delete cartProducts[i];
                  let pre=parseInt(p.textContent);
                  p.textContent= pre- parseInt(total.textContent)+'$';
                  p1.textContent=p.textContent
                  cartProducts.splice(i, 1);
                  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
                  div1.removeChild(img_pro);
                  div1.removeChild(name_pro);
                  th1_tab.removeChild(div1);
                  tr_tab.append(th1_tab);
                  th2_tab.removeChild(price);
                  th3_tab.removeChild(qty);
                  td4_tab.removeChild(total);
                  tr_tab.removeChild(th2_tab);
                  tr_tab.removeChild(th3_tab);
                  tr_tab.removeChild(td4_tab);
                  tr_tab.removeChild(del);
                  tab_pro[0].removeChild(tr_tab);

                  
            });
            del.appendChild(s_del);

            th3_tab.appendChild(qty);
            td4_tab.appendChild(total);
            tr_tab.appendChild(th2_tab);
            tr_tab.appendChild(th3_tab);
            tr_tab.appendChild(td4_tab);
            tr_tab.appendChild(del);
            tr_tab.setAttribute('style','margin-top:30px;text-align:center;')
            tab_pro[0].appendChild(tr_tab);
            sec[0].insertBefore(tab_pro[0], sec[0].childNodes[5]);
            let pre=parseInt(p.textContent);
            p.textContent= pre+ parseInt(total.textContent)+'$';
            p1.textContent=p.textContent;

            
            



      }
}
      
});





// grid product 
var list_pro=document.getElementById("grid");
list_pro.addEventListener('click',function(){
      
      var tab_pro= document.getElementsByClassName("tab-pro");
      tab_pro[0].setAttribute('style','visibility:hidden');
     console.log(tab_pro[0]);
     var list_pro= document.getElementsByClassName("grid-pro");
     list_pro[0].setAttribute('style','visibility:visible;');
     const card = document.createElement("div");
     card.classList.add("card");
     let p = document.getElementById('price');
     let p1 = document.getElementById('price2');
     p.textContent=0;
     p1.textContent=0;
     if(cartProducts.length !=0)
     {     console.log("hello");
           for( let i =0 ; i < cartProducts.length;i++)
           {
                  const namePrice = document.createElement("div");
                  const card = document.createElement("div");
                  const totalPrice = document.createElement("div");
                  card.classList.add("card1");
                  totalPrice.classList.add("name1-price");
                  card.setAttribute('style','width:30%px;height:250px;')
                  const image = document.createElement("img");
                  image.setAttribute("src", cartProducts[i].imageURL);
                  image.setAttribute("alt", "product image");
                  namePrice.classList.add("name1-price");

                  const name = document.createElement("h3");
                  name.textContent = cartProducts[i].name;
                  const price = document.createElement("span");
                  price.textContent = cartProducts[i].price + "$";
                  image.setAttribute('style','width:110px;height:100px;text-align:center;')
                  let s_del = document.createElement('span');
                  let delete_1 = document.createElement('i');
                  delete_1.setAttribute('style','font-size:20px;')
                  let qty =document.createElement('input');
                  qty.className="in-value";
                  qty.type="number";
                  qty.value=1;
                  let totalNmae = document.createElement('span');
                  totalNmae.textContent = "Total :";
                  let total = document.createElement('span');
                  total.textContent= qty.value * cartProducts[i].price;
                  
                  
                  qty.setAttribute('style','width:50px;')
                  delete_1.className="far fa-times-circle";
                  
                  
                  qty.addEventListener('input',function(evt){
                  
                               
                        total.textContent= evt.target.value * cartProducts[i].price;
                        let pre=parseInt(p.textContent);
                        p.textContent= pre+ parseInt(total.textContent)+'$';
                        p1.textContent=p.textContent;
      
      
                   });
                  //namePrice.appendChild(image);
                  s_del.setAttribute('style','cursor:pointer;')
                  s_del.addEventListener('click',function(){
                        console.log(i);
                        //delete cartProducts[i];
                         let pre=parseInt(p.textContent);
                         p.textContent= pre- parseInt(total.textContent)+'$';
                         p1.textContent=p.textContent
                        cartProducts.splice(i, 1);
                        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
                  
                        card.removeChild(s_del);
                        namePrice.removeChild(name);
                        namePrice.removeChild(price);
                        
                        card.removeChild(namePrice);
                        card.removeChild(image);
                        totalPrice.removeChild(qty);
                        totalPrice.removeChild(totalNmae);
                        totalPrice.removeChild(total);
                  

                        card.removeChild(totalPrice);
                        list_pro[0].removeChild(card);

                        
            });
                  s_del.appendChild(delete_1);
                  card.appendChild(s_del);
                  card.appendChild(image);
                  namePrice.appendChild(name);
                  namePrice.appendChild(price);
                  card.appendChild(namePrice);
                  totalPrice.appendChild(qty);
                  totalPrice.appendChild(totalNmae);
                  totalPrice.appendChild(total);
                  

                  card.appendChild(totalPrice);
                  
                  sec[0].insertBefore(list_pro[0], sec[0].childNodes[5]);
                  
                  list_pro[0].appendChild(card);
                  let pre=parseInt(p.textContent);
                  p.textContent=  pre+ parseInt(total.textContent)+'$';
                  p1.textContent=p.textContent;
           }
      }
   
});



