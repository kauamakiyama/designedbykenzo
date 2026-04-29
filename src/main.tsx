import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Works from './pages/Works'
import About from './pages/About'
import Contact from './pages/Contact'
import ProjectDetailPage from './pages/ProjectDetailPage'
import { projects } from './data/projects'
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
  ...projects
    .filter((project) => project.legacyPath)
    .map((project) => ({
      path: project.legacyPath,
      element: <Navigate to={`/works/${project.slug}`} replace />,
    })),
  {
    path: '/works/:slug',
    element: <ProjectDetailPage/>,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
