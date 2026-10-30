import { Link, useParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import OptimizedImage from '../components/OptimizedImage'
import {
  findProductBySlug,
  type ProductMedia,
  type ProductSection,
} from '../data/products'

const WHATSAPP_NUMBER = '5511999257319'

// Opens a WhatsApp chat with a ready-to-send message about the product
const getWhatsappUrl = (productName: string) => (
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in ${productName}.`)}`
)

interface MediaSlotProps {
  media: ProductMedia
  className: string
  width: number
}

// Shows the image, or a labelled grey box while the image is not ready yet
const MediaSlot = ({ media, className, width }: MediaSlotProps) => (
  media.image ? (
    <OptimizedImage
      src={media.image.src}
      alt={media.image.alt}
      className={className}
      width={width}
    />
  ) : (
    <div className={`${className} product-media-placeholder`}>
      <span>{media.placeholder}</span>
    </div>
  )
)

const SectionBlock = ({ section }: { section: ProductSection }) => (
  <section className="product-section">
    <h2 className="product-section-label">
      {section.number} — {section.title}
    </h2>

    <div className="product-section-body">
      <MediaSlot media={section.main} className="product-section-main" width={1800} />

      <div className="product-section-side">
        {section.text && (
          <div className="details-text">
            {section.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}

        {section.specs && (
          <div className="product-section-specs">
            {section.specs.map((spec) => (
              <p key={spec}>{spec}</p>
            ))}
          </div>
        )}

        {section.secondary && (
          <div className="product-section-secondary">
            {section.secondary.map((media, index) => (
              <MediaSlot
                key={media.image?.src ?? `${media.placeholder}-${index}`}
                media={media}
                className="product-section-thumb"
                width={900}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
)

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

          <a
            href={getWhatsappUrl(product.name)}
            className="product-buy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch to buy
          </a>
        </aside>
      </div>

      {product.sections?.map((section) => (
        <SectionBlock key={section.number} section={section} />
      ))}
    </PageShell>
  )
}

export default ProductDetailPage
