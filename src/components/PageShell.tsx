import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'

interface PageShellProps {
  children: ReactNode
  className?: string
  contentClassName?: string
}

const PageShell = ({
  children,
  className = '',
  contentClassName = '',
}: PageShellProps) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={`page-shell ${className}`.trim()}>
      <Sidebar />
      <main className={`page-content ${contentClassName}`.trim()}>
        {children}
      </main>
    </div>
  )
}

export default PageShell
