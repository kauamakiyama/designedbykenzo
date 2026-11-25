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
  // Main image for the selected size × colour; falls back to `main` when it returns nothing
  variantMain?: (size: string, color: string) => ProjectImage | undefined
  text?: string[]
  specs?: string[]
  secondary?: ProductMedia[]
  // Secondary images for the selected size × colour; replaces `secondary` when set
  variantSecondary?: (size: string, color: string) => ProductMedia[]
}

export interface ProductOption {
  id: string
  label: string
}

export interface ProductSize extends ProductOption {
  // Without dimensions, the size is shown as "On request"
  dimensions?: string
  // Enlarges the variant renders when the piece looks small in the frame (1 = as rendered)
  zoom?: number
}

// Size × colour picker; each combination has its own set of views
export interface ProductVariants {
  sizes: ProductSize[]
  colors: ProductOption[]
  views: (size: string, color: string) => ProjectImage[]
  // Shown after the views, without the size zoom (e.g. photos of the piece in a room)
  extras?: (size: string, color: string) => ProjectImage[]
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

// Section photos saved in /images/products/trilho/ as either
//   {size}-{color}-{kind}.jpg — one combination (e.g. 'p-verde-ambiente')
//   {color}-{kind}.jpg        — shared by every size of that colour (e.g. 'verde-material')
// Add the file name (without .jpg) here once the file is in place
const TRILHO_SECTION_PHOTOS = new Set<string>([
  'verde-material', 'azul-material', 'laranja-material',
  'p-verde-ambiente', 'p-azul-ambiente', 'm-azul-ambiente',
])

const trilhoSectionPhoto = (kind: string, description: string) => (size: string, color: string) => {
  const colorName = TRILHO_COLOR_NAMES[color]

  if (TRILHO_SECTION_PHOTOS.has(`${size}-${color}-${kind}`)) {
    return {
      src: `/images/products/trilho/${size}-${color}-${kind}.jpg`,
      alt: `Trilho ${TRILHO_SIZE_NAMES[size]} bench in ${colorName} stained timber, ${description}`,
    }
  }

  if (TRILHO_SECTION_PHOTOS.has(`${color}-${kind}`)) {
    return {
      src: `/images/products/trilho/${color}-${kind}.jpg`,
      alt: `Trilho benches in ${colorName} stained timber, ${description}`,
    }
  }

  return undefined
}

export const products: Product[] = [
  {
    slug: 'acrylic-coffee-table',
    name: 'Acrylic Coffee Table',
    summary: 'A coffee table hand-bent from 10 mm cast acrylic.',
    description: [
      'Soft, organic curves, each bend drawn with a 5 cm radius. A side pocket holds magazines and books; an open niche beneath the top takes books and objects.',
      'Made to order, one piece at a time. Shown in translucent ruby red; other colours on request.',
    ],
    specs: [
      { label: 'Dimensions', value: 'W 730 × D 500 × H 410 mm' },
      { label: 'Material', value: '10 mm cast acrylic' },
      { label: 'Colour', value: 'Translucent ruby red / on request' },
      { label: 'Fixings', value: 'Stainless steel Allen screws' },
    ],
    cover: {
      src: '/images/products/acrylic-coffee-table/03-front.jpg',
      alt: 'Acrylic Coffee Table in translucent ruby red, front view in the studio',
      priority: true,
    },
    gallery: [
      { src: '/images/products/acrylic-coffee-table/02-room.jpg', alt: 'Acrylic Coffee Table in a room, with a lamp, a laptop, books and sneakers' },
      { src: '/images/products/acrylic-coffee-table/01-three-quarter.jpg', alt: 'Acrylic Coffee Table, three-quarter view with the magazine pocket' },
      { src: '/images/products/acrylic-coffee-table/04-fixings.jpg', alt: 'Acrylic Coffee Table, detail of the stainless steel Allen screws joining the parts' },
      { src: '/images/products/acrylic-coffee-table/05-curve.jpg', alt: 'Acrylic Coffee Table, detail of the 5 cm radius curve of the magazine pocket' },
      { src: '/images/products/acrylic-coffee-table/06-scale.jpg', alt: 'Acrylic Coffee Table next to a person sitting on the rug, showing its scale' },
    ],
    sections: [
      {
        number: '02',
        title: 'Material / Colour',
        main: {
          image: {
            src: '/images/acrylic-coffee-table/01-studio.jpg',
            alt: 'Acrylic Coffee Table in translucent ruby red, side view in the studio',
          },
        },
        text: [
          'Cast acrylic is bent by hand along the curves, so each table is made individually. The colour runs through the whole sheet: light passes through it and tints what sits below.',
          'The table can be produced in other acrylic colours — get in touch to choose yours.',
        ],
        specs: ['W 730 × D 500 × H 410 mm', '10 mm cast acrylic', 'Bend radius 50 mm'],
      },
    ],
  },
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
        { id: 'p', label: 'S', dimensions: 'W 500 × D 340 × H 400 mm', zoom: 1.6 },
        { id: 'm', label: 'M', dimensions: 'W 1500 × D 340 × H 400 mm' },
        { id: 'g', label: 'L', dimensions: 'W 2500 × D 340 × H 400 mm' },
      ],
      colors: [
        { id: 'verde', label: 'Green' },
        { id: 'azul', label: 'Blue' },
        { id: 'laranja', label: 'Orange' },
      ],
      views: (size, color) => [{
        src: `/images/products/trilho/${size}-${color}-perspectiva.jpg`,
        alt: `Trilho ${TRILHO_SIZE_NAMES[size]} bench in ${TRILHO_COLOR_NAMES[color]} stained timber, perspective view`,
      }],
      extras: (size, color) => (
        TRILHO_SECTION_PHOTOS.has(`${size}-${color}-ambiente`)
          ? [{
              src: `/images/products/trilho/${size}-${color}-ambiente.jpg`,
              alt: `Trilho ${TRILHO_SIZE_NAMES[size]} bench in ${TRILHO_COLOR_NAMES[color]} stained timber, photographed in a room`,
            }]
          : []
      ),
    },
    sections: [
      {
        number: '02',
        title: 'Scale / Variations',
        main: {
          image: {
            src: '/images/products/trilho-escala.jpg',
            alt: 'Trilho benches in the three sizes: large in green, medium in blue and small in orange',
          },
        },
        specs: ['S — W 500 × D 340 × H 400 mm', 'M — W 1500 × D 340 × H 400 mm', 'L — W 2500 × D 340 × H 400 mm', 'Solid timber / extruded aluminium'],
        text: ['The same system adapts to different lengths: three sizes, one height and depth.'],
      },
      {
        number: '03',
        title: 'Material / Finish',
        main: { placeholder: 'Close-up: timber / aluminium' },
        variantMain: trilhoSectionPhoto('material', 'close-up of the timber and aluminium'),
        text: [
          'The timber is stained in different colours. The tint changes the expression of the wood without erasing its grain.',
        ],
        // The other two colours, so the selected one is not repeated
        variantSecondary: (_size, color) => Object.keys(TRILHO_COLOR_NAMES)
          .filter((other) => other !== color)
          .map((other) => ({
            image: {
              src: `/images/products/trilho-${other}.jpg`,
              alt: `Trilho bench in ${TRILHO_COLOR_NAMES[other]} stained timber`,
            },
          })),
      },
    ],
  },
]

export const findProductBySlug = (slug?: string) => (
  products.find((product) => product.slug === slug)
)
