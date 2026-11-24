export type PageId = 'home' | 'works' | 'products' | 'about' | 'contact'

export interface NavigationItem {
  id: PageId
  label: string
  path: string
  showInMenu: boolean
}

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', path: '/', showInMenu: false },
  // Works lives on the home page, below the opening screen
  { id: 'works', label: 'Works', path: '/works', showInMenu: true },
  { id: 'products', label: 'Products', path: '/products', showInMenu: true },
  // About and Contact are one page
  { id: 'about', label: 'Information', path: '/about', showInMenu: true },
  { id: 'contact', label: 'Contact', path: '/contact', showInMenu: false },
]

export const menuItems = navigationItems.filter((item) => item.showInMenu)

export const getPathForPage = (pageId: PageId) => (
  navigationItems.find((item) => item.id === pageId)?.path ?? '/'
)

export const getCurrentPage = (pathname: string): PageId => {
  if (pathname === '/') return 'home'
  if (pathname.startsWith('/works')) return 'works'
  if (pathname.startsWith('/products')) return 'products'
  if (pathname.startsWith('/about')) return 'about'
  if (pathname.startsWith('/contact')) return 'about'
  return 'home'
}
