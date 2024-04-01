const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const loading = document.querySelector(".loading");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const cards = document.querySelector(".cards");

const API_URL = "https://dummyjson.com/products";

async function fetchData(api) {
  let getData = await fetch(api);
  getData
    .json()
    .then((res) => createCard(res.products))
    .catch((error) => console.log(error))
    .finally(() => {
      loading.style.display = "none";
    });
}
fetchData(API_URL);

function createCard(data) {
  let fragment = document.createDocumentFragment();
  console.log(data[0]);
  data.slice(0, 8).forEach((products) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div data-id = ${products.id}>
    <div class="card">      
          <div class="card__image">      
             <img name = "product-img" src="${products.thumbnail}" width = '200px' alt="">
             <div class="hearts">
              <div class="heart">
                <img src="./img/Wishlist.png" alt="">
              </div>
              <div class="heart">
                <svg width="21.000000" height="15.000000" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <desc>
                      Created with Pixso.
                  </desc>
                  <defs/>
                  <path id="Vector" d="M19.25 8.03C17.76 9.98 14.18 14 10 14C5.81 14 2.23 9.98 0.74 8.03C0.51 7.74 0.38 7.37 0.38 7C0.38 6.62 0.51 6.25 0.74 5.96C2.23 4.01 5.81 0 10 0C14.18 0 17.76 4.01 19.25 5.96C19.73 6.58 19.73 7.41 19.25 8.03Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                  <path id="Vector" d="M10 10C8.34 10 7 8.65 7 7C7 5.34 8.34 4 10 4C11.65 4 13 5.34 13 7C13 8.65 11.65 10 10 10Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                </svg>
                
              </div>
             </div>
             <div class='new'>
             NEW
             </div>
             <ul class="sci">
              <li>
                <button class="btn__card">Add To Card</button>
              </li>
              
            </ul>
          </div>
          <div class="card__text">
            <div class = "brand">
            <h4>${products.category}</h4>
            <h4>${products.brand}</h4>
            </div>
            <h4>${products.title}</h4>
            <div class="stars"><h4> ${products.price}$</h4> <img src="./img/Three Star.png" alt="">
              <p>(${products.rating})</p>
            </div>
          </div>     
    </div>
  </div>
    `;
    fragment.appendChild(card);
  });
  cards.appendChild(fragment);
}

const singleRoate = (id) => {
  window.open(`/pages/product.html?id=${id}`, "_self");
};

cards.addEventListener("click", (e) => {
  if (e.target.name === "product-img") {
    let id = e.target.closest("[data-id]").dataset.id;
    singleRoate(id);
  }
});
