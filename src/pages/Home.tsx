import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  
  // Array de imagens para o carrossel (ImgBB)
  const images = [
    "https://i.ibb.co/CKCNh7kz/8-ROSTOS.jpg",
    "https://i.ibb.co/NHRS8ck/att-1-1.jpg",
    "https://i.ibb.co/0pQY604S/att-5.jpg",
    "https://i.ibb.co/zV0GmHSf/banco-frontal-1.jpg",
    "https://i.ibb.co/YBjRfQ5k/hn-bag-na-medida.jpg",
    "https://i.ibb.co/Z1wkCJmM/hn-peitas-na-medida.jpg",
    "https://i.ibb.co/LX9sYkNg/IMG-9597-1-1.png",
    "https://i.ibb.co/SDz64vTy/movel-thiago.jpg",
    "https://i.ibb.co/1xv9j7W/napkin.jpg",
    "https://i.ibb.co/TqNkdt0j/shape-na-medida.jpg",
    "https://i.ibb.co/G38DJzC0/Skateboard-Mockup-mlks-2.jpg",
    "https://i.ibb.co/Mvcw9Qj/suzuki-peitas-na-medida.jpg",
    "https://i.ibb.co/VpH4hQdg/vinil-to-vni-na-medida.jpg",
  ];

  // Pré-carregar todas as imagens
  useEffect(() => {
    let loadedCount = 0
    const totalImages = images.length

    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image()
        img.onload = () => {
          loadedCount++
          if (loadedCount === totalImages) {
            setImagesLoaded(true)
          }
        }
        img.onerror = () => {
          loadedCount++
          if (loadedCount === totalImages) {
            setImagesLoaded(true)
          }
        }
        img.src = src
      })
    }

    preloadImages()
  }, [images])

  // Auto-play do carrossel (só inicia quando todas as imagens estão carregadas)
  useEffect(() => {
    if (!imagesLoaded) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [images.length, imagesLoaded])

  // Fixar página sem scroll e resetar posição
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
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
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2%'
        }}>
          {/* Imagem atual */}
          {imagesLoaded && (
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              className="carousel-image"
              style={{
                width: '100%',
                height: (
                  images[currentImageIndex].includes("IMG-9597")
                ) ? '75%' : '70%',
                marginRight: '5%',
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'opacity 0.5s ease-in-out'
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          )}
          
          {/* Indicadores do carrossel */}
          {imagesLoaded && (
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
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
