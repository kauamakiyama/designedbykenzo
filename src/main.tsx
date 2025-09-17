import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Works from './pages/Works'
import About from './pages/About'
import Contact from './pages/Contact'
import SkipstoneDetails from './pages/SkipstoneDetails'
import TncoDetails from './pages/TncoDetails'
import VelaDetails from './pages/VelaDetails'
import VentoDetails from './pages/VentoDetails'
import CadeiraDetails from './pages/CadeiraDetails'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/works',
    element: <Works/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/contact',
    element: <Contact/>,
  },
  {
    path: '/works/skipstone-details',
    element: <SkipstoneDetails/>,
  },
  {
    path: '/works/tnco-details',
    element: <TncoDetails/>,
  },
  {
    path: '/works/vela-details',
    element: <VelaDetails/>,
  },
  {
    path: '/works/vento-details',
    element: <VentoDetails/>,
  },
  {
    path: '/works/cadeira-details',
    element: <CadeiraDetails/>,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
