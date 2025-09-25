import { useNavigate, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const VentoDetails = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Array de mídia do projeto VENTO (vídeo + imagens)
  const projectMedia = [
    { src: 'https://youtu.be/6Ha5yfTDat4', alt: 'VENTO - Vídeo', type: 'youtube' },
    { src: 'https://i.ibb.co/Fq5pFW9Q/02.jpg', alt: 'VENTO - Imagem 2' },
    { src: 'https://i.ibb.co/srNPcgJ/03.jpg', alt: 'VENTO - Imagem 3' },
    { src: 'https://i.ibb.co/zV6kHdbP/04.jpg', alt: 'VENTO - Imagem 4' },
    { src: 'https://i.ibb.co/Wv2Y1nj1/05.jpg', alt: 'VENTO - Imagem 5' },
    { src: 'https://i.ibb.co/KzfGyjMq/06.jpg', alt: 'VENTO - Imagem 6' },
    { src: 'https://i.ibb.co/yFXNh10V/07.jpg', alt: 'VENTO - Imagem 7' },
    { src: 'https://i.ibb.co/Hfn3s392/08.jpg', alt: 'VENTO - Imagem 8' },
    { src: 'https://i.ibb.co/fGpJyRYZ/09.jpg', alt: 'VENTO - Imagem 9' },
    { src: 'https://i.ibb.co/Kj11NYdT/10.jpg', alt: 'VENTO - Imagem 10' },
    { src: 'https://i.ibb.co/tPvnHGYg/11.jpg', alt: 'VENTO - Imagem 11' },
    { src: 'https://i.ibb.co/rR4STst8/12.jpg', alt: 'VENTO - Imagem 12' },
    { src: 'https://i.ibb.co/zTvbndWP/13.jpg', alt: 'VENTO - Imagem 13' },
    { src: 'https://i.ibb.co/h1dV5cgp/14.jpg', alt: 'VENTO - Imagem 14' },
    { src: 'https://i.ibb.co/XxPVzGYT/15.jpg', alt: 'VENTO - Imagem 15' },
    { src: 'https://i.ibb.co/RkP76Q8Z/16.jpg', alt: 'VENTO - Imagem 16' },
    { src: 'https://i.ibb.co/d0TYzRrL/17.jpg', alt: 'VENTO - Imagem 17' },
    { src: 'https://i.ibb.co/LdqKv2tP/18.jpg', alt: 'VENTO - Imagem 18' },
    { src: 'https://i.ibb.co/kgsdX8Vc/19.jpg', alt: 'VENTO - Imagem 19' },
    { src: 'https://i.ibb.co/r26phFHD/20.jpg', alt: 'VENTO - Imagem 20' },
    { src: 'https://i.ibb.co/N26rMfdy/21.jpg', alt: 'VENTO - Imagem 21' },
    { src: 'https://i.ibb.co/JW1MqYtJ/22.jpg', alt: 'VENTO - Imagem 22' },
    { src: 'https://i.ibb.co/CpKBp6RR/23.jpg', alt: 'VENTO - Imagem 23' },
    { src: 'https://i.ibb.co/FqLRVY8p/24.jpg', alt: 'VENTO - Imagem 24' },
    { src: 'https://i.ibb.co/QjrVsckn/25.jpg', alt: 'VENTO - Imagem 25' },
    { src: 'https://i.ibb.co/4nHLxmnj/26.jpg', alt: 'VENTO - Imagem 26' },
    { src: 'https://i.ibb.co/zH4LmHzd/27.jpg', alt: 'VENTO - Imagem 27' },
    { src: 'https://i.ibb.co/3xzdWcN/28.jpg', alt: 'VENTO - Imagem 28' },
    { src: 'https://i.ibb.co/JjMvrQJK/29.jpg', alt: 'VENTO - Imagem 29' },
    { src: 'https://i.ibb.co/67vBD8jh/30.jpg', alt: 'VENTO - Imagem 30' },
    { src: 'https://i.ibb.co/GQCxmmhr/31.jpg', alt: 'VENTO - Imagem 31' },
    { src: 'https://i.ibb.co/k22JVpZn/32.jpg', alt: 'VENTO - Imagem 32' },
    { src: 'https://i.ibb.co/N2Xdc8xG/33.jpg', alt: 'VENTO - Imagem 33' },
    { src: 'https://i.ibb.co/0RzWNb0y/34.jpg', alt: 'VENTO - Imagem 34' },
    { src: 'https://i.ibb.co/HL5V7LwZ/35.jpg', alt: 'VENTO - Imagem 35' },
    { src: 'https://i.ibb.co/L356dc1/36.jpg', alt: 'VENTO - Imagem 36' },
    { src: 'https://i.ibb.co/5W3q93YH/37.jpg', alt: 'VENTO - Imagem 37' },
    { src: 'https://i.ibb.co/0VVT2p0k/38.jpg', alt: 'VENTO - Imagem 38' },
    { src: 'https://i.ibb.co/qMRGBjj1/39.jpg', alt: 'VENTO - Imagem 39' }
  ]

  const handlePageChange = (page: string) => {
    switch (page) {
      case 'home': navigate('/'); break
      case 'works': navigate('/works'); break
      case 'about': navigate('/about'); break
      case 'contact': navigate('/contact'); break
      default: navigate('/')
    }
  }

  const getCurrentPage = () => {
    const path = location.pathname
    if (path === '/') return 'home'
    if (path === '/works') return 'works'
    if (path === '/about') return 'about'
    if (path === '/contact') return 'contact'
    return 'home'
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar currentPage={getCurrentPage()} onPageChange={handlePageChange} />

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
        {/* Título */}
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

        {/* Galeria */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2%' }}>
          {projectMedia.map((item, index) => (
            <div key={index} style={{ width: '100%', marginBottom: '2%' }}>
              {item.type === 'youtube' ? (
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${item.src.split('v=')[1] || item.src.split('/').pop()}`}
                    title={item.alt}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  ></iframe>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VentoDetails
