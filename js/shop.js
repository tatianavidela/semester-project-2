import { baseUrl } from "/js/data/api.js";

const shopUrl = baseUrl + "/products";

(async function(){

    const shopContainer = document.querySelector(".row");

    try {
        const response = await fetch(shopUrl);
        const json= await response.json();


        
        shopContainer.innerHTML = "";

        json.forEach(function (product) {
            shopContainer.innerHTML += `
            <div class="col-md-6 col-lg-3">
            <div class="card h-100" style="margin: 10px auto;">
                <div class="product-image ratio ratio-1x1" style="background-image: url(${baseUrl}${product.image.url}); background-position: center; background-size: cover;"></div>
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">Price: ${product.price}</p>
                </div>
                <div class="card-footer"> 
                        <a href="detail.html?id=${product.id}" class="btn btn-primary">Add to cart</a>
                    </div>
            </div>
        </div>`;
        });
       
       
        console.log(json)
    }
    catch(error) {
        console.log(error);
    }
}) ();