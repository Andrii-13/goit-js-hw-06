const arrCategories = document.querySelector("#categories");
console.log("Number of categories:", arrCategories.children.length);

const arr = [];

[...arrCategories.children].forEach((element) => {
  return arr.push({
    Category: element.querySelector("h2").textContent,
    Elements: element.querySelectorAll("li").length,
  });
});

arr.map((el) => console.log(el));
