export interface Ingredient {
  label: string;
}

export const allIngredients = [
  { id: 1, label: "Dash Directory", text: "Lorem ipsum huper todem anum." },
  { id: 2, label: "Snippetbase", text: "Lorem ipsum huper todem anum." },
  { id: 3, label: "Sprachenwald", text: "Lorem ipsum huper todem anum." },
  { id: 4, label: "CER-10", text: "Lorem tyyed huper todem anum." },
  { id: 5, label: "Verein Pro", text: "Lorem sasasas huper todem anum." }, 
];

const [tomato, lettuce, cheese, carrot, banana] = allIngredients;

export const initialTabs = [tomato, lettuce, cheese, carrot, banana];

export function getNextIngredient(
  ingredients: Ingredient[]
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
