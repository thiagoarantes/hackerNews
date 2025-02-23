export const PAGE_ROUTES = {
  ALL: 'all',
  TOP: 'top',
  BEST: 'best',
} as const;

export type PageRoutes = (typeof PAGE_ROUTES)[keyof typeof PAGE_ROUTES];
