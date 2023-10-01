export type ThemeType = {
  theme?: string | boolean | (() => void);
  toggleTheme?: any;
};

export type MenuType = {
  openMenu: boolean;
  setOpenMenu?: any;
};

export type BannerType = {
  name: string;
  surname?: string;
  margin?: string;
  withWidth?: Boolean;
};

export type TitleType = {
  title: string;
};

export type TagType = {
  color: string;
  text: string;
};

export type TagButtonType = {
  color: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  active?: string | boolean;
};

export type ParamType = {
  params: {
    slug: string;
  };
};

export type SelectedProjectType = {
  index: number;
  label: string;
};

export type CardType = {
  title: string;
  description: string;
  reversed: boolean;
  boxColor: string;
  boxTitle: string;
  boxText1: string;
  boxText2: string;
  boxText3: string;
  boxItemIcon: string;
};

export type PostType = {
  [x: string]: any;
  posts: {
    [x: string]: any;
    content: string;
    data: {
      category: string;
      date: string;
      description: string;
      title: string;
      filePath: string;
    };
  };
};

export type FilteredPostType = {
  [x: string]: any;
  content: string;
  data: {
    category: string;
    date: string;
    description: string;
    title: string;
    filePath: string;
  };
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

export type PhotoProps = {
  id: string;
  alt: string;
  title: string;
  text: string;
};

export type SpotifyType = {
  isPlaying: boolean;
  songUrl: string;
  artist: string;
  title: string;
};
