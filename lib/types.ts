export type ThemeType = {
  theme?: string | boolean | (() => void);
  toggleTheme?: any;
};

export type MenuType = {
  openMenu: boolean;
  setOpenMenu?: any;
};

export type ParamType = {
  params: {
    slug: string;
  };
};

export type PostType = {
  posts: {
    [x: string]: any;
    content: string;
  };

  data: {
    category: string;
    date: string;
    description: string;
    title: string;
    filePath: string;
  };
};

export type SpotifyType = {
  spotifyData?: {};
  name?: string;
  artist?: string;
};

export type SourceType = {
  source: object;
};

export type FrontmatterType = {
  frontMatter: {
    title: string;
    description: string;
    link: string;
    date: string;
  };
};
