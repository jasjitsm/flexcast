export const PATHS = {
  DISCOVER: '/discover',
  SUBSCRIPTIONS: '/subscriptions',
  RELEASES: '/releases',
  FAVOURITES: '/favourites',
  DOWNLOADS: '/downloads',
  SETTINGS: '/settings',
  ABOUT: '/about'
}

export const ROUTES = [
  { section: '1', path: PATHS.DISCOVER, label: 'Discover' },
  { section: '1', path: PATHS.SUBSCRIPTIONS, label: 'Subscriptions' },
  { section: '2', path: PATHS.RELEASES, label: 'New Releases' },
  { section: '2', path: PATHS.FAVOURITES, label: 'Favourites' },
  { section: '2', path: PATHS.DOWNLOADS, label: 'Downloads' },
  { section: '3', path: PATHS.SETTINGS, label: 'Settings' },
  { section: '3', path: PATHS.ABOUT, label: 'About' },
];