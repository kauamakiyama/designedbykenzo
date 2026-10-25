import { Link, useParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import OptimizedImage from '../components/OptimizedImage'
import { findProductBySlug } from '../data/products'

const ProductDetailPage = () => {
  const { slug } = useParams()
  const product = findProductBySlug(slug)

  if (!product) {
    return (
      <PageShell contentClassName="details-content">
        <h1 className="details-title">PRODUCT NOT FOUND</h1>
      </PageShell>
    )
  }

  return (
    <PageShell contentClassName="details-content">
      <Link to="/products" className="product-back">
        ← Products
      </Link>

      <div className="product-detail">
        <div className="product-detail-gallery">
          {[product.cover, ...product.gallery].map((image, index) => (
            <OptimizedImage
              key={`${image.src}-${index}`}
              src={image.src}
              alt={image.alt}
              className="product-detail-image"
              priority={index === 0}
              width={1600}
            />
          ))}
        </div>

        <aside className="product-detail-info">
          <h1 className="details-title product-detail-title">{product.name}</h1>
          <p className="product-detail-price">{product.price}</p>
          <p className="product-detail-summary">{product.summary}</p>

          <div className="details-text">
            {product.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="product-specs">
            {product.specs.map((spec) => (
              <div key={spec.label} className="product-spec">
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>

          <Link to="/contact" className="product-buy">
            Get in touch to buy
          </Link>
        </aside>
      </div>
    </PageShell>
  )
}

export default ProductDetailPage
