let title = document.querySelector("#button-overlay-two");
let coupon = document.querySelector(".button-code");

function removeTitle() {
  title.style.display = "none";
  coupon.classList.add("revealed");
  coupon.style.display = "initial";
}
