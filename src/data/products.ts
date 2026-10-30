import type { ProjectImage } from './projects'

export interface ProductSpec {
  label: string
  value: string
}

// An image slot that may not exist yet: without `image`, a labelled placeholder is shown
export interface ProductMedia {
  image?: ProjectImage
  placeholder?: string
}

// Numbered editorial block below the product intro (e.g. "02 — System / Construction")
export interface ProductSection {
  number: string
  title: string
  main: ProductMedia
  text?: string[]
  specs?: string[]
  secondary?: ProductMedia[]
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
  sections?: ProductSection[]
}

// Placeholder images - replace with the real product photos
const placeholderImage = 'https://i.ibb.co/PvPdsSjv/storys-mockup.png'

export const products: Product[] = [
  {
    slug: 'trilho',
    name: 'Trilho',
    price: 'On request',
    summary: 'A bench built from solid timber beams and extruded aluminium profiles.',
    description: [
      'Three timber beams rest on stacked aluminium extrusions: standard, existing components, repeated rather than redesigned.',
    ],
    specs: [
      { label: 'Dimensions', value: '2500 × 340 × 400 mm' },
      { label: 'Materials', value: 'Solid timber / extruded aluminium' },
      { label: 'Finish', value: 'Stained timber' },
    ],
    cover: { src: '/images/products/trilho-verde.jpg', alt: 'Trilho bench in green stained timber', priority: true },
    gallery: [],
    sections: [
      {
        number: '02',
        title: 'System / Construction',
        main: { placeholder: 'Exploded view' },
        text: [
          'Trilho is assembled, not sculpted. Every part is an existing component: timber beams and extruded aluminium profiles, stacked and repeated.',
          'Its aesthetic comes directly from the assembly — the logic of the construction is what you see.',
        ],
      },
      {
        number: '03',
        title: 'Scale / Variations',
        main: { placeholder: 'Three sizes' },
        specs: ['2500 × 340 × 400 mm', 'Solid timber / extruded aluminium'],
        text: ['The same system adapts to different lengths. Additional sizes coming soon.'],
        secondary: [{ placeholder: 'Technical drawing' }],
      },
      {
        number: '04',
        title: 'Material / Finish',
        main: { placeholder: 'Close-up: timber / aluminium' },
        text: [
          'The timber is stained in different colours. The tint changes the expression of the wood without erasing its grain.',
        ],
        secondary: [
          { image: { src: '/images/products/trilho-azul.jpg', alt: 'Trilho bench in blue stained timber' } },
          { image: { src: '/images/products/trilho-laranja.jpg', alt: 'Trilho bench in orange stained timber' } },
        ],
      },
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
