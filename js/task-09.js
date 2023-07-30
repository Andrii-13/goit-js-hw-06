function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.querySelector("body"),
  btnChange: document.querySelector(".change-color"),
  colorEl: document.querySelector(".color"),
};

refs.btnChange.addEventListener("click", handlerChangeColor);

function handlerChangeColor(evt) {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.colorEl.textContent = refs.bodyEl.style.backgroundColor;
}
