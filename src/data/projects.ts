import type { CSSProperties } from 'react'

export type MediaItem =
  | ImageMediaItem
  | VideoMediaItem
  | YoutubeMediaItem
  | SketchfabMediaItem
  | TextMediaItem

export interface ProjectImage {
  src: string
  alt: string
  priority?: boolean
}

export interface WorksPosition extends CSSProperties {
  top?: string
  left?: string
  right?: string
  width: string
}

export interface Project {
  slug: string
  title: string
  year: string
  legacyPath?: string
  worksLabel?: string
  worksMobileSize?: 'wide' | 'full'
  cover: ProjectImage
  worksPosition: WorksPosition
  mediaGap?: string
  mediaSections: MediaItem[]
  credits?: string[]
}

export interface BaseMediaItem {
  spacing?: string
}

export interface ImageMediaItem extends BaseMediaItem {
  type: 'image'
  src: string
  alt: string
  priority?: boolean
  fit?: 'contain' | 'cover'
  style?: CSSProperties
}

export interface VideoMediaItem extends BaseMediaItem {
  type: 'video'
  src: string
  title: string
  sourceType?: string
}

export interface YoutubeMediaItem extends BaseMediaItem {
  type: 'youtube'
  src: string
  title: string
}

export interface SketchfabMediaItem extends BaseMediaItem {
  type: 'sketchfab'
  modelId: string
  title: string
}

export interface TextParagraph {
  text: string
  emphasis?: boolean
}

export interface TextMediaItem extends BaseMediaItem {
  type: 'text'
  paragraphs: TextParagraph[]
}

const defaultImageStyle: CSSProperties = {
  width: '100%',
  height: 'auto',
  maxWidth: '100%',
  objectFit: 'contain',
}

export const projects: Project[] = [
  {
    slug: 'skipstone',
    title: 'SKIPSTONE',
    year: '2025',
    legacyPath: '/works/skipstone-details',
    cover: {
      src: 'https://i.ibb.co/PvPdsSjv/storys-mockup.png',
      alt: 'SKIPSTONE project cover',
      priority: true,
    },
    worksPosition: {
      top: '14%',
      right: '5%',
      width: '55%',
    },
    mediaSections: [
      {
        type: 'sketchfab',
        modelId: 'c5e6a104c60f40778be42ad9e093d246',
        title: 'SKIPSTONE 3D Model',
        spacing: '0 0 2%',
      },
      {
        type: 'text',
        spacing: '0 0 2%',
        paragraphs: [
          { text: "What you are seeing is not a product. It's a mission.", emphasis: true },
          { text: 'SKIPSTONE is a conceptual eyewear project developed through a creative collaboration between designers.' },
          { text: 'Inspired by the intersection between three universes - the tactical, the sporting and the urban - the project was born from the desire to explore a visual language that combines functionality, presence and implications.' },
          { text: 'From the robust aesthetics of tactical equipment came structural decisions and visual narrowness. From the sports world, we absorb lightness, ergonomics and a sense of performance. And from the urban scene, we extract the direct style, the language of techwear and the adaptability of everyday life.' },
          { text: 'The result is glasses that reflect resistance, movement and expression. An object that molds itself to the environment - just like a stone thrown into water, which bounces, cuts and moves forward.' },
        ],
      },
      {
        type: 'image',
        src: 'https://i.ibb.co/ZRFbcjht/3.png',
        alt: 'SKIPSTONE - Render 3',
        spacing: '0 0 -5%',
        style: { ...defaultImageStyle, maxWidth: '115%' },
      },
      {
        type: 'image',
        src: 'https://i.ibb.co/k2tk15vy/4.png',
        alt: 'SKIPSTONE - Render 4',
        spacing: '0 0 -5%',
        style: { ...defaultImageStyle, width: '104%', maxWidth: '120%', marginLeft: '-2%' },
      },
      { type: 'image', src: 'https://i.ibb.co/CKCNh7kz/8-ROSTOS.jpg', alt: 'SKIPSTONE - Rostos' },
      { type: 'image', src: 'https://i.ibb.co/Y74Wz7DG/skip-animacao-tela.jpg', alt: 'SKIPSTONE - Animacao de Tela' },
      { type: 'image', src: 'https://i.ibb.co/8LzLS1L8/skip-2-animacao-tela.jpg', alt: 'SKIPSTONE - Animacao de Tela 2' },
      { type: 'video', src: 'https://res.cloudinary.com/dewjs94yc/video/upload/v1758760247/reel_murilo_efsobs.mov', title: 'Video Murilo' },
      { type: 'image', src: 'https://i.ibb.co/CKn60rzv/9-grid.jpg', alt: 'SKIPSTONE - Grid' },
      { type: 'image', src: 'https://res.cloudinary.com/dewjs94yc/image/upload/v1758761540/rock_gif_2_ldiuge.gif', alt: 'SKIPSTONE - Rock animation' },
      { type: 'image', src: 'https://i.ibb.co/v6Vf2t1Y/9-PALETA-v2.jpg', alt: 'SKIPSTONE - Paleta' },
      { type: 'image', src: 'https://i.ibb.co/VYn72nK0/type.jpg', alt: 'SKIPSTONE - Type' },
      {
        type: 'image',
        src: 'https://i.ibb.co/qMC3XCgP/novas-att-3-img-jpg.jpg',
        alt: 'SKIPSTONE - Nova Imagem',
        style: { ...defaultImageStyle, width: '104%', maxWidth: '120%', marginLeft: '-2%' },
      },
      { type: 'video', src: 'https://res.cloudinary.com/dewjs94yc/video/upload/v1758760285/video_kaique_2_mlbnpo.mov', title: 'Video Kaique' },
      { type: 'image', src: 'https://i.ibb.co/DPMSB4Pg/icon-skip.png', alt: 'SKIPSTONE - Icon' },
      { type: 'image', src: 'https://i.ibb.co/KxCCpdTT/CAPA-BEHANCO.jpg', alt: 'SKIPSTONE - Capa Behance' },
    ],
    credits: [
      '©2025',
      'DESIGN & STRATEGY: LUAN KENZO E PEDRO MILANI',
      '3D DESIGN: PEDRO MILANI',
      'ANIMATION / VIDEO: MURILO SANTOS E KAIQUE BISCARO',
      'SOUND DESIGN: LEONARDO BRESSAN',
      'CONTACT: DESIGNEDBYKENZO@GMAIL.COM',
    ],
  },
  {
    slug: 'vela',
    title: 'VELA',
    year: '2024',
    legacyPath: '/works/vela-details',
    worksLabel: 'VELA / 2023',
    cover: {
      src: 'https://i.ibb.co/pCjsvqs/Full-Model-VX-3.png',
      alt: 'VELA project cover',
    },
    worksPosition: {
      top: '63%',
      right: '5%',
      width: '55%',
    },
    mediaSections: [
      { type: 'image', src: 'https://i.ibb.co/NHRS8ck/att-1-1.jpg', alt: 'Vela - Imagem 1', priority: true },
      {
        type: 'text',
        spacing: '0 0 4%',
        paragraphs: [
          { text: 'In the dynamic urban landscape, navigating the city can be challenging, but the Vela X redefines the way we move.' },
          { text: 'This electric bike combines a modern design with practicality, built for any route. Lightweight and responsive, it gives you the confidence to tackle even the most uneven paths, offering unmatched comfort and safety for your daily commute.' },
          { text: "With a top speed of 31 km/h and a Boost button for an extra push when you need it, the Vela X ensures you stay ahead, making every ride effortless and enjoyable. It's more than a bike - it's your partner in urban mobility." },
        ],
      },
      { type: 'video', src: 'https://res.cloudinary.com/dewjs94yc/video/upload/v1758763718/Forkrender_1_1_orke7g.mp4', title: 'Vela - Fork render', spacing: '2% 0' },
      { type: 'image', src: 'https://i.ibb.co/XfpNv3D6/att-2.jpg', alt: 'Vela - Imagem 2' },
      {
        type: 'text',
        spacing: '2% 0 0',
        paragraphs: [
          { text: 'The Vela X frame is made of 4130 CrMo steel alloy, ensuring strength and lightness for urban riding. The fork features a hydraulic shock absorber and pneumatic suspension, absorbing impacts and providing comfort on any route.' },
        ],
      },
      { type: 'video', src: 'https://res.cloudinary.com/dewjs94yc/video/upload/v1758763717/explosion_1_1_guowy0.mp4', title: 'Vela - Explosion', spacing: '2% 0 4%' },
      { type: 'image', src: 'https://i.ibb.co/dJH731N4/att-3.jpg', alt: 'Vela - Imagem 3' },
      {
        type: 'text',
        spacing: '2% 0 4%',
        paragraphs: [
          { text: 'Vela Bikes logo in black piano color. A new cell phone holder with magnet fixation. Exploded view of the bicycle.' },
        ],
      },
      { type: 'image', src: 'https://i.ibb.co/Xf6TK8fD/att-4.jpg', alt: 'Vela - Imagem 4' },
      { type: 'image', src: 'https://i.ibb.co/4QCCw0S/capa-vx.jpg', alt: 'Vela - Capa VX', spacing: '2% 0' },
      { type: 'video', src: 'https://res.cloudinary.com/dewjs94yc/video/upload/v1758763717/boost_1_1_g8trne.mp4', title: 'Vela - Boost', spacing: '2% 0' },
      { type: 'video', src: 'https://res.cloudinary.com/dewjs94yc/video/upload/v1758763718/Co%CC%81pia_de_mockup_1_m1jpzv.mp4', title: 'Vela - Mockup', spacing: '2% 0' },
    ],
  },
  {
    slug: 'quadro-realtree',
    title: 'QUADRO CREATIONS X REALTREE',
    year: '2026',
    legacyPath: '/works/quadro-realtree-details',
    worksLabel: 'QUADRO CREATIONS X REALTREE / 2026',
    cover: {
      src: 'https://i.ibb.co/jkVyBMfw/CASSIOANDREASI-1.jpg',
      alt: 'QUADRO CREATIONS X REALTREE project cover',
    },
    worksPosition: {
      top: '14%',
      left: '5%',
      width: '34%',
    },
    mediaGap: 'clamp(6px, 1.2vw, 20px)',
    mediaSections: [
      { type: 'image', src: 'https://i.ibb.co/jkVyBMfw/CASSIOANDREASI-1.jpg', alt: 'QUADRO X REALTREE - Imagem 1', priority: true, spacing: '0', style: { maxWidth: '65%', margin: '0 auto' } },
      { type: 'image', src: 'https://i.ibb.co/9md3pZV6/CASSIOANDREASI-2.jpg', alt: 'QUADRO X REALTREE - Imagem 2', spacing: '0', style: { maxWidth: '65%', margin: '0 auto' } },
      { type: 'image', src: 'https://i.ibb.co/SD5mH7sb/CASSIOANDREASI-8.jpg', alt: 'QUADRO X REALTREE - Imagem 8', spacing: '0', style: { maxWidth: '65%', margin: '0 auto' } },
      { type: 'image', src: 'https://i.ibb.co/d0M78JWr/CASSIOANDREASI-12.jpg', alt: 'QUADRO X REALTREE - Imagem 12', spacing: '0', style: { maxWidth: '65%', margin: '0 auto' } },
      { type: 'image', src: 'https://i.ibb.co/5gw3HGwB/CASSIOANDREASI-15.jpg', alt: 'QUADRO X REALTREE - Imagem 15', spacing: '0', style: { maxWidth: '65%', margin: '0 auto' } },
      { type: 'image', src: 'https://i.ibb.co/3mPMf980/IMG-9920-JPG.jpg', alt: 'QUADRO X REALTREE - Imagem 22', spacing: '0', style: { maxWidth: '65%', margin: '0 auto' } },
      { type: 'image', src: 'https://i.ibb.co/nsbHZLrN/IMG-9921-JPG.jpg', alt: 'QUADRO X REALTREE - Imagem 23', spacing: '0', style: { maxWidth: '65%', margin: '0 auto' } },
    ],
  },
  {
    slug: 'vento',
    title: 'VENTO',
    year: '2024',
    legacyPath: '/works/vento-details',
    worksMobileSize: 'wide',
    cover: {
      src: 'https://i.ibb.co/Wvww6szz/capa-site-vento.png',
      alt: 'VENTO project cover',
      priority: true,
    },
    worksPosition: {
      top: '73%',
      left: '3.5%',
      width: '36.2%',
    },
    mediaGap: 'clamp(8px, 0.8vw, 14px)',
    mediaSections: [
      { type: 'youtube', src: 'https://youtu.be/W9J1b5sqV3k?si=nj7EPA-r445SjZBc', title: 'VENTO - Video', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/Fq5pFW9Q/02.jpg', alt: 'VENTO - Imagem 2', priority: true, spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/srNPcgJ/03.jpg', alt: 'VENTO - Imagem 3', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/zV6kHdbP/04.jpg', alt: 'VENTO - Imagem 4', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/Wv2Y1nj1/05.jpg', alt: 'VENTO - Imagem 5', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/KzfGyjMq/06.jpg', alt: 'VENTO - Imagem 6', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/yFXNh10V/07.jpg', alt: 'VENTO - Imagem 7', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/Hfn3s392/08.jpg', alt: 'VENTO - Imagem 8', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/fGpJyRYZ/09.jpg', alt: 'VENTO - Imagem 9', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/Kj11NYdT/10.jpg', alt: 'VENTO - Imagem 10', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/tPvnHGYg/11.jpg', alt: 'VENTO - Imagem 11', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/rR4STst8/12.jpg', alt: 'VENTO - Imagem 12', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/zTvbndWP/13.jpg', alt: 'VENTO - Imagem 13', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/h1dV5cgp/14.jpg', alt: 'VENTO - Imagem 14', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/XxPVzGYT/15.jpg', alt: 'VENTO - Imagem 15', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/RkP76Q8Z/16.jpg', alt: 'VENTO - Imagem 16', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/d0TYzRrL/17.jpg', alt: 'VENTO - Imagem 17', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/LdqKv2tP/18.jpg', alt: 'VENTO - Imagem 18', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/kgsdX8Vc/19.jpg', alt: 'VENTO - Imagem 19', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/r26phFHD/20.jpg', alt: 'VENTO - Imagem 20', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/N26rMfdy/21.jpg', alt: 'VENTO - Imagem 21', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/JW1MqYtJ/22.jpg', alt: 'VENTO - Imagem 22', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/CpKBp6RR/23.jpg', alt: 'VENTO - Imagem 23', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/FqLRVY8p/24.jpg', alt: 'VENTO - Imagem 24', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/QjrVsckn/25.jpg', alt: 'VENTO - Imagem 25', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/4nHLxmnj/26.jpg', alt: 'VENTO - Imagem 26', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/zH4LmHzd/27.jpg', alt: 'VENTO - Imagem 27', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/3xzdWcN/28.jpg', alt: 'VENTO - Imagem 28', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/JjMvrQJK/29.jpg', alt: 'VENTO - Imagem 29', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/67vBD8jh/30.jpg', alt: 'VENTO - Imagem 30', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/GQCxmmhr/31.jpg', alt: 'VENTO - Imagem 31', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/k22JVpZn/32.jpg', alt: 'VENTO - Imagem 32', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/N2Xdc8xG/33.jpg', alt: 'VENTO - Imagem 33', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/0RzWNb0y/34.jpg', alt: 'VENTO - Imagem 34', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/HL5V7LwZ/35.jpg', alt: 'VENTO - Imagem 35', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/L356dc1/36.jpg', alt: 'VENTO - Imagem 36', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/5W3q93YH/37.jpg', alt: 'VENTO - Imagem 37', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/0VVT2p0k/38.jpg', alt: 'VENTO - Imagem 38', spacing: '0' },
      { type: 'image', src: 'https://i.ibb.co/qMRGBjj1/39.jpg', alt: 'VENTO - Imagem 39', spacing: '0' },
    ],
  },
  {
    slug: 'cadeira',
    title: 'CADEIRA BAIXA',
    year: '2023',
    legacyPath: '/works/cadeira-details',
    worksMobileSize: 'full',
    cover: {
      src: 'https://i.ibb.co/KxrN62Z5/cadeira-animacao-tela.jpg',
      alt: 'CADEIRA BAIXA project cover',
    },
    worksPosition: {
      top: '125%',
      left: '5%',
      width: '30%',
    },
    mediaSections: [
      { type: 'image', src: 'https://i.ibb.co/rKBZ465C/att-4.jpg', alt: 'Cadeira Baixa - Imagem 4', priority: true },
      {
        type: 'text',
        spacing: '0 0 4%',
        paragraphs: [
          { text: 'Inspired by traditional Japanese design, the Cadeira Baixa reimagines how we connect with our surroundings.' },
          { text: 'Crafted for both indoor and outdoor use, its low-profile design offers a comfortable and grounded seating experience. Built from 20mm marine-grade plywood, it combines durability with elegance, making it a perfect fit for reading, relaxing, or socializing.' },
          { text: 'Assembled effortlessly through interlocking parts - no tools required - this innovative approach minimizes material waste while ensuring strength and stability. With its timeless design and sustainable construction, the Cadeira Baixa invites you to slow down, connect, and appreciate every moment.' },
        ],
      },
      { type: 'image', src: 'https://i.ibb.co/dJrzsxRz/att-1.jpg', alt: 'Cadeira Baixa - Imagem 1' },
      {
        type: 'text',
        spacing: '2% 0 4%',
        paragraphs: [
          { text: 'Cadeira Baixa combines aesthetics and functionality, representing the culmination of all stages of development.' },
          { text: 'It is a practical piece of furniture that can be assembled by anyone, without the use of tools.' },
        ],
      },
      { type: 'image', src: 'https://i.ibb.co/5Xd537KS/att-3.jpg', alt: 'Cadeira Baixa - Imagem 3' },
      {
        type: 'text',
        spacing: '2% 0 4%',
        paragraphs: [
          { text: 'Ergonomic posture when sitting. Seat insert with side. Backrest fitting with side. Bottom view of the connections that join the seat to the sides of the chair.' },
        ],
      },
      { type: 'image', src: 'https://i.ibb.co/CKM8vTpd/att-2.jpg', alt: 'Cadeira Baixa - Imagem 2', fit: 'cover' },
      {
        type: 'text',
        spacing: '2% 0 4%',
        paragraphs: [
          { text: 'Composed of nine designed pieces: one seat, one backrest, two side panels, and five structural support rods. Each component fits seamlessly together, ensuring stability, strength, and an elegant minimalist aesthetic.' },
        ],
      },
    ],
  },
]

export const homeCarouselImages: ProjectImage[] = [
  { src: 'https://i.ibb.co/CKCNh7kz/8-ROSTOS.jpg', alt: 'Portfolio slide 1' },
  { src: 'https://i.ibb.co/NHRS8ck/att-1-1.jpg', alt: 'Portfolio slide 2' },
  { src: 'https://i.ibb.co/0pQY604S/att-5.jpg', alt: 'Portfolio slide 3' },
  { src: 'https://i.ibb.co/zV0GmHSf/banco-frontal-1.jpg', alt: 'Portfolio slide 4' },
  { src: 'https://i.ibb.co/YBjRfQ5k/hn-bag-na-medida.jpg', alt: 'Portfolio slide 5' },
  { src: 'https://i.ibb.co/Z1wkCJmM/hn-peitas-na-medida.jpg', alt: 'Portfolio slide 6' },
  { src: 'https://i.ibb.co/LX9sYkNg/IMG-9597-1-1.png', alt: 'Portfolio slide 7' },
  { src: 'https://i.ibb.co/SDz64vTy/movel-thiago.jpg', alt: 'Portfolio slide 8' },
  { src: 'https://i.ibb.co/1xv9j7W/napkin.jpg', alt: 'Portfolio slide 9' },
  { src: 'https://i.ibb.co/TqNkdt0j/shape-na-medida.jpg', alt: 'Portfolio slide 10' },
  { src: 'https://i.ibb.co/G38DJzC0/Skateboard-Mockup-mlks-2.jpg', alt: 'Portfolio slide 11' },
  { src: 'https://i.ibb.co/Mvcw9Qj/suzuki-peitas-na-medida.jpg', alt: 'Portfolio slide 12' },
  { src: 'https://i.ibb.co/VpH4hQdg/vinil-to-vni-na-medida.jpg', alt: 'Portfolio slide 13' },
]

export const findProjectBySlug = (slug?: string) => (
  projects.find((project) => project.slug === slug)
)
