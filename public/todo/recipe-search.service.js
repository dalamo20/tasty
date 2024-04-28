import { fetchData } from "../../lib/api-secrets.js";

const searchForm = document.getElementById("searchForm");
const recipeContainer = document.querySelector(".recipeContainer");
const filters = document.getElementById("filters");

// Add event listeners to filter checkboxes
filters.addEventListener("change", async () => {
  const searchInput = searchForm.querySelector('input[type="search"]');
  const query = searchInput.value.trim();
  const filterValues = getFilterValues();

  if (query) {
    try {
      const recipes = await fetchRecipes(query, filterValues);
      displayRecipes(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }
});

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const searchInput = searchForm.querySelector('input[type="search"]');
  const query = searchInput.value.trim();
  const filterValues = getFilterValues();

  if (query) {
    try {
      const recipes = await fetchRecipes(query, filterValues);
      displayRecipes(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }
});

function getFilterValues() {
  const filterValues = {
    cuisineType: [],
    dietLabels: [],
    totalTime: [],
  };

  // Get checked checkboxes for each filter type
  Array.from(
    filters.querySelectorAll('input[type="checkbox"]:checked')
  ).forEach((checkbox) => {
    filterValues[checkbox.name].push(checkbox.value);
  });

  return filterValues;
}

async function fetchRecipes(query, filterValues) {
  console.log("Fetching recipes for query:", query);
  const queries = [`q=${encodeURIComponent(query)}`];

  // Add filter queries
  for (const filterType in filterValues) {
    if (filterValues[filterType].length > 0) {
      queries.push(`${filterType}=${filterValues[filterType].join(",")}`);
    }
  }

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
