import { useNavigate, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const SkipstoneDetails = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Array de mídia (imagens + vídeos misturados na ordem correta)
  const projectMedia = [
    { src: 'https://i.ibb.co/ZRFbcjht/3.png', alt: 'SKIPSTONE - Render 3 (2)' },
    { src: 'https://i.ibb.co/k2tk15vy/4.png', alt: 'SKIPSTONE - Render 4 (2)' },
    { src: 'https://i.ibb.co/CKCNh7kz/8-ROSTOS.jpg', alt: 'SKIPSTONE - Rostos' },
    { src: 'https://i.ibb.co/Y74Wz7DG/skip-animacao-tela.jpg', alt: 'SKIPSTONE - Animação de Tela' },
    { src: 'https://i.ibb.co/8LzLS1L8/skip-2-animacao-tela.jpg', alt: 'SKIPSTONE - Animação de Tela 2' },
    { src: 'https://res.cloudinary.com/dewjs94yc/video/upload/v1758760247/reel_murilo_efsobs.mov', alt: 'Vídeo Murilo' },
    { src: 'https://i.ibb.co/CKn60rzv/9-grid.jpg', alt: 'SKIPSTONE - Grid' },
    { src: 'https://res.cloudinary.com/dewjs94yc/image/upload/v1758761540/rock_gif_2_ldiuge.gif', alt: 'Vídeo Rock' },
    { src: 'https://i.ibb.co/v6Vf2t1Y/9-PALETA-v2.jpg', alt: 'SKIPSTONE - Paleta' },
    { src: 'https://i.ibb.co/VYn72nK0/type.jpg', alt: 'SKIPSTONE - Type' },
    { src: 'https://i.ibb.co/qMC3XCgP/novas-att-3-img-jpg.jpg', alt: 'SKIPSTONE - Nova Imagem' },
    { src: 'https://res.cloudinary.com/dewjs94yc/video/upload/v1758760285/video_kaique_2_mlbnpo.mov', alt: 'Vídeo Kaique' },
    { src: 'https://i.ibb.co/DPMSB4Pg/icon-skip.png', alt: 'SKIPSTONE - Icon' },
    { src: 'https://i.ibb.co/KxCCpdTT/CAPA-BEHANCO.jpg', alt: 'SKIPSTONE - Capa Behance' }
  ]

  // Modelo 3D do Sketchfab
  const sketchfabModel = {
    id: 'c5e6a104c60f40778be42ad9e093d246',
    title: 'SKIPSTONE 3D Model'
  }

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
          SKIPSTONE - 2025
        </div>

        {/* Modelo 3D do Sketchfab */}
        <div style={{ width: '100%', marginBottom: '2%' }}>
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
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </div>

        {/* Texto explicativo */}
        <div style={{ width: '100%', marginBottom: '2%' }}>
          <div className="details-text" style={{
            fontSize: '1vw',
            color: '#666666',
            textAlign: 'left',
            lineHeight: '1.8',
            fontFamily: 'Arial, sans-serif',
            fontWeight: '300',
            fontStyle: 'italic'
          }}>
            <p style={{ marginBottom: '2%', fontWeight: '500' }}>What you are seeing is not a product. It's a mission.</p>
            <p style={{ marginBottom: '2%' }}>SKIPSTONE is a conceptual eyewear project developed through a creative collaboration between designers.</p>
            <p style={{ marginBottom: '2%' }}>Inspired by the intersection between three universes — the tactical, the sporting and the urban — the project was born from the desire to explore a visual language that combines functionality, presence and implications.</p>
            <p style={{ marginBottom: '2%' }}>From the robust aesthetics of tactical equipment came structural decisions and visual narrowness. From the sports world, we absorb lightness, ergonomics and a sense of performance. And from the urban scene, we extract the direct style, the language of techwear and the adaptability of everyday life.</p>
            <p style={{ marginBottom: '2%' }}>The result is glasses that reflect resistance, movement and expression. An object that molds itself to the environment — just like a stone thrown into water, which bounces, cuts and moves forward.</p>
          </div>
        </div>

        {/* Galeria de mídia (imagens + vídeos misturados) */}
        {projectMedia.map((item, index) => (
          <div key={index} style={{ 
            width: '100%', 
            marginBottom: index === 0 ? '-5%' : index === 1 ? '-5%' : '1.5%' 
          }}>
            {item.src.includes('.mp4') || item.src.includes('.mov') ? (
              <video controls style={{ width: '100%', borderRadius: '0.5vw' }}>
                <source src={item.src} type="video/mp4" />
                Seu navegador não suporta vídeo.
              </video>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width:
                    item.alt.includes('Render 3')
                      ? '100%'
                      : item.alt.includes('Render 4') || item.alt.includes('Nova Imagem')
                      ? '104%'
                      : '100%',
                  maxWidth:
                    item.alt.includes('Render 3')
                      ? '115%'
                      : item.alt.includes('Render 4') || item.alt.includes('Nova Imagem')
                      ? '120%'
                      : '100%',
                  marginLeft:
                    item.alt.includes('Render 3')
                      ? '0%'
                      : item.alt.includes('Render 4') || item.alt.includes('Nova Imagem')
                      ? '-2%'
                      : '0',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            )}
          </div>
        ))}

        {/* Créditos */}
        <div style={{ width: '100%', marginTop: '6%', paddingTop: '4%', borderTop: '1px solid #e0e0e0' }}>
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
  )
}

export default SkipstoneDetails
