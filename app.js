let body = document.querySelector("body");
let button = document.querySelector("button");
let h1 = document.querySelector("h1");

const colorChange = () => {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  const color = `rgb(${r},${g},${b})`;
  body.style.backgroundColor = `${color}`;
  h1.textContent = `${color}`;
};

button.addEventListener("click", colorChange);
