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

export interface ProductOption {
  id: string
  label: string
}

export interface ProductSize extends ProductOption {
  // Without dimensions, the size is shown as "On request"
  dimensions?: string
}

// Size × colour picker; each combination has its own set of views
export interface ProductVariants {
  sizes: ProductSize[]
  colors: ProductOption[]
  views: (size: string, color: string) => ProjectImage[]
}

export interface Product {
  slug: string
  name: string
  summary: string
  description: string[]
  specs: ProductSpec[]
  cover: ProjectImage
  gallery: ProjectImage[]
  variants?: ProductVariants
  sections?: ProductSection[]
}

const TRILHO_SIZE_NAMES: Record<string, string> = { p: 'small', m: 'medium', g: 'large' }
const TRILHO_COLOR_NAMES: Record<string, string> = { verde: 'green', azul: 'blue', laranja: 'orange' }

export const products: Product[] = [
  {
    slug: 'trilho',
    name: 'Trilho',
    summary: 'A bench built from solid timber beams and extruded aluminium profiles.',
    description: [
      'Three timber beams rest on stacked aluminium extrusions: standard, existing components, repeated rather than redesigned.',
    ],
    // Dimensions come from the selected size (see `variants`)
    specs: [
      { label: 'Materials', value: 'Solid timber / extruded aluminium' },
      { label: 'Finish', value: 'Stained timber' },
    ],
    cover: { src: '/images/products/trilho-verde.jpg', alt: 'Trilho bench in green stained timber', priority: true },
    gallery: [],
    variants: {
      sizes: [
        { id: 'p', label: 'S', dimensions: '500 × 340 × 400 mm' },
        { id: 'm', label: 'M', dimensions: '1500 × 340 × 400 mm' },
        { id: 'g', label: 'L', dimensions: '2500 × 340 × 400 mm' },
      ],
      colors: [
        { id: 'verde', label: 'Green' },
        { id: 'azul', label: 'Blue' },
        { id: 'laranja', label: 'Orange' },
      ],
      views: (size, color) => ['perspectiva', 'frontal'].map((view) => ({
        src: `/images/products/trilho/${size}-${color}-${view}.jpg`,
        alt: `Trilho ${TRILHO_SIZE_NAMES[size]} bench in ${TRILHO_COLOR_NAMES[color]} stained timber, ${view === 'frontal' ? 'front' : 'perspective'} view`,
      })),
    },
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
        specs: ['S — 500 × 340 × 400 mm', 'M — 1500 × 340 × 400 mm', 'L — 2500 × 340 × 400 mm', 'Solid timber / extruded aluminium'],
        text: ['The same system adapts to different lengths: three sizes, one height and depth.'],
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
