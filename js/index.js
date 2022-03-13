import { baseUrl } from "/js/data/api.js";

const heroUrl = baseUrl + "/home";

(async function(){
    const heroContainer = document.querySelector(".hero-banner");
    const featuredContainer = document.querySelector(".featured-products")

    try {
        const response = await fetch(heroUrl);
        const json= await response.json();

        const heroBanner = json.hero_banner;

        heroContainer.innerHTML = "";

       
        heroContainer.innerHTML += ` <img src="${baseUrl}${heroBanner.url}" class="img-fluid hero-img" alt="man holding espresso cup"> 
                                    <h1 class="display-1"><a href="#">We have freshly roasted coffee, and also <span>flowers</span> </a></h1>`
    
        console.log(heroBanner)
    }
    catch(error) {
        console.log(error);
    }
}) ();