//b1 truy cap phan tu

let cartBtn=document.querySelector(".cart-btn")

let cartmodalOverlay=document.querySelector(".cart-modal-overlay")
let closeBtn=document.querySelector("#close-btn")


// console.log(closeBtn);
// console.log(cartmodalOverlay)

cartBtn.addEventListener("click",()=>{
cartmodalOverlay.style.transform="translateX(0)";
})

closeBtn.addEventListener("click",()=>{
  // alert(123)
  cartmodalOverlay.style.transform="translateX(-200%)";
})

cartmodalOverlay.addEventListener("click",(event) => {
  // console.log(event.target.classList.contains("cart-modal-overlay"))

  if(event.target.classList.contains("cart-modal-overlay") == true){
    cartmodalOverlay.style.transform="translateX(-200%)";
  }
})



//add san pham

//b1:truy capphan tu
const addToCart=document.querySelectorAll(".add-to-cart")

console.log(addToCart)

addToCart.forEach((button)=>{
  // console.log(button);

  button.addEventListener("click",()=>{
    cartmodalOverlay.style.transform="translateX(0)";

    addToCartClicked(button);
  });
})


//hien thi price ,image len cart

const addToCartClicked = (button)=>{
  console.log(button)

  let parentCart=button.parentElement;
  let price=parentCart.querySelector(".product-price").innerHTML;

  let imageSrc=parentCart.querySelector(".product-image").src
  console.log(imageSrc);

  addToCartItem(price,imageSrc);
}


//hien thi len cart

const addToCartItem =(price,imageSrc)=>{
let productRows=document.querySelector(".product-rows")
console.log(productRows)
//tao the div co class la product


let divEL=document.createElement("div")
//gan class vao the div -product-rows

divEL.classList.add(".product-row");

let cartHTML=`

<img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
`;

divEL.innerHTML=cartHTML;
console.log(divEL)


productRows.appendChild(divEL)
}

