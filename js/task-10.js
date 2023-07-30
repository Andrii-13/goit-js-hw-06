function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  creatEl: document.querySelector("button[data-create='']"),
  destroyEl: document.querySelector("button[data-destroy='']"),
  boxesEl: document.querySelector("#boxes"),
};

refs.creatEl.addEventListener("click", handlerNumberDiv);
refs.destroyEl.addEventListener("click", handlerDelDiv);

function handlerNumberDiv() {
  createBoxes(refs.inputEl.value);
}
let step = 0;
function createBoxes(amount) {
  // console.log(amount);
  for (let i = 0; i < amount; i += 1) {
    refs.boxesEl.insertAdjacentHTML(
      "beforeend",
      `<div class = 'block' style = "width: ${30 + step}px; height: ${
        30 + step
      }px; background-color : ${getRandomHexColor()}"></div>`
    );
    step += 10;
  }
}
// console.log(refs.boxesEl.children);

function handlerDelDiv() {
  destroyBoxes(refs.boxesEl);
}

function destroyBoxes(parent) {
  document.location.reload();
  // refs.inputEl.value = "";
  // parent.replaceChildren();
}
