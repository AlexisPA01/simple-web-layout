import { navbar, initNavbar } from "../../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar;

initNavbar();

const carousel = document.querySelector(".services-preview__carousel");
const next = document.querySelector(".carousel__btn--next");
const prev = document.querySelector(".carousel__btn--prev");

function getScrollAmount() {
    const card = carousel.querySelector(".service-card");
    const track = carousel.querySelector(".carousel__track");
    const gap = parseInt(getComputedStyle(track).gap);
    return card.offsetWidth + gap;
}

next.addEventListener("click", () => {
    carousel.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth"
    });
});

prev.addEventListener("click", () => {
    carousel.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth"
    });
});