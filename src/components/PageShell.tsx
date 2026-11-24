import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'

interface PageShellProps {
  children: ReactNode
  className?: string
  contentClassName?: string
  // Element id to show when the page opens (e.g. "works" for /works); otherwise the page opens at the top
  scrollTargetId?: string
}

const PageShell = ({
  children,
  className = '',
  contentClassName = '',
  scrollTargetId,
}: PageShellProps) => {
  const { pathname } = useLocation()

  useEffect(() => {
    const target = scrollTargetId ? document.getElementById(scrollTargetId) : null
    if (target) {
      target.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, scrollTargetId])

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
