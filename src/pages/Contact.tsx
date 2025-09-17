import { useNavigate, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Contact = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Função para navegar entre páginas
  const handlePageChange = (page: string) => {
    switch (page) {
      case 'home':
        navigate('/')
        break
      case 'works':
        navigate('/works')
        break
      case 'about':
        navigate('/about')
        break
      case 'contact':
        navigate('/contact')
        break
      default:
        navigate('/')
    }
  }

  // Determinar a página atual baseada na URL
  const getCurrentPage = () => {
    const path = location.pathname
    if (path === '/') return 'home'
    if (path === '/works') return 'works'
    if (path === '/about') return 'about'
    if (path === '/contact') return 'contact'
    return 'home'
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      display: 'flex'
    }}>
      {/* Sidebar com Logo e Menu */}
      <Sidebar 
        currentPage={getCurrentPage()} 
        onPageChange={handlePageChange} 
      />

             {/* Conteúdo principal */}
       <div className="contact-container content-area" style={{
         flex: 1,
         backgroundColor: '#ffffff',
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'flex-start',
         alignItems: 'flex-start',
         padding: '18% 10%'
       }}>

        {/* Informações de contato */}
        <div className="contact-info mobile-text-medium" style={{
          fontSize: '1.1vw',
          color: '#000000',
          textAlign: 'left',
          fontFamily: 'Arial, sans-serif',
          fontWeight: '300',
          lineHeight: '2'
        }}>
          <div className="contact-link" style={{ marginBottom: '1%' }}>
            <strong>E-mail:</strong> <a 
              href="mailto:designedbykenzo@gmail.com" 
              style={{ 
                color: '#000000', 
                textDecoration: 'none',
                borderBottom: '1px solid #000000'
              }}
            >
              designedbykenzo@gmail.com
            </a>
          </div>
          
          <div className="contact-link" style={{ marginBottom: '1%' }}>
            <strong>Behance:</strong> <a 
              href="https://www.behance.net/luankenzodesign" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#000000', 
                textDecoration: 'none',
                borderBottom: '1px solid #000000'
              }}
            >
              behance.net/luankenzodesign
            </a>
          </div>
          
          <div className="contact-link" style={{ marginBottom: '1%' }}>
            <strong>Instagram:</strong> <a 
              href="https://www.instagram.com/designedbykenzo/?hl=pt" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#000000', 
                textDecoration: 'none',
                borderBottom: '1px solid #000000'
              }}
            >
              instagram.com/designedbykenzo
            </a>
          </div>
          
          <div className="contact-link" style={{ marginBottom: '1%' }}>
            <strong>LinkedIn:</strong> <a 
              href="https://www.linkedin.com/in/luankenzocorreiamakiyama/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#000000', 
                textDecoration: 'none',
                borderBottom: '1px solid #000000'
              }}
            >
              linkedin.com/in/luankenzocorreiamakiyama
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
