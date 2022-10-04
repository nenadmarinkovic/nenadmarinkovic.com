export interface Ingredient {
  icon: string;
  label: string;
}

export const allIngredients = [
  { icon: "🍅", label: "Tomato", text: "Lorem ipsum huper todem anum." },
  { icon: "🥬", label: "Lettuce", text: "Lorem ipsum huper todem anum." },
  { icon: "🧀", label: "Cheese", text: "Lorem ipsum huper todem anum." },
  { icon: "🥕", label: "Carrot", text: "Lorem tyyed huper todem anum." },
  { icon: "🍌", label: "Banana", text: "Lorem sasasas huper todem anum." },
  { icon: "🫐", label: "Blueberries", text: "Lorem ipsumsasasas huper todem anum." },
  { icon: "🥂", label: "Champers?", text: "Lorem ipsum huper tohuhudem anum." },
];

const [tomato, lettuce, cheese, carrot, banana] = allIngredients;

export const initialTabs = [tomato, lettuce, cheese, carrot, banana];

export function getNextIngredient(
  ingredients: Ingredient[]
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
