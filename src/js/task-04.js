const elements = {
  counter: document.querySelector("#counter"),
  vision: document.querySelector("#value"),
  decrement: document.querySelector('button[data-action = "decrement"]'),
  increment: document.querySelector('button[data-action = "increment"]'),
};

elements.increment.addEventListener("click", handleClick);
elements.decrement.addEventListener("click", handleClick);

let step = Number(elements.vision.textContent);

function handleClick(evt) {
  if (evt.currentTarget === elements.increment) {
    step += 1;
  } else {
    step -= 1;
  }
  elements.vision.textContent = step;
}
