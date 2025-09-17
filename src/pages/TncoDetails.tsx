import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const TncoDetails = () => {
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

  // Array com as imagens do projeto TNCO
  const projectImages = [
    { src: '/src/assets/details/tnco/att 5 .jpg', alt: 'TNCO - Imagem 5' },
    { src: '/src/assets/details/tnco/att 1 (2).jpg', alt: 'TNCO - Imagem 1' },
    { src: '/src/assets/details/tnco/att 2  (2).jpg', alt: 'TNCO - Imagem 2' },
    { src: '/src/assets/details/tnco/att 3  (2).jpg', alt: 'TNCO - Imagem 3' },
    { src: '/src/assets/details/tnco/att 4.jpg', alt: 'TNCO - Imagem 4' },
  ];

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
          TNCO - 2023
        </div>

        {/* Galeria de imagens do projeto */}
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '2%'
        }}>
          {/* Primeira imagem */}
          <div style={{
            width: '100%',
            marginBottom: '2%'
          }}>
            <div style={{
              width: '100%'
            }}>
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
                Designed especially for pharmacies, The New Check Out provides a more comfortable and intuitive shopping experience.
              </p>
            </div>
          </div>

          {/* Imagens restantes */}
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
                    objectFit: 'contain'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Texto abaixo da 4ª imagem (att 4.jpg) */}
              {index === 2 && (
                <div style={{
                  width: '100%',
                  marginTop: '2%',
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
                      A "smart checkout" to carry out the checkout process with a clean, modern look and ergonomic design;
                    </p>
                  </div>
                </div>
              )}

              {/* Texto abaixo da 3ª imagem (att 3 (2).jpg) */}
              {index === 1 && (
                <div style={{
                  width: '100%',
                  marginTop: '2%',
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
                      The New Check Out prioritizes employee ergonomics, offering adjustable workstations that minimize physical effort during service. The counters have individual height adjustment, ensuring comfort and efficiency for different body types, promoting a more inclusive and ergonomic environment.
                    </p>
                  </div>
                </div>
              )}

              {/* Texto abaixo da 2ª imagem (att 2  (2).jpg) */}
              {index === 0 && (
                <div style={{
                  width: '100%',
                  marginTop: '2%',
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
                      Layouts can be adapted for each store, considering customer flow and space layout, optimizing the experience without compromising functionality.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TncoDetails
