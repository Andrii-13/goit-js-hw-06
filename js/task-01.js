const category = document.querySelector("#categories");
console.log("Number of categories:", category.children.length);

const item = category.querySelectorAll(".item");
item.forEach((el) =>
  console.log(`Category: ${el.querySelector("h2").textContent}
Elements: ${el.querySelector("ul").children.length}`)
);

