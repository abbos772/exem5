const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const loading = document.querySelector(".loading");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
const API_URL = "https://dummyjson.com/products";

const singlee = document.querySelector(".cards");

async function featchdata(api) {
  let query = new URLSearchParams(window.location.search);
  let id = query.get("id");
  let getData = await fetch(`${api}/${id}`);
  getData
    .json()
    .then((res) => {
      console.log(res);
      createSingle(res);
    })
    .catch((err) => console.log(err));
}
featchdata(API_URL);

function createSingle(data) {
  singlee.innerHTML = `
  <div class="continer">
  <div class="cards">
    <p class="pp">Account / ${data.category} / ${data.title}</p>
<div class="single__boxes">
  <div class="single__mini">
    <div class="very_mini"><img src="${data.images[0]}" width="100"   alt=""></div>
    <div class="very_mini"><img src="${data.images[1]}" width="100"  alt=""></div>
    <div class="very_mini"><img src="${data.images[2]}" width="100"  alt=""></div>
    <div class="very_mini"><img src="${data.images[3]}" width="100"  alt=""></div>
  </div>
   <div class="single__big"><img src="${data.thumbnail}" width="480" alt=""></div>
   <div class="single_text">
    <h3>${data.category}</h3>
    <div class="stars">
      <img src="../img/Three Star.png" alt="">
      <p class="pp">(${data.rating}) |</p>
      <h5 class="pin">In Stock</h5>
    </div>
    <h3 class="h33">$${data.price}</h3>
    <h6 class="des">${data.description}</h6>
    <hr class="hrr">
    <div class="color">
      <h4 class="pp">Colours:</h4>
      <div class="black"></div>
      <div class="white"></div>
    </div>
    <div class="size">
      <p class="pp">Size:</p>
      <div class="xs"><h4>XS</h4></div>
      <div class="xs"><h4>S</h4></div>
      <div class="xs"><h4>M</h4></div>
      <div class="xs"><h4>L</h4></div>
      <div class="xs"><h4>Xl</h4></div>
    </div>
    <div class="ser">
      <div class="dona">
        <div class="minus">-</div>
        <div class="shot">1</div>
        <div class="minus">+</div>
      </div>
      <button class="btn__buy2">Buy Now</button>
      <div class="heart2">
        <img src="../img/Vector (7).png" alt="">
      </div>
    </div>
     <img src="../img/Frame 911.png" alt="">
   </div>
</div>
  </div>
</div>
  `;
}
