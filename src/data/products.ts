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
  summary: string
  description: string[]
  specs: ProductSpec[]
  cover: ProjectImage
  gallery: ProjectImage[]
  sections?: ProductSection[]
}

export const products: Product[] = [
  {
    slug: 'trilho',
    name: 'Trilho',
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
]

export const findProductBySlug = (slug?: string) => (
  products.find((product) => product.slug === slug)
)
