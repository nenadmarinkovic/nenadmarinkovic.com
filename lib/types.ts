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
