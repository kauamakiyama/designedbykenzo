import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import OptimizedImage from '../components/OptimizedImage'
import {
  findProductBySlug,
  type ProductMedia,
  type ProductOption,
  type ProductSection,
} from '../data/products'

const WHATSAPP_NUMBER = '5511999257319'

// Opens a WhatsApp chat with a ready-to-send message about the product
const getWhatsappUrl = (productName: string) => (
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in ${productName}.`)}`
)

interface OptionPickerProps {
  label: string
  options: ProductOption[]
  selected: string
  onSelect: (id: string) => void
}

const OptionPicker = ({ label, options, selected, onSelect }: OptionPickerProps) => (
  <div className="product-option">
    <span className="product-option-label">{label}</span>
    <div className="product-option-buttons" role="radiogroup" aria-label={label}>
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          role="radio"
          aria-checked={option.id === selected}
          className={`product-option-button${option.id === selected ? ' is-selected' : ''}`}
          onClick={() => onSelect(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  </div>
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

interface SectionBlockProps {
  section: ProductSection
  sizeId?: string
  colorId?: string
}

const SectionBlock = ({ section, sizeId, colorId }: SectionBlockProps) => {
  const variantImage = sizeId && colorId ? section.variantMain?.(sizeId, colorId) : undefined
  const main = variantImage ? { image: variantImage } : section.main
  const secondary = (sizeId && colorId && section.variantSecondary?.(sizeId, colorId)) || section.secondary

  return (
    <section className="product-section">
      <h2 className="product-section-label">
        {section.number} — {section.title}
      </h2>

      <div className="product-section-body">
        <MediaSlot media={main} className="product-section-main" width={1800} />

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

          {secondary && (
            <div className="product-section-secondary">
              {secondary.map((media, index) => (
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
}

const ProductDetailPage = () => {
  const { slug } = useParams()
  const product = findProductBySlug(slug)
  const [sizeId, setSizeId] = useState<string>()
  const [colorId, setColorId] = useState<string>()

  if (!product) {
    return (
      <PageShell contentClassName="details-content">
        <h1 className="details-title">PRODUCT NOT FOUND</h1>
      </PageShell>
    )
  }

  const { variants } = product
  // Defaults to the largest size in the first colour, matching the cover photo
  const size = variants && (
    variants.sizes.find((option) => option.id === sizeId) ?? variants.sizes[variants.sizes.length - 1]
  )
  const color = variants && (
    variants.colors.find((option) => option.id === colorId) ?? variants.colors[0]
  )
  const images = variants && size && color
    ? variants.views(size.id, color.id)
    : [product.cover, ...product.gallery]
  const specs = size
    ? [{ label: 'Dimensions', value: size.dimensions ?? 'On request' }, ...product.specs]
    : product.specs
  const orderName = size && color
    ? `${product.name} (size ${size.label}, ${color.label.toLowerCase()})`
    : product.name

  return (
    <PageShell contentClassName="details-content">
      <Link to="/products" className="product-back">
        ← Products
      </Link>

      <div className="product-detail">
        <div className="product-detail-gallery">
          {images.map((image, index) => {
            const img = (
              <OptimizedImage
                key={`${image.src}-${index}`}
                src={image.src}
                alt={image.alt}
                className={`product-detail-image${variants ? ' product-detail-image--view' : ''}`}
                priority={index === 0}
                width={1600}
                style={size?.zoom ? { transform: `scale(${size.zoom})` } : undefined}
              />
            )

            // The frame crops the zoomed render back to its original box
            return variants ? (
              <div key={`${image.src}-${index}`} className="product-detail-frame">{img}</div>
            ) : img
          })}

          {variants && size && color && variants.extras?.(size.id, color.id).map((image) => (
            <OptimizedImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="product-detail-image product-detail-image--view"
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

          {variants && size && color && (
            <div className="product-options">
              <OptionPicker label="Size" options={variants.sizes} selected={size.id} onSelect={setSizeId} />
              <OptionPicker label="Colour" options={variants.colors} selected={color.id} onSelect={setColorId} />
            </div>
          )}

          <dl className="product-specs">
            {specs.map((spec) => (
              <div key={spec.label} className="product-spec">
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>

          <a
            href={getWhatsappUrl(orderName)}
            className="product-buy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch to buy
          </a>
        </aside>
      </div>

      {product.sections?.map((section) => (
        <SectionBlock key={section.number} section={section} sizeId={size?.id} colorId={color?.id} />
      ))}
    </PageShell>
  )
}

export default ProductDetailPage
