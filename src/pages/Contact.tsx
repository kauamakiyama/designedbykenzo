import PageShell from '../components/PageShell'

const contacts = [
  {
    label: 'E-mail',
    href: 'mailto:designedbykenzo@gmail.com',
    text: 'designedbykenzo@gmail.com',
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/luankenzodesign',
    text: 'behance.net/luankenzodesign',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/designedbykenzo/?hl=pt',
    text: 'instagram.com/designedbykenzo',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luankenzocorreiamakiyama/',
    text: 'linkedin.com/in/luankenzocorreiamakiyama',
  },
]

const Contact = () => (
  <PageShell contentClassName="contact-container content-area">
    <div className="contact-info mobile-text-medium">
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

export default Contact
