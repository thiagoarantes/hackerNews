export const PAGE_ROUTES = {
  home: 'home',
  new: 'new',
  top: 'top',
  best: 'best',
  comments: 'comments',
} as const;

export const PAGE_TITLES = {
  home: 'Hacker News',
  new: 'New Stories',
  top: 'Top Stories',
  best: 'Best Stories',
  comments: 'Comments',
} as const;

export type PageRoutes = (typeof PAGE_ROUTES)[keyof typeof PAGE_ROUTES];

export type PageTitles = (typeof PAGE_TITLES)[keyof typeof PAGE_TITLES];

export type Story = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

export type Comment = {
  by: string;
  id: number;
  kids?: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
};
