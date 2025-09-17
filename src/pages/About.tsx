

import { useNavigate, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const About = () => {
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
       <div className="about-container content-area" style={{
         flex: 1,
         backgroundColor: '#ffffff',
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'flex-start',
         alignItems: 'flex-start',
         padding: '15% 10%'
       }}>
                 {/* Título "HELLO." */}
         <div className="mobile-text-large" style={{
           fontSize: '9vw',
           fontWeight: 'bold',
           color: '#000000',
           textTransform: 'uppercase',
           textAlign: 'left',
           fontFamily: 'Arial, sans-serif'
         }}>
           HELLO.
        </div>

                 {/* Label EN */}
         <div style={{
           fontSize: '0.8vw',
           color: '#999999',
           textAlign: 'left',
           maxWidth: '80%',
           fontFamily: 'Arial, sans-serif',
           fontWeight: '400',
           marginBottom: '1%',
           textTransform: 'uppercase'
         }}>
           [EN]
         </div>

         {/* Primeiro parágrafo (EN) */}
         <div className="details-text" style={{
           fontSize: '1vw',
           color: '#666666',
           textAlign: 'left',
           maxWidth: '80%',
           lineHeight: '1.8',
           fontFamily: 'Arial, sans-serif',
           fontWeight: '300',
           fontStyle: 'italic',
           marginBottom: '2%'
         }}>
           I'm Luan Kenzo, a designer based in São Paulo.
         </div>

        {/* Segundo parágrafo (EN) */}
        <div className="details-text" style={{
          fontSize: '1vw',
          color: '#666666',
          textAlign: 'left',
          maxWidth: '80%',
          lineHeight: '1.8',
          fontFamily: 'Arial, sans-serif',
          fontWeight: '300',
          fontStyle: 'italic',
          marginBottom: '2%'
        }}>
          My practice moves through everything humans can touch and connect with — from objects, furniture, and everyday utensils to accessories, clothing, and spatial experiences.
        </div>

        {/* Terceiro parágrafo (EN) */}
        <div className="details-text" style={{
          fontSize: '1vw',
          color: '#666666',
          textAlign: 'left',
          maxWidth: '80%',
          lineHeight: '1.8',
          fontFamily: 'Arial, sans-serif',
          fontWeight: '300',
          fontStyle: 'italic',
          marginBottom: '2%'
        }}>
          I believe design is about creating tangible solutions that live in the world: sometimes crafted by hand in the workshop, other times prototyped digitally or explored through materials and forms.
        </div>

        {/* Quarto parágrafo (EN) */}
        <div className="details-text" style={{
          fontSize: '1vw',
          color: '#666666',
          textAlign: 'left',
          maxWidth: '80%',
          lineHeight: '1.8',
          fontFamily: 'Arial, sans-serif',
          fontWeight: '300',
          fontStyle: 'italic',
          marginBottom: '2%'
        }}>
          I'm always open to collaborations, partnerships, and new challenges that push ideas further and expand the ways we experience daily life.
        </div>

        {/* Label PT */}
        <div style={{
          fontSize: '0.8vw',
          color: '#999999',
          textAlign: 'left',
          maxWidth: '80%',
          fontFamily: 'Arial, sans-serif',
          fontWeight: '400',
          marginBottom: '1%',
          marginTop: '3%',
          textTransform: 'uppercase'
        }}>
          [PT]
        </div>

        {/* Primeiro parágrafo (PT-BR) */}
        <div className="details-text" style={{
          fontSize: '1vw',
          color: '#666666',
          textAlign: 'left',
          maxWidth: '80%',
          lineHeight: '1.8',
          fontFamily: 'Arial, sans-serif',
          fontWeight: '300',
          fontStyle: 'italic',
          marginBottom: '2%'
        }}>
          Sou Luan Kenzo, designer em São Paulo.
        </div>

        {/* Segundo parágrafo (PT-BR) */}
        <div className="details-text" style={{
          fontSize: '1vw',
          color: '#666666',
          textAlign: 'left',
          maxWidth: '80%',
          lineHeight: '1.8',
          fontFamily: 'Arial, sans-serif',
          fontWeight: '300',
          fontStyle: 'italic',
          marginBottom: '2%'
        }}>
          Minha prática percorre tudo aquilo que o humano pode tocar e se relacionar — de objetos, mobiliário e utensílios do dia a dia a acessórios, roupas e experiências espaciais.
        </div>

        {/* Terceiro parágrafo (PT-BR) */}
        <div className="details-text" style={{
          fontSize: '1vw',
          color: '#666666',
          textAlign: 'left',
          maxWidth: '80%',
          lineHeight: '1.8',
          fontFamily: 'Arial, sans-serif',
          fontWeight: '300',
          fontStyle: 'italic',
          marginBottom: '2%'
        }}>
          Acredito que o design é sobre criar soluções tangíveis que habitam o mundo: ora feitas à mão na oficina, ora prototipadas digitalmente ou exploradas por meio de materiais e formas.
        </div>

        {/* Quarto parágrafo (PT-BR) */}
        <div className="details-text" style={{
          fontSize: '1vw',
          color: '#666666',
          textAlign: 'left',
          maxWidth: '80%',
          lineHeight: '1.8',
          fontFamily: 'Arial, sans-serif',
          fontWeight: '300',
          fontStyle: 'italic',
          marginBottom: '2%'
        }}>
          Estou sempre aberto a colaborações, parcerias e novos desafios que levem ideias além e ampliem as maneiras como vivemos o cotidiano.
        </div>

        {/* Imagem Luan abaixo de todos os textos */}
        <div style={{
          width: '100%',
          marginTop: '10%'
        }}>
          <img
            src={new URL('../assets/about/luan.png', import.meta.url).href}
            alt="Luan Kenzo"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
              objectFit: 'contain'
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default About
