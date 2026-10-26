import { useLayoutEffect, useRef } from 'react'
import PageShell from '../components/PageShell'

const contacts = [
  {
    label: 'E-mail',
    href: 'mailto:designedbykenzo@gmail.com',
    text: 'designedbykenzo@gmail.com',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/naulkenzo/',
    text: 'instagram.com/naulkenzo',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luankenzocorreiamakiyama/',
    text: 'linkedin.com/in/luankenzocorreiamakiyama',
  },
]

// Lines the first contact up with the CONTACT item of the sidebar menu.
// The menu position depends on the viewport height, so it is measured at runtime.
const useAlignWithMenu = () => {
  const infoRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const align = () => {
      const info = infoRef.current
      const menuItem = document.querySelector<HTMLElement>('.sidebar-menu .nav-item.active')
      const firstLine = info?.firstElementChild
      if (!info || !firstLine) return

      info.style.marginTop = ''
      // Sidebar is hidden on mobile: keep the default layout
      if (!menuItem || menuItem.offsetParent === null) return

      const menuRect = menuItem.getBoundingClientRect()
      const lineRect = firstLine.getBoundingClientRect()
      const offset = (menuRect.top + menuRect.height / 2) - (lineRect.top + lineRect.height / 2)
      info.style.marginTop = `${Math.max(0, offset)}px`
    }

    align()
    window.addEventListener('resize', align)
    return () => window.removeEventListener('resize', align)
  }, [])

  return infoRef
}

const Contact = () => {
  const infoRef = useAlignWithMenu()

  return (
    <PageShell contentClassName="contact-container content-area">
      <div ref={infoRef} className="contact-info mobile-text-medium">
        {contacts.map((contact) => (
          <div key={contact.label} className="contact-link">
            <strong>{contact.label}:</strong>{' '}
            <a
              href={contact.href}
              target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            >
              {contact.text}
            </a>
          </div>
        ))}
      </div>
    </PageShell>
  )
}

export default Contact
