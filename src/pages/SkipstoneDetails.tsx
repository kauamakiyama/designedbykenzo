import { useNavigate, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const SkipstoneDetails = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Array de imagens do projeto SKIPSTONE
  const projectImages = [
    {
      src: '/src/assets/details/skipstone/3 (2).png',
      alt: 'SKIPSTONE - Render 3 (2)'
    },
    {
      src: '/src/assets/details/skipstone/4 (2).png',
      alt: 'SKIPSTONE - Render 4 (2)'
    },
    {
      src: '/src/assets/details/skipstone/icon skip_.png',
      alt: 'SKIPSTONE - Icon'
    },
    {
      src: '/src/assets/details/skipstone/skip - animacao tela .jpg',
      alt: 'SKIPSTONE - Animação de Tela'
    },
    {
      src: '/src/assets/details/skipstone/3.png',
      alt: 'SKIPSTONE - Render 3'
    },
    {
      src: '/src/assets/details/skipstone/4 (1).png',
      alt: 'SKIPSTONE - Render 4'
    },
    {
      src: '/src/assets/details/skipstone/8 - ROSTOS.jpg',
      alt: 'SKIPSTONE - Rostos'
    },
    {
      src: '/src/assets/details/skipstone/skip 2 - animacao tela .jpg',
      alt: 'SKIPSTONE - Animação de Tela 2'
    },
    {
      src: '/src/assets/details/skipstone/3 posts feed 3  (2).png',
      alt: 'SKIPSTONE - Posts Feed'
    },
    {
      src: '/src/assets/details/skipstone/9 - grid .jpg',
      alt: 'SKIPSTONE - Grid'
    },
    // Novas imagens adicionadas
    {
      src: '/src/assets/details/skipstone/type.jpg',
      alt: 'SKIPSTONE - Type'
    },
    {
      src: '/src/assets/works/storys mockup (2).png',
      alt: 'SKIPSTONE - Stories Mockup'
    }
  ]

  // Modelo 3D do Sketchfab
  const sketchfabModel = {
    id: 'c5e6a104c60f40778be42ad9e093d246',
    title: 'SKIPSTONE 3D Model'
  }

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
      <div className="details-content" style={{
        flex: 1,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '14% 5%',
        overflowY: 'auto'
      }}>
        {/* Título do projeto */}
        <div className="details-title" style={{
          fontSize: '4vw',
          fontWeight: 'bold',
          color: '#000000',
          textTransform: 'uppercase',
          textAlign: 'left',
          marginBottom: '5%',
          fontFamily: 'Arial, sans-serif'
        }}>
          SKIPSTONE - 2025
        </div>

        {/* Galeria de imagens do projeto */}
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '2%'
        }}>
          {/* Modelo 3D do Sketchfab */}
          <div style={{
            width: '100%',
            marginBottom: '2%'
          }}>
            <div style={{
              width: '100%',
              height: '60vh',
              backgroundColor: '#f5f5f5',
              borderRadius: '0.5vw',
              overflow: 'hidden'
            }}>
              <iframe
                title={sketchfabModel.title}
                frameBorder="0"
                allowFullScreen
                src={`https://sketchfab.com/models/${sketchfabModel.id}/embed?autostart=0&ui_theme=dark`}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
              />
            </div>
          </div>

           {/* Texto explicativo do projeto */}
           <div style={{
             width: '100%',
             marginBottom: '2%'
           }}>
            {/* Texto em Inglês */}
            <div className="details-text" style={{
              fontSize: '1vw',
              color: '#666666',
              textAlign: 'left',
              lineHeight: '1.8',
              fontFamily: 'Arial, sans-serif',
              fontWeight: '300',
              fontStyle: 'italic'
            }}>
              <p style={{ marginBottom: '2%', fontWeight: '500' }}>
                What you are seeing is not a product. It's a mission.
              </p>
              <p style={{ marginBottom: '2%' }}>
                SKIPSTONE is a conceptual eyewear project developed through a creative collaboration between designers.
              </p>
              <p style={{ marginBottom: '2%' }}>
                Inspired by the intersection between three universes — the tactical, the sporting and the urban — the project was born from the desire to explore a visual language that combines functionality, presence and implications.
              </p>
              <p style={{ marginBottom: '2%' }}>
                From the robust aesthetics of tactical equipment came structural decisions and visual narrowness. From the sports world, we absorb lightness, ergonomics and a sense of performance. And from the urban scene, we extract the direct style, the language of techwear and the adaptability of everyday life.
              </p>
              <p style={{ marginBottom: '2%' }}>
                The result is glasses that reflect resistance, movement and expression. An object that molds itself to the environment — just like a stone thrown into water, which bounces, cuts and moves forward.
              </p>
            </div>
          </div>

          {projectImages.map((image, index) => (
            <div key={index} style={{
              width: '100%',
              marginBottom: '2%'
            }}>
              {/* Imagem */}
              <div style={{
                width: '100%'
              }}>
                <img 
                  src={image.src}
                  alt={image.alt}
                   style={{
                     width: image.alt.includes('Posts Feed') ? '108%' : image.alt.includes('Render 4 (2)') ? '105%' : '100%',
                     height: 'auto',
                     maxWidth: image.alt.includes('Posts Feed') ? '110%' : image.alt.includes('Render 4 (2)') ? '107%' : '100%',
                     objectFit: 'contain',
                     marginLeft: image.alt.includes('Posts Feed') ? '-4%' : image.alt.includes('Render 4 (2)') ? '-2.5%' : '0'
                   }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}

          {/* Créditos */}
          <div style={{
            width: '100%',
            marginTop: '6%',
            paddingTop: '4%',
            borderTop: '1px solid #e0e0e0'
          }}>
            <div className="details-credits" style={{
              fontSize: '0.9vw',
              color: '#666666',
              textAlign: 'left',
              lineHeight: '1.6',
              fontFamily: 'Arial, sans-serif',
              fontWeight: '300'
            }}>
              <p style={{ marginBottom: '1%' }}>©2025</p>
              <p style={{ marginBottom: '1%' }}>DESIGN & STRATEGY: LUAN KENZO E PEDRO MILANI</p>
              <p style={{ marginBottom: '1%' }}>3D DESIGN: PEDRO MILANI</p>
              <p style={{ marginBottom: '1%' }}>ANIMATION / VIDEO: MURILO SANTOS E KAIQUE BISCARO</p>
              <p style={{ marginBottom: '1%' }}>SOUND DESIGN: LEONARDO BRESSAN</p>
              <p style={{ marginBottom: '1%' }}>CONTACT: DESIGNEDBYKENZO@GMAIL.COM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkipstoneDetails
