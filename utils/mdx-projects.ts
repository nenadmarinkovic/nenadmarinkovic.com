import fs from 'fs';
import path from 'path';
export const PROJECTS_PATH = path.join(process.cwd(), 'projects');

export const postFilePaths = fs
  .readdirSync(PROJECTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));
