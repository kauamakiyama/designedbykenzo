import { useNavigate } from 'react-router-dom'
import OptimizedImage from './OptimizedImage'

const LOGO_SRC = 'https://i.ibb.co/TMRRSJVc/LOGOS-30.png'

// Visual ID dimension mark: |←  35345  →|
const DimensionMark = () => (
  <span className="dimension-mark" aria-hidden="true">
    <svg viewBox="0 0 40 20" className="dimension-mark-arrow">
      <line x1="1" y1="2" x2="1" y2="18" />
      <line x1="1" y1="10" x2="34" y2="10" />
      <polyline points="7,5 1.5,10 7,15" />
    </svg>
    <span className="dimension-mark-value">35345</span>
    <svg viewBox="0 0 40 20" className="dimension-mark-arrow">
      <line x1="39" y1="2" x2="39" y2="18" />
      <line x1="6" y1="10" x2="39" y2="10" />
      <polyline points="33,5 38.5,10 33,15" />
    </svg>
  </span>
)

// Discreet, constant brand signature at the end of content pages (Visual ID rule)
const BrandFooter = () => {
  const navigate = useNavigate()

  return (
    <footer className="brand-footer">
      <DimensionMark />
      <button type="button" className="brand-footer-logo" onClick={() => navigate('/')} aria-label="Kenzo - Home">
        <OptimizedImage src={LOGO_SRC} alt="" width={400} />
      </button>
    </footer>
  )
}

export default BrandFooter
