const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handlerForm);

const userForm = {};

function handlerForm(evt) {
  evt.preventDefault();
  //   console.log(evt.currentTarget.elements);

  const { email, password } = evt.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("всі поля повинні бути заповнені");
    return;
  }
  userForm[email.name] = email.value;
  userForm[password.name] = password.value;
  console.log(userForm);
  formEl.reset();
}
