const cart = document.querySelector('.info')
fetch('  http://localhost:3000/cart')
.then(response=>response.json())
.then(data=>{
    data.forEach(el => {
        cart.innerHTML+=`
        <div class="info1">

        <div class="hhh">
           <div class="basliq2">
               <a href="#">Unlimited Compnents</a>
           </div>
           <div class="text2">
               <img class="ggg" src="services1.svg" alt="">
           </div>
           <div class="info2">
               <p class="fff">Combine sections from Olla's vast component library and create beautiful.
               </p>
           </div>
       </div> 
        `
    });
})