const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

let isLogin = localStorage.getItem("token");

function checkLogin() {
  if (!isLogin) {
    window.location.replace(`/pages/login.html`, "_self");
  }
}
checkLogin();
