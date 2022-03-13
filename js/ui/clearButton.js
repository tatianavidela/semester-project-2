export default function clearButton () {

    const clearBtn = document.querySelector("#clear");

    clearBtn.addEventListener("click", clearCart);

    function clearCart () {
        if (confirm("Are you sure you want to clear the cart?")){
            localStorage.clear();

            clearBtn.style.display = "none";

            const cartContainer = document.querySelector(".cart-container");
            cartContainer.innerHTML = "Your cart is empty";
        }
    }
}