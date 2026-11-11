import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageShell from '../components/PageShell'
import OptimizedImage from '../components/OptimizedImage'
import { projects } from '../data/projects'

// Most recent first. On mobile the works are listed in this order;
// on desktop each work has a fixed position, so the order does not change the layout.
const WORKS_ORDER_NEWEST_FIRST = [
  'polo-sport-eyewear',
  'levis',
  'quadro-realtree',
  'skipstone',
  'vento',
  'vela',
  'cadeira',
]

const orderOf = (slug: string) => {
  const index = WORKS_ORDER_NEWEST_FIRST.indexOf(slug)
  // A project missing from the list is treated as the newest and goes to the top
  return index === -1 ? -1 : index
}

const sortedProjects = [...projects].sort((a, b) => (
  orderOf(a.slug) - orderOf(b.slug) || Number(b.year) - Number(a.year)
))

const Works = () => {
  const navigate = useNavigate()
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <PageShell contentClassName="works-grid content-area">
      {sortedProjects.map((project) => {
        const label = project.worksLabel ?? `${project.title} / ${project.year}`
        const mobileSizeClass = project.worksMobileSize
          ? `work-item--mobile-${project.worksMobileSize}`
          : ''

        return (
          <button
            key={project.slug}
            type="button"
            className={`work-item work-item--${project.slug} ${mobileSizeClass}`.trim()}
            style={project.worksPosition}
            onMouseEnter={() => setHoveredProject(project.slug)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => navigate(`/works/${project.slug}`)}
            aria-label={`Open ${project.title}`}
          >
            <OptimizedImage
              src={project.cover.src}
              alt={project.cover.alt}
              className="work-image"
              priority={project.cover.priority}
              width={1600}
            />

            {hoveredProject === project.slug && (
              <span className="work-overlay">
                <span>{label}</span>
              </span>
            )}
          </button>
        )
      })}
    </PageShell>
  )
}

export default Works
