import { navbar, initNavbar } from "../../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar;

initNavbar();

const carousel = document.querySelector(".services-preview__carousel");
const next = document.querySelector(".carousel__btn--next");
const prev = document.querySelector(".carousel__btn--prev");

next.addEventListener("click", () => {
    carousel.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});

prev.addEventListener("click", () => {
    carousel.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});