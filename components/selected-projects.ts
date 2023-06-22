export interface SelectedProject {
  index: number;
  label: string;
}

export const all = [
  {
    index: 1,
    label: "Dash Directory",
    link: "dash.directory",
    description:
      "Dash Directory is a platform for task and event management, as well as bookmark organization. With its intuitive UI, it simplifies self-management and enhances productivity. Dash Directory empowers users to stay organized and focused on their goals. In development mode.",
  },
  {
    index: 2,
    label: "Reactify",
    link: "reactify.org",
    description:
      "Reactify is the ultimate destination for React developers and designers, providing a comprehensive suite of services. Access a wide range of design resources, leverage the power of tested headless CMSs, and foster seamless collaboration through efficient APIs.",
  },
  {
    index: 3,
    label: "Snippetbase",
    link: "snippetbase.net",
    description:
      "Snippetbase is a platform for code snippets. Discover, share, and leverage ready-to-use code across multiple programming languages and frameworks. Boost your productivity with Snippetbase's centralized repository of efficient solutions.",
  },
];

export const initialTabs = all;

export function getNextIngredient(
  projects: SelectedProject[]
): SelectedProject | undefined {
  const existing = new Set(projects);
  return all.find((project) => !existing.has(project));
}
