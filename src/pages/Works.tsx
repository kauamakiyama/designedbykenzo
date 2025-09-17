
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Works = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  // Array de imagens da pasta works com descrições
  const images = [
    {
      src: '/src/assets/works/storys mockup (2).png',
      name: 'SKIPSTONE / 2025',
      // year: '2024'
    },
    {
      src: '/src/assets/works/works.jpg',
      name: 'TNCO / 2023',
      // year: '2023'
    },
    {
      src: '/src/assets/works/Full Model VX 3.png',
      name: 'VELA / 2023',
      // year: '2023'
    },
    {
      src: '/src/assets/works/capa site - vento.png',
      name: 'VENTO / 2024',
      // year: '2024'
    },
    {
      src: '/src/assets/works/cadeira.jpg',
      name: 'CADEIRA BAIXA / 2023',
      // year: '2023'
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

      {/* Container de imagens com posicionamento absoluto */}
      <div className="works-grid content-area" style={{
        flex: 1,
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'visible',
        minHeight: '100vh'
      }}>
        {/* oculos */}
        <div
          className="work-item"
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '50%',
            cursor: 'pointer'
          }}
          onMouseEnter={() => setHoveredImage(0)}
          onMouseLeave={() => setHoveredImage(null)}
          onClick={() => navigate('/works/skipstone-details')}
        >
          <img 
            src={images[0].src}
            alt="Work 1"
            className="work-image"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '100%',
              objectFit: 'contain'
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Overlay com descrição */}
          {hoveredImage === 0 && (
            <div className="work-overlay" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.2vw',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '2%'
            }}>
                             <div>{images[0].name}</div>
            </div>
          )}
        </div>

        {/* mercado */}
        <div
          className="work-item"
          style={{
            position: 'absolute',
            top: '98%',
            right: '8%',
            width: '35%',
            cursor: 'pointer'
          }}
          onMouseEnter={() => setHoveredImage(1)}
          onMouseLeave={() => setHoveredImage(null)}
          onClick={() => navigate('/works/tnco-details')}
        >
          <img 
            src={images[1].src}
            alt="Work 2"
            className="work-image"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '100%',
              objectFit: 'contain'
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Overlay com descrição */}
          {hoveredImage === 1 && (
            <div className="work-overlay" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.2vw',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '2%'
            }}>
                             <div>{images[1].name}</div>
            </div>
          )}
        </div>

        {/* bike */}
        <div
          className="work-item"
          style={{
            position: 'absolute',
            top: '52%',
            left: '39%',
            width: '53%',
            cursor: 'pointer'
          }}
          onMouseEnter={() => setHoveredImage(2)}
          onMouseLeave={() => setHoveredImage(null)}
          onClick={() => navigate('/works/vela-details')}
        >
          <img 
            src={images[2].src}
            alt="Work 3"
            className="work-image"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Overlay com descrição */}
          {hoveredImage === 2 && (
            <div className="work-overlay" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.2vw',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '2%'
            }}>
                             <div>{images[2].name}</div>
            </div>
          )}
        </div>

        {/* vento */}
        <div
          className="work-item"
          style={{
            position: 'absolute',
            top: '8.5%',
            right: '7%',
            width: '37%',
            cursor: 'pointer'
          }}
          onMouseEnter={() => setHoveredImage(3)}
          onMouseLeave={() => setHoveredImage(null)}
          onClick={() => navigate('/works/vento-details')}
        >
          <img 
            src={images[3].src}
            alt="Work 4"
            className="work-image"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '100%',
              objectFit: 'contain'
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Overlay com descrição */}
          {hoveredImage === 3 && (
            <div className="work-overlay" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.2vw',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '2%'
            }}>
                             <div>{images[3].name}</div>
            </div>
          )}
        </div>

        {/* cadeira */}
        <div
          className="work-item"
          style={{
            position: 'absolute',
            marginTop: '47%',
            right: '65%',
            width: '30%',
            cursor: 'pointer'
          }}
          onMouseEnter={() => setHoveredImage(4)}
          onMouseLeave={() => setHoveredImage(null)}
          onClick={() => navigate('/works/cadeira-details')}
        >
          <img 
            src={images[4].src}
            alt="Work 5"
            className="work-image"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '100%',
              objectFit: 'contain'
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Overlay com descrição */}
          {hoveredImage === 4 && (
            <div className="work-overlay" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.2vw',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '2%'
            }}>
                             <div>{images[4].name}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Works
