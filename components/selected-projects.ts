export interface SelectedProject {
  index: number;
  label: string;
}

export const all = [
  {
    index: 1,
    label: "Dash Directory",
    link: "https://dash.directory",
    description:
      "Constant improvements in terms of speed, responsiveness, SEO, and accessibility helps your website run smootly and ensures positive user experience. Developed with confidence for engagement and scale. Developed with confidence for engagement and scale.",
  },
  {
    index: 2,
    label: "Reactify",
    link: "https://reactify.org",
    description:
      "From marketing websites and content-management systems to web applications and dashboards. Developed with confidence for engagement and scale. Developed with confidence for engagement and scale. Developed with confidence for engagement and scale.",
  },
  {
    index: 3,
    label: "Snippetbase",
    link: "https://snippetbase.net",
    description:
      "Bring digital product to life through carefully considered design and technical know-how, using fast, secure, and reliable tools and technologies. Developed with confidence for engagement and scale. Developed with confidence for engagement and scale.",
  },
];

export const initialTabs = all;

export function getNextIngredient(
  projects: SelectedProject[]
): SelectedProject | undefined {
  const existing = new Set(projects);
  return all.find((project) => !existing.has(project));
}
