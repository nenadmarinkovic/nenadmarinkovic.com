export type Spotify = {
  spotifyData?: {};
};

export type Theme = {
  theme?: string | boolean | (() => void);
  toggleTheme: () => void;
};

export type MenuType = {
  openMenu: boolean;
  setOpenMenu?: any;
};
