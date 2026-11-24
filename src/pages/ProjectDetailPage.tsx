import { useParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import ProjectMedia from '../components/ProjectMedia'
import { findProjectBySlug } from '../data/projects'

// Titles are stored in capitals; desktop shows them uppercase via CSS,
// mobile shows them in title case ("Acrylic Coffee Table"), like the reference site
const toTitleCase = (title: string) => title
  .toLowerCase()
  .replace(/\b\w/g, (letter) => letter.toUpperCase())
  .replace(/ X /g, ' x ')

const ProjectDetailPage = () => {
  const { slug } = useParams()
  const project = findProjectBySlug(slug)

  if (!project) {
    return (
      <PageShell contentClassName="details-content">
        <h1 className="details-title">PROJECT NOT FOUND</h1>
      </PageShell>
    )
  }

  return (
    <PageShell contentClassName="details-content">
      <h1 className="details-title">
        <span className="details-title-name">{toTitleCase(project.title)}</span>
        <span className="details-title-separator"> - </span>
        <span className="details-title-year">{project.year}</span>
      </h1>
      <ProjectMedia project={project} />
    </PageShell>
  )
}

export default ProjectDetailPage
