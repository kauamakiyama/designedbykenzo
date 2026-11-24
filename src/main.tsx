import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ProjectDetailPage from './pages/ProjectDetailPage'
import Products from './pages/Products'
import ProductDetailPage from './pages/ProductDetailPage'
import { projects } from './data/projects'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/works',
    element: <Home/>,
  },
  {
    path: '/products',
    element: <Products/>,
  },
  {
    path: '/products/:slug',
    element: <ProductDetailPage/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/contact',
    element: <About/>,
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
