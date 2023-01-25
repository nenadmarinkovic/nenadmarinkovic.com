export interface SelectedProject {
  icon: string;
  label: string;
}

export const all = [
  { icon: "01", label: "Dash Directory" },
  { icon: "02", label: "Reactify" },
  { icon: "03", label: "Snippetbase" },
];

export const initialTabs = all;

export function getNextIngredient(
  ingredients: SelectedProject[]
): SelectedProject | undefined {
  const existing = new Set(ingredients);
  return all.find((ingredient) => !existing.has(ingredient));
}
