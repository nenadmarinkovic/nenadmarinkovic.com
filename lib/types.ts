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
    slug: string;
  };
};

export type SpotifyData = {
  name?: string;
  artist?: string;
};

export type Source = {
  source: object;
};

export type Frontmatter = {
  frontMatter: {
    title: string;
    description: string;
    link: string;
    date: string;
  };
};
