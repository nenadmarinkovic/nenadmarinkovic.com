export interface SelectedProject {
  icon: string;
  label: string;
}

export const all = [
  { icon: "01", label: "Dash Directory", description: 'Constant improvements in terms of speed, responsiveness, SEO, and accessibility helps your website run smootly and ensures positive user experience.' },
  { icon: "02", label: "Reactify", description: 'From marketing websites and content-management systems to web applications and dashboards. Developed with confidence for engagement and scale.' },
  { icon: "03", label: "Snippetbase", description: 'Bring digital product to life through carefully considered design and technical know-how, using fast, secure, and reliable tools and technologies.' },
];

export const initialTabs = all;

export function getNextIngredient(
  ingredients: SelectedProject[]
): SelectedProject | undefined {
  const existing = new Set(ingredients);
  return all.find((ingredient) => !existing.has(ingredient));
}
