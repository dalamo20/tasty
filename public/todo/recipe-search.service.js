import { fetchData } from "../../lib/api-secrets.js";

const searchForm = document.getElementById("searchForm");
const recipeContainer = document.querySelector(".recipeContainer");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const searchInput = searchForm.querySelector('input[type="search"]');
  const query = searchInput.value.trim();

  if (query) {
    try {
      const recipes = await fetchRecipes(query);
      displayRecipes(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }
});

async function fetchRecipes(query) {
  console.log("Fetching recipes for query:", query);
  const queries = [`q=${encodeURIComponent(query)}`];
  const recipes = await new Promise((resolve, reject) => {
    fetchData(queries, (data) => {
      resolve(data);
    });
  });
  return recipes;
}

function displayRecipes(recipes) {
  console.log("Displaying recipes:", recipes);

  recipeContainer.innerHTML = "";

  recipes.hits.forEach((hit) => {
    const recipe = hit.recipe;
    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe");
    recipeElement.innerHTML = `
      <h3>${recipe.label}</h3>
      <img src="${recipe.image}" alt="${recipe.label}">
      <p>Source: ${recipe.source}</p>
      <a href="${recipe.url}" target="_blank">View Recipe</a>
    `;
    recipeContainer.appendChild(recipeElement);
  });
}
