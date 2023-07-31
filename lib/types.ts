export type Spotify = {
  spotifyData?: {};
};

export type Theme = {
  theme?: string | boolean | (() => void);
  toggleTheme?: any;
};

export type MenuType = {
  openMenu: boolean;
  setOpenMenu?: any;
};

export type Params = {
  params: {
    slug: string
  }
}

export type SpotifyData = {
  // Define the structure of the Spotify data if possible.
  // This could include properties like `name`, `artist`, etc.
  // Replace `any` with specific types that match the expected data.
  // For example:
  name?: string;
  artist?: string;
  // ... other properties as needed
}

export type Source = {
  source: object
};

export type Frontmatter = {
  frontMatter: {
    title: string,
    description: string,
    link: string,
    date: string
  },
 
};
