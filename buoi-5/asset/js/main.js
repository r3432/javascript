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

divEL.classList.add("product-row");

let cartHTML=`

<img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
`;

divEL.innerHTML=cartHTML;
console.log(divEL)

//check moi san pham them dc 1 lan thoi

let cartImgEL=document.querySelectorAll(".cart-image")

console.log(cartImgEL)

let isDuplucate=false;
cartImgEL.forEach((item)=>{

  if(item.src == imageSrc){
    alert("san pham da co roi cap nhat gio hang di ");
    isDuplucate=true;
  }
// console.log(item.src);
});
if (isDuplucate==true){
  return null;
}

//them moi san pham vao gio hang
productRows.appendChild(divEL);
updateCartPrice();

//xoa san pham trong gio hang dang ton tai

let removeSP=document.querySelectorAll(".remove-btn")

removeSP.forEach((buttonRemove)=>{
console.log(buttonRemove)

buttonRemove.addEventListener("click",()=>{
//alert(123);
removeItem(buttonRemove);
})
});
//nguoi dung thay doi so luong o trong gio hang

let productQuantity=document.querySelectorAll(".product-quantity");
// console.log(productQuantity)

productQuantity.forEach((inputEL)=>{
  console.log(inputEL);
  inputEL.addEventListener("change",()=>{
    // console.log(123);

    changeQuantity(inputEL);
  })
})
}

const removeItem =(buttonRemove)=>{

  buttonRemove.parentElement.remove();
  // console.log(buttonRemove.parentElement)

  updateCartPrice();
}
//funcition xu ly thay doi so luong

const changeQuantity=(inputEL)=>{
  //ko cho phep nhap san pham<1
 // console.log(inputEL.value);
  if(inputEL.value < 1){
    alert("san pham it nhat =1")
    return inputEL.value = 1;
  }
updateCartPrice();}
  //cap nhat tong gia tien
  const updateCartPrice=()=>{

    let productRow=document.querySelectorAll(".product-row");
// console.log("cap nhat gia")
let total=0;
let totalQuantity=0;
productRow.forEach((cartItem)=>{
//console.log(cartItem)
//so luong san pham
const quantityEL=cartItem.querySelector(".product-quantity").value;
const quantity=parseFloat(quantityEL);

//gia tien cua tung san pham
const priceEL=cartItem.querySelector(".cart-price").innerHTML.replace("$","");

const price=parseFloat(priceEL)
// console.log(typeof(price))
//tong gia tien tat ca san pham
total=total+(quantity*price)
//tong so luong san pham
totalQuantity=totalQuantity+quantity;
});
// console.log(total)

//hien thi gia tien ra cart

let totalPriceEL=document.querySelector(".total-price");
console.log(totalPriceEL);
totalPriceEL.innerHTML="$" + total;


// hien thi ra icon cart

let cartQuantityEL=document.querySelector(".cart-quantity");
// console.log(cartQuantityEL)
cartQuantityEL.innerHTML=totalQuantity;
if(totalQuantity>100){
  cartQuantityEL.innerHTML="100+";
}
  }




