var list_pro=document.getElementById("list");
list_pro.addEventListener('click',function(){
      
      var tab_pro= document.getElementsByClassName("tab-pro");
      tab_pro[0].setAttribute('style','visibility:hidden');
     console.log(tab_pro[0]);
     var list_pro= document.getElementsByClassName("list-pro");
     list_pro[0].setAttribute('style','visibility:visible;');
      
});

// grid product 
var list_pro=document.getElementById("grid");
list_pro.addEventListener('click',function(){
      
      var tab_pro= document.getElementsByClassName("tab-pro");
      tab_pro[0].setAttribute('style','visibility:visible');
     console.log(tab_pro[0]);
     var list_pro= document.getElementsByClassName("list-pro");
     list_pro[0].setAttribute('style','visibility:hidden;');
      
});
