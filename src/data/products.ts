import type { ProjectImage } from './projects'

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  slug: string
  name: string
  price: string
  summary: string
  description: string[]
  specs: ProductSpec[]
  cover: ProjectImage
  gallery: ProjectImage[]
}

// Placeholder images - replace with the real product photos
const placeholderImage = 'https://i.ibb.co/PvPdsSjv/storys-mockup.png'

export const products: Product[] = [
  {
    slug: 'produto-1',
    name: 'Produto 1',
    price: 'R$ 199,00',
    summary: 'Short description of what this product is.',
    description: [
      'Full description of the product: what it is, how it was made and what makes it unique.',
      'Second paragraph with extra information about use, care or the story behind the piece.',
    ],
    specs: [
      { label: 'Material', value: 'To be defined' },
      { label: 'Dimensions', value: '00 x 00 x 00 cm' },
      { label: 'Production', value: 'Made to order' },
    ],
    cover: { src: placeholderImage, alt: 'Produto 1', priority: true },
    gallery: [
      { src: placeholderImage, alt: 'Produto 1 - image 1' },
      { src: placeholderImage, alt: 'Produto 1 - image 2' },
    ],
  },
  {
    slug: 'produto-2',
    name: 'Produto 2',
    price: 'R$ 349,00',
    summary: 'Short description of what this product is.',
    description: [
      'Full description of the product: what it is, how it was made and what makes it unique.',
    ],
    specs: [
      { label: 'Material', value: 'To be defined' },
      { label: 'Dimensions', value: '00 x 00 x 00 cm' },
    ],
    cover: { src: placeholderImage, alt: 'Produto 2', priority: true },
    gallery: [{ src: placeholderImage, alt: 'Produto 2 - image 1' }],
  },
  {
    slug: 'produto-3',
    name: 'Produto 3',
    price: 'R$ 89,00',
    summary: 'Short description of what this product is.',
    description: [
      'Full description of the product: what it is, how it was made and what makes it unique.',
    ],
    specs: [
      { label: 'Material', value: 'To be defined' },
      { label: 'Dimensions', value: '00 x 00 x 00 cm' },
    ],
    cover: { src: placeholderImage, alt: 'Produto 3', priority: true },
    gallery: [{ src: placeholderImage, alt: 'Produto 3 - image 1' }],
  },
  {
    slug: 'produto-4',
    name: 'Produto 4',
    price: 'R$ 129,00',
    summary: 'Short description of what this product is.',
    description: [
      'Full description of the product: what it is, how it was made and what makes it unique.',
    ],
    specs: [{ label: 'Material', value: 'To be defined' }],
    cover: { src: placeholderImage, alt: 'Produto 4' },
    gallery: [{ src: placeholderImage, alt: 'Produto 4 - image 1' }],
  },
]

export const findProductBySlug = (slug?: string) => (
  products.find((product) => product.slug === slug)
)
