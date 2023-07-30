const elements = {
  inputEl: document.querySelector("#name-input"),
  vision: document.querySelector("#name-output"),
};

elements.inputEl.addEventListener("input", handlerType);

function handlerType() {
  if (elements.inputEl.value === "") {
    elements.vision.textContent = "Anonymous";
  } else {
    elements.vision.textContent = elements.inputEl.value;
  }
}
