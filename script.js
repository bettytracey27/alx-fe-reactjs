// script.js
const recipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish.",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Chicken Curry",
    description: "Spicy and creamy chicken curry.",
    image: "https://via.placeholder.com/150"
  }
];

const recipeList = document.getElementById("recipe-list");

recipes.forEach(recipe => {
  const recipeCard = document.createElement("div");
  recipeCard.className = "bg-white p-4 rounded shadow";
  recipeCard.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-32 object-cover rounded mb-2">
    <h2 class="font-bold text-lg">${recipe.title}</h2>
    <p>${recipe.description}</p>
    <a href="recipe.html?id=${recipe.id}" class="text-blue-500 mt-2 inline-block">View Recipe</a>
  `;
  recipeList.appendChild(recipeCard);
});

// script.js (append this)
const recipeDetail = document.getElementById("recipe-detail");
if (recipeDetail) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const recipe = recipes.find(r => r.id === id);

  if (recipe) {
    recipeDetail.innerHTML = `
      <h1 class="text-2xl font-bold mb-2">${recipe.title}</h1>
      <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-64 object-cover rounded mb-4">
      <p>${recipe.description}</p>
    `;
  }
}


// script.js (append this)
const addForm = document.getElementById("add-recipe-form");
if (addForm) {
  addForm.addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;

    recipes.push({
      id: recipes.length + 1,
      title,
      description,
      image
    });

    alert("Recipe added successfully!");
    addForm.reset();
  });
}
