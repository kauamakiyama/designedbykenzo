import type { ReactNode } from 'react'
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
}: PageShellProps) => (
  <div className={`page-shell ${className}`.trim()}>
    <Sidebar />
    <main className={`page-content ${contentClassName}`.trim()}>
      {children}
    </main>
  </div>
)

export default PageShell
