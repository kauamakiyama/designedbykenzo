import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const VelaDetails = () => {
  const navigate = useNavigate();

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
  };

  // Array com as imagens do projeto VELA (links ImgBB)
  const projectImages = [
    { src: 'https://i.ibb.co/NHRS8ck/att-1-1.jpg', alt: 'Vela - Imagem 1' },
    { src: 'https://i.ibb.co/XfpNv3D6/att-2.jpg', alt: 'Vela - Imagem 2' },
    { src: 'https://i.ibb.co/dJH731N4/att-3.jpg', alt: 'Vela - Imagem 3' },
    { src: 'https://i.ibb.co/Xf6TK8fD/att-4.jpg', alt: 'Vela - Imagem 4' }
  ];

  // Novos vídeos (Cloudinary)
  const explosionUrl = 'https://res.cloudinary.com/dewjs94yc/video/upload/v1758763717/explosion_1_1_guowy0.mp4';
  const boostUrl = 'https://res.cloudinary.com/dewjs94yc/video/upload/v1758763717/boost_1_1_g8trne.mp4';
  const forkrenderUrl = 'https://res.cloudinary.com/dewjs94yc/video/upload/v1758763718/Forkrender_1_1_orke7g.mp4';
  const mockupUrl = 'https://res.cloudinary.com/dewjs94yc/video/upload/v1758763718/Co%CC%81pia_de_mockup_1_m1jpzv.mp4';

  // Nova imagem: capa vx (ImgBB)
  const capaVxUrl = 'https://i.ibb.co/4QCCw0S/capa-vx.jpg';

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#ffffff'
    }}>
      {/* Sidebar */}
      <Sidebar currentPage="works" onPageChange={handlePageChange} />

      {/* Conteúdo principal */}
      <div className="details-content" style={{
        flex: 1,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
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
          VELA - 2024
        </div>

        {/* Galeria de imagens do projeto */}
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '2%'
        }}>
          {/* Primeira imagem */}
          <div style={{ width: '100%', marginBottom: '2%' }}>
            <div style={{ width: '100%' }}>
              <img
                src={projectImages[0].src}
                alt={projectImages[0].alt}
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

          {/* Texto explicativo do projeto */}
          <div style={{ width: '100%', marginBottom: '4%' }}>
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
                In the dynamic urban landscape, navigating the city can be challenging, but the Vela X redefines the way we move.
              </p>
              <p style={{ marginBottom: '2%' }}>
                This electric bike combines a modern design with practicality, built for any route. Lightweight and responsive, it gives you the confidence to tackle even the most uneven paths, offering unmatched comfort and safety for your daily commute.
              </p>
              <p style={{ marginBottom: '2%' }}>
                With a top speed of 31 km/h and a Boost button for an extra push when you need it, the Vela X ensures you stay ahead, making every ride effortless and enjoyable. It's more than a bike—it's your partner in urban mobility.
              </p>
            </div>
          </div>

          {/* Vídeo Forkrender abaixo do parágrafo de "top speed" */}
          <div style={{ width: '100%', margin: '2% 0' }}>
            <video
              src={forkrenderUrl}
              style={{ width: '100%', height: 'auto' }}
              controls
              playsInline
              preload="metadata"
            />
          </div>

          {/* Imagens restantes */}
          {projectImages.slice(1).map((image, index) => (
            <div key={index} style={{ width: '100%', marginBottom: '2%' }}>
              <div style={{ width: '100%' }}>
                <img
                  src={image.src}
                  alt={image.alt}
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

              {/* Texto abaixo da 2ª imagem (att-2.jpg) */}
              {index === 0 && (
                <div style={{ width: '100%', marginTop: '2%', marginBottom: '4%' }}>
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
                      The Vela X frame is made of 4130 CrMo steel alloy, ensuring strength and lightness for urban riding. The fork features a hydraulic shock absorber and pneumatic suspension, absorbing impacts and providing comfort on any route.
                    </p>
                  </div>
                  {/* Vídeo Explosion abaixo do parágrafo de quadro/garfo */}
                  <div style={{ width: '100%', margin: '2% 0' }}>
                    <video
                      src={explosionUrl}
                      style={{ width: '100%', height: 'auto' }}
                      controls
                      playsInline
                      preload="metadata"
                    />
                  </div>
                </div>
              )}

              {/* Texto abaixo da 3ª imagem (att-3.jpg) */}
              {index === 1 && (
                <div style={{ width: '100%', marginTop: '2%', marginBottom: '4%' }}>
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
                      Vela Bikes logo in black piano color. A new cell phone holder with magnet fixation. Exploded view of the bicycle.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Nova imagem: capa vx */}
          <div style={{ width: '100%', margin: '2% 0' }}>
            <img
              src={capaVxUrl}
              alt="Vela - Capa VX"
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>

          {/* Vídeos restantes (boost e mockup) */}
          {[boostUrl, mockupUrl].map((videoSrc, i) => (
            <div key={i} style={{ width: '100%', margin: '2% 0' }}>
              <video
                src={videoSrc}
                style={{ width: '100%', height: 'auto' }}
                controls
                playsInline
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VelaDetails;
