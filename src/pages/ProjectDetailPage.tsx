import { useParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import ProjectMedia from '../components/ProjectMedia'
import BrandFooter from '../components/BrandFooter'
import { findProjectBySlug } from '../data/projects'

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

  // Same frame as the Visual ID stories: title (bold) left, year (light) right,
  // then the content, then the dimension mark and logo at the bottom
  return (
    <PageShell contentClassName="details-content">
      <h1 className="details-title">
        <span className="details-title-name">{project.title}</span>
        <span className="details-title-year">{project.year}</span>
      </h1>
      <ProjectMedia project={project} />
      <BrandFooter />
    </PageShell>
  )
}

export default ProjectDetailPage
