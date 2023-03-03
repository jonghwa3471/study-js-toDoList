const images = ["01.png", "02.png", "03.png", "04.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url(${bgImage.src})`;
