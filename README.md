# Simple Web Layout

![HTML5](https://img.shields.io/badge/HTML5-Structure-orange)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Logic-yellow)
![Parcel](https://img.shields.io/badge/Parcel-Bundler-purple)
![License](https://img.shields.io/badge/License-ISC-green)

A multi-page static web project built with HTML, CSS, and JavaScript. It includes reusable navigation, light/dark theme switching, and a structure designed as a foundation for a corporate website or simple portfolio.

---

## Demo

[View demo](https://simple-web-layout.alexis-patino.xyz)

![Project screenshot](https://raw.githubusercontent.com/AlexisPA01/simple-web-layout/refs/heads/main/assets/img/screenshot.png)

---

## Overview

The project contains the following pages:

- `index.html` → Home page
- `about.html` → About section
- `services.html` → Services section
- `contact.html` → Contact section

Parcel is used as a bundler for development and production builds.

## Technologies

- HTML5
- CSS3
- JavaScript
- Parcel

## Requirements

- Node.js
- npm

## Installation

Clone the repository and install dependencies:

~~~bash
git clone https://github.com/AlexisPA01/simple-web-layout.git
cd simple-web-layout-main
npm install
~~~

## Development

~~~bash
npm start
~~~

Parcel will serve the project in development mode.

## Production Build

~~~bash
npm run build
~~~

This will generate the optimized version of the project.

## Project Structure

~~~text
simple-web-layout-main/
├── about.html
├── contact.html
├── index.html
├── services.html
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
├── components/
│   └── navbar.js
└── assets/
    ├── css/
    │   ├── about.css
    │   ├── contact.css
    │   ├── global.css
    │   ├── main.css
    │   └── services.css
    ├── img/
    │   ├── about-1.jpg
    │   ├── about-2.jpg
    │   ├── about-page.jpg
    │   ├── background-home.png
    │   ├── home.png
    │   └── home-white.png
    │   └── screenshot.png
    └── js/
        ├── about.js
        ├── contact.js
        ├── main.js
        └── services.js
~~~

## Features

- Reusable navigation component
- Light/Dark theme toggle with persistence in `localStorage`
- Page-based layout structure
- Section-based CSS organization
- Horizontal scroll/carousel in the services section
- Basic contact form
- Use of static assets (images, styles, scripts)

## How It Works

The navigation bar is centralized in `components/navbar.js` and injected into each page.

The project also stores the theme preference to keep the selected mode across reloads.

## Author

AlexisPA01

## License

ISC