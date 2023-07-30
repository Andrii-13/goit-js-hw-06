const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", handlerType);
console.log(inputEl);

function handlerType() {
  if (Number(inputEl.dataset.length) === inputEl.value.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    console.log(inputEl.classList);
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
  console.dir(inputEl);
}
