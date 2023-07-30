const refs = {
  position: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

refs.position.addEventListener("input", handlerChangeRange);

function handlerChangeRange() {
  refs.textEl.style.fontSize = `${refs.position.value}px`;
}
