export const navbar = `
    <nav class="navbar">
        <div class="navbar-logo">
            <img class="navbar-logo__img" src="${new URL('../assets/img/home.png', import.meta.url)}" alt="logo">
            <p class="navbar-logo__text">Project Example</p>
            <button id="theme-toggle">🌙</button>
        </div>
        <ul class="navbar-menu">
            <li><a class="navbar-link" href="index.html">Home</a></li>
            <li><a class="navbar-link" href="about.html">About</a></li>
            <li><a class="navbar-link" href="services.html">Services</a></li>
            <li><a class="navbar-link" href="contact.html">Contact</a></li>
        </ul>
    </nav>
`;

export function initNavbar() {
    const btn = document.getElementById("theme-toggle");
    const img = document.querySelector(".navbar-logo__img");

    function updateIcon() {
        btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
        img.src = document.body.classList.contains("dark") ?
            new URL('../assets/img/home-white.png', import.meta.url) :
            new URL('../assets/img/home.png', import.meta.url);
    }

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    updateIcon();

    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        updateIcon();
    });
}