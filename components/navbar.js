export const navbar = `
    <nav class="navbar">
        <div class="navbar-logo">
            <img class="navbar-logo__img" src="${new URL('../assets/img/home.png', import.meta.url)}" alt="logo">
            <p class="navbar-logo__text">Project Example</p>
        </div>
        <ul class="navbar-menu">
            <li><a class="navbar-link" href="index.html">Home</a></li>
            <li><a class="navbar-link" href="about.html">About</a></li>
            <li><a class="navbar-link" href="services.html">Services</a></li>
            <li><a class="navbar-link" href="contact.html">Contact</a></li>
        </ul>
    </nav>
`;