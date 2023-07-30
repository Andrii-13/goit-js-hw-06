const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listIngredients = document.querySelector("#ingredients");

function getListIngredients(arr) {
  const ingredient = arr.map((el) => {
    const ingredientEl = document.createElement("li");
    ingredientEl.classList.add("item");
    ingredientEl.textContent = el;
    return ingredientEl;
  });

  listIngredients.append(...ingredient);
}

getListIngredients(ingredients);
