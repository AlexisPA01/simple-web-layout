import { navbar } from "../../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar;

const track = document.querySelector('.carousel__track');
const cards = document.querySelectorAll('.service-card');
const nextBtn = document.querySelector('.carousel__btn--next');
const prevBtn = document.querySelector('.carousel__btn--prev');
const card = document.querySelector('.service-card');

let index = 3;
const gap = 20;
const scrollWidth = card.offsetWidth + gap;

// 1. Clonar las primeras 3 y últimas 3 tarjetas
const firstClones = [cards[0], cards[1], cards[2]];
const lastClones = [cards[cards.length - 3], cards[cards.length - 2], cards[cards.length - 1]];

firstClones.forEach(clone => track.append(clone.cloneNode(true)));
lastClones.reverse().forEach(clone => track.prepend(clone.cloneNode(true)));

// 2. Posicionar el track en el inicio real (después de los clones)
track.style.transform = `translateX(-${index * scrollWidth}px)`;

nextBtn.addEventListener('click', () => {
    if (index >= cards.length + 3) return;
    index++;
    move();
});

prevBtn.addEventListener('click', () => {
    if (index <= 0) return;
    index--;
    move();
});

// 3. El truco de la "Teletransportación"
track.addEventListener('transitionend', () => {
    // Si llegamos al final de los clones, saltar al inicio real sin animación
    if (index >= cards.length + 3) {
        track.style.transition = 'none';
        index = 3;
        track.style.transform = `translateX(-${index * scrollWidth}px)`;
    }
    // Si llegamos al inicio de los clones, saltar al final real
    if (index <= 0) {
        track.style.transition = 'none';
        index = cards.length;
        track.style.transform = `translateX(-${index * scrollWidth}px)`;
    }
});

function move() {
    track.style.transition = "transform 0.4s ease-in-out";
    track.style.transform = `translateX(-${index * scrollWidth}px)`;
}
