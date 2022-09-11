const body = document.querySelector("body");

const bgNumber = Math.floor(Math.random() * 4);

body.style.backgroundImage = `url(bg/${bgNumber}.jpg)`;