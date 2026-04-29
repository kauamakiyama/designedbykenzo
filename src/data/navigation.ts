export type PageId = 'home' | 'works' | 'about' | 'contact'

export interface NavigationItem {
  id: PageId
  label: string
  path: string
  showInMenu: boolean
}

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', path: '/', showInMenu: false },
  { id: 'works', label: 'Works', path: '/works', showInMenu: true },
  { id: 'about', label: 'About Me', path: '/about', showInMenu: true },
  { id: 'contact', label: 'Contact', path: '/contact', showInMenu: true },
]

export const menuItems = navigationItems.filter((item) => item.showInMenu)

export const getPathForPage = (pageId: PageId) => (
  navigationItems.find((item) => item.id === pageId)?.path ?? '/'
)

export const getCurrentPage = (pathname: string): PageId => {
  if (pathname === '/') return 'home'
  if (pathname.startsWith('/works')) return 'works'
  if (pathname.startsWith('/about')) return 'about'
  if (pathname.startsWith('/contact')) return 'contact'
  return 'home'
}
