import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const CadeiraDetails = () => {
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

  // Array com as imagens do projeto CADEIRA
  const projectImages = [
    { src: '/src/assets/details/cadeira/att 4 .jpg', alt: 'Cadeira Baixa - Imagem 4' },
    { src: '/src/assets/details/cadeira/att 1.jpg', alt: 'Cadeira Baixa - Imagem 1' },
    { src: '/src/assets/details/cadeira/att 3 .jpg', alt: 'Cadeira Baixa - Imagem 3' },
    { src: '/src/assets/details/cadeira/att 2 .jpg', alt: 'Cadeira Baixa - Imagem 2' }
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
      <div style={{
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
          CADEIRA BAIXA - 2023
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
                Inspired by traditional Japanese design, the Cadeira Baixa reimagines how we connect with our surroundings.
              </p>
              <p style={{ marginBottom: '2%' }}>
                Crafted for both indoor and outdoor use, its low-profile design offers a comfortable and grounded seating experience. Built from 20mm marine-grade plywood, it combines durability with elegance, making it a perfect fit for reading, relaxing, or socializing.
              </p>
              <p style={{ marginBottom: '2%' }}>
                Assembled effortlessly through interlocking parts—no tools required—this innovative approach minimizes material waste while ensuring strength and stability. With its timeless design and sustainable construction, the Cadeira Baixa invites you to slow down, connect, and appreciate every moment.
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
                    // Ajuste especial para a imagem AN7DG_PROT_-97 2.jpg (4ª imagem)
                    objectFit: index === 2 ? 'cover' : 'contain',
                    // Altura específica para a imagem AN7DG_PROT_-97 2.jpg
                    ...(index === 2 && { height: '100%', objectPosition: 'center' }),
                    // Altura específica para a imagem att 2 .jpg (última imagem)
                    ...(index === 3 && { height: '100%', objectPosition: 'center' })
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Texto abaixo da 2ª imagem (index 0 após slice) */}
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
                      Cadeira Baixa combines aesthetics and functionality, representing the culmination of all stages of development.
                    </p>
                    <p style={{ marginBottom: '2%' }}>
                      It is a practical piece of furniture that can be assembled by anyone, without the use of tools.
                    </p>
                  </div>
                </div>
              )}

              {/* Texto abaixo da 3ª imagem (index 1 após slice) */}
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
                      Ergonomic posture when sitting . Seat insert with side . Backrest fitting with side . Bottom view of the connections that join the seat to the sides of the chair.
                    </p>
                  </div>
                </div>
              )}

              {/* Texto abaixo da 4ª imagem (index 2 após slice) */}
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
                      Composed of nine designed pieces: one seat, one backrest, two side panels, and five structural support rods. Each component fits seamlessly together, ensuring stability, strength, and an elegant minimalist aesthetic.
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

export default CadeiraDetails
