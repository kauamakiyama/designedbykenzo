import type { CSSProperties } from 'react'
import type { MediaItem, Project } from '../data/projects'
import OptimizedImage from './OptimizedImage'

type StyleWithVars = CSSProperties & {
  '--details-gap'?: string
}

const getYoutubeEmbedUrl = (src: string) => {
  try {
    const url = new URL(src)
    const id = url.hostname.includes('youtu.be')
      ? url.pathname.replace('/', '')
      : url.searchParams.get('v') ?? url.pathname.split('/').filter(Boolean).pop()

    return id ? `https://www.youtube.com/embed/${id}` : src
  } catch {
    return src
  }
}

const mediaWrapperStyle = (item: MediaItem): CSSProperties => ({
  margin: item.spacing ?? '0 0 2%',
})

const renderMediaItem = (item: MediaItem, index: number) => {
  switch (item.type) {
    case 'image':
      return (
        <OptimizedImage
          src={item.src}
          alt={item.alt}
          priority={item.priority}
          className="details-media-image"
          style={{
            objectFit: item.fit ?? 'contain',
            ...item.style,
          }}
        />
      )
    case 'video':
      return (
        <video
          className="details-video"
          controls
          playsInline
          preload="metadata"
          aria-label={item.title}
        >
          <source src={item.src} type={item.sourceType ?? 'video/mp4'} />
          Seu navegador nao suporta video.
        </video>
      )
    case 'youtube':
      return (
        <div className="details-embed details-embed--youtube">
          <iframe
            src={getYoutubeEmbedUrl(item.src)}
            title={item.title}
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )
    case 'sketchfab':
      return (
        <div className="details-sketchfab">
          <iframe
            title={item.title}
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            src={`https://sketchfab.com/models/${item.modelId}/embed?autostart=0&ui_theme=dark`}
          />
        </div>
      )
    case 'text':
      return (
        <div className="details-text">
          {item.paragraphs.map((paragraph, paragraphIndex) => (
            <p
              key={`${index}-${paragraphIndex}`}
              className={paragraph.emphasis ? 'details-text-emphasis' : undefined}
            >
              {paragraph.text}
            </p>
          ))}
        </div>
      )
    default:
      return null
  }
}

interface ProjectMediaProps {
  project: Project
}

const ProjectMedia = ({ project }: ProjectMediaProps) => (
  <>
    <div
      className="details-gallery"
      style={{ '--details-gap': project.mediaGap } as StyleWithVars}
    >
      {project.mediaSections.map((item, index) => (
        <section
          key={`${item.type}-${index}`}
          className={`details-media details-media--${item.type}`}
          style={mediaWrapperStyle(item)}
        >
          {renderMediaItem(item, index)}
        </section>
      ))}
    </div>

    {project.credits && (
      <section className="details-credits-panel">
        <div className="details-credits">
          {project.credits.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>
    )}
  </>
)

export default ProjectMedia
