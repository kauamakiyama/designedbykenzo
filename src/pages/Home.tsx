import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  

  // Array de imagens para o carrossel
  const images = [
    '/src/assets/home/att 1 (1).jpg',
    '/src/assets/home/8 - ROSTOS.jpg',
    '/src/assets/home/att 5 .jpg',
    '/src/assets/home/IMG_9597 1 (1).png',
    '/src/assets/home/Skateboard Mockup mlks 2.jpg',
    '/src/assets/home/hn - bag - na medida .jpg',
    '/src/assets/home/hn peitas - na medida.jpg',
    '/src/assets/home/shape - na medida .jpg',
    '/src/assets/home/suzuki peitas - na medida.jpg',
    '/src/assets/home/vinil to vni - na medida.jpg',
    '/src/assets/home/movel thiago .jpg',
    '/src/assets/home/napkin .jpg',
    '/src/assets/home/banco frontal  (1).jpg',
  ];

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [images.length])

  // Fixar página sem scroll e resetar posição
  useEffect(() => {
    // Resetar scroll para o topo
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Fixar página sem scroll
    document.body.classList.add('home-fixed')
    return () => {
      document.body.classList.remove('home-fixed')
    }
  }, [])



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
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Container principal */}
      <div className="main-container" style={{
        display: 'flex',
        flex: 1,
        height: '100vh'
      }}>
        
        {/* Sidebar com Logo e Menu */}
        <Sidebar 
          currentPage={getCurrentPage()} 
          onPageChange={handlePageChange} 
        />

        {/* Carrossel de fotos */}
        <div className="carousel-container content-area" style={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#ffffff', // Fallback de fundo caso as imagens não carreguem
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2%'
        }}>
                     {/* Imagem atual */}
           <img
             src={images[currentImageIndex]}
             alt={`Slide ${currentImageIndex + 1}`}
             className="carousel-image"
             style={{
               width: '100%',
               height: (
                 images[currentImageIndex].includes('IMG_9597 1 (1).png')
               ) ? '75%' : '70%',
               marginRight: '5%',
               maxWidth: '100%',
               maxHeight: '100%',
               objectFit: 'cover',
               objectPosition: 'center',
               transition: 'opacity 0.5s ease-in-out'
             }}
            onError={(e) => {
              // Fallback caso a imagem não carregue
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          
          {/* Indicadores do carrossel */}
          <div className="carousel-indicators" style={{
            position: 'absolute',
            bottom: '2%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '0.8%'
          }}>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className="carousel-indicator"
                style={{
                  width: '1.2vw',
                  height: '1.2vw',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: index === currentImageIndex ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              />
            ))}
          </div>


        </div>
      </div>
    </div>
  )
}

export default Home
