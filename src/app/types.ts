export const PAGE_ROUTES = {
  new: 'new',
  top: 'top',
  best: 'best',
  home: 'home',
} as const;

export const PAGE_TITLES = {
  new: 'New Stories',
  top: 'Top Stories',
  best: 'Best Stories',
  home: 'Hacker News',
} as const;

export type PageRoutes = (typeof PAGE_ROUTES)[keyof typeof PAGE_ROUTES];

export type PageTitles = (typeof PAGE_TITLES)[keyof typeof PAGE_TITLES];
