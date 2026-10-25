import { useNavigate } from 'react-router-dom'
import type { Product } from '../data/products'
import OptimizedImage from './OptimizedImage'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      className="product-card"
      onClick={() => navigate(`/products/${product.slug}`)}
      aria-label={`Open ${product.name}`}
    >
      <span className="product-card-image-wrap">
        <OptimizedImage
          src={product.cover.src}
          alt={product.cover.alt}
          className="product-card-image"
          priority={product.cover.priority}
          width={900}
        />
      </span>

      <span className="product-card-info">
        <span className="product-card-name">{product.name}</span>
        <span className="product-card-price">{product.price}</span>
      </span>
    </button>
  )
}

export default ProductCard
