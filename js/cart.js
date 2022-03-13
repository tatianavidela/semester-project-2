import { getExistingCart } from "./utils/cartFunction.js";
import clearButton from "./ui/clearButton.js";

const addedProducts = getExistingCart();

const productContainer = document.querySelector(".product-container");

clearButton();

if(addedProducts.length === 0 ){
    productContainer.innerHTML = "you cart is empty"
    clearBtn.style.display = "none";
}

addedProducts.forEach(product => {
    productContainer.innerHTML+=`<div class="article">
                                    <h4>${product.title}</h4>
                                    <p>${product.price}</p>
                                    <p>${favourite.description}</p>
                                </div>` 
})