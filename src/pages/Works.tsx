import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageShell from '../components/PageShell'
import OptimizedImage from '../components/OptimizedImage'
import { projects } from '../data/projects'

const Works = () => {
  const navigate = useNavigate()
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <PageShell contentClassName="works-grid content-area">
      {projects.map((project) => {
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
