import { useNavigate, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const VentoDetails = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Array de imagens do projeto VENTO
  const projectImages = [
    {
      src: new URL('../assets/details/vento/video_vento.mp4', import.meta.url).href,
      alt: 'VENTO - Video',
      type: 'video'
    },
    {
      src: new URL('../assets/details/vento/01.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 1'
    },
    {
      src: new URL('../assets/details/vento/02.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 2'
    },
    {
      src: new URL('../assets/details/vento/03.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 3'
    },
    {
      src: new URL('../assets/details/vento/04.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 4'
    },
    {
      src: new URL('../assets/details/vento/05.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 5'
    },
    {
      src: new URL('../assets/details/vento/06.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 6'
    },
    {
      src: new URL('../assets/details/vento/07.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 7'
    },
    {
      src: new URL('../assets/details/vento/08.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 8'
    },
    {
      src: new URL('../assets/details/vento/09.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 9'
    },
    {
      src: new URL('../assets/details/vento/10.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 10'
    },
    {
      src: new URL('../assets/details/vento/11.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 11'
    },
    {
      src: new URL('../assets/details/vento/12.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 12'
    },
    {
      src: new URL('../assets/details/vento/13.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 13'
    },
    {
      src: new URL('../assets/details/vento/14.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 14'
    },
    {
      src: new URL('../assets/details/vento/15.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 15'
    },
    {
      src: new URL('../assets/details/vento/16.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 16'
    },
    {
      src: new URL('../assets/details/vento/17.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 17'
    },
    {
      src: new URL('../assets/details/vento/18.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 18'
    },
    {
      src: new URL('../assets/details/vento/19.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 19'
    },
    {
      src: new URL('../assets/details/vento/20.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 20'
    },
    {
      src: new URL('../assets/details/vento/21.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 21'
    },
    {
      src: new URL('../assets/details/vento/22.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 22'
    },
    {
      src: new URL('../assets/details/vento/23.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 23'
    },
    {
      src: new URL('../assets/details/vento/24.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 24'
    },
    {
      src: new URL('../assets/details/vento/25.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 25'
    },
    {
      src: new URL('../assets/details/vento/26.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 26'
    },
    {
      src: new URL('../assets/details/vento/27.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 27'
    },
    {
      src: new URL('../assets/details/vento/28.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 28'
    },
    {
      src: new URL('../assets/details/vento/29.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 29'
    },
    {
      src: new URL('../assets/details/vento/30.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 30'
    },
    {
      src: new URL('../assets/details/vento/31.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 31'
    },
    {
      src: new URL('../assets/details/vento/32.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 32'
    },
    {
      src: new URL('../assets/details/vento/33.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 33'
    },
    {
      src: new URL('../assets/details/vento/34.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 34'
    },
    {
      src: new URL('../assets/details/vento/35.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 35'
    },
    {
      src: new URL('../assets/details/vento/36.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 36'
    },
    {
      src: new URL('../assets/details/vento/37.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 37'
    },
    {
      src: new URL('../assets/details/vento/38.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 38'
    },
    {
      src: new URL('../assets/details/vento/39.jpg', import.meta.url).href,
      alt: 'VENTO - Imagem 39'
    }
  ]

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
          VENTO - 2024
        </div>

        {/* Galeria de imagens do projeto */}
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '2%'
        }}>
          {/* Video */}
          <div style={{
            width: '100%',
            marginBottom: '2%'
          }}>
            <video
              controls
              style={{
                width: '100%',
                height: '60vh',
                maxWidth: '100%'
              }}
            >
              <source src={projectImages[0].src} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>

          {/* Texto explicativo do projeto */}
          <div style={{
            width: '100%',
            marginBottom: '4%'
          }}>
            <div className="details-text" style={{
              fontSize: '1vw',
              color: '#666666',
              textAlign: 'left',
              lineHeight: '1.8',
              fontFamily: 'Arial, sans-serif',
              fontWeight: '300',
              fontStyle: 'italic'
            }}>
              <p style={{ marginBottom: '2%' }}>
                VENTO goes wherever you do, bringing comfort and freedom with its functional design.
              </p>
              <p style={{ marginBottom: '2%' }}>
                Lightweight and manually inflatable, it shapes itself using the surrounding air—no pumps or tools needed. Designed for parks, beaches, and trails, it also fits seamlessly into the lifestyle of urban explorers and outdoor-loving families.
              </p>
              <p style={{ marginBottom: '2%' }}>
                More than just a comfy seat, VENTO blends practicality and style, perfect for those who value versatility and modern design in everyday life. Use it however you want. Stay comfortable indoors and out. Your moments of rest cannot be without the VENTO.
              </p>
            </div>
          </div>

          {/* Imagens sequenciais */}
          {projectImages.slice(1).map((image, index) => (
            <div key={index} style={{
              width: '100%',
              marginBottom: '2%'
            }}>
              <div style={{
                width: '100%'
              }}>
                <img 
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    transform: 'rotate(0deg)',
                    imageOrientation: 'from-image'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default VentoDetails
