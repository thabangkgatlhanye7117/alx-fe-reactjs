import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (updatedRecipe) => set(state => ({ recipes: [...state.recipes, updatedRecipe] })),
  deleteRecipe: (deletedRecipe) => set(state => ({ recipes: [...state.recipes, deletedRecipe] })),
}));