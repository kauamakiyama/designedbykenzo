import { useParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import ProjectMedia from '../components/ProjectMedia'
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

  return (
    <PageShell contentClassName="details-content">
      <h1 className="details-title">
        {project.title} - {project.year}
      </h1>
      <ProjectMedia project={project} />
    </PageShell>
  )
}

export default ProjectDetailPage
