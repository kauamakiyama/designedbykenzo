import { useLocation, useNavigate } from 'react-router-dom'
import {
  getCurrentPage,
  getPathForPage,
  type PageId,
} from '../data/navigation'

const useSiteNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPage = getCurrentPage(location.pathname)

  const goToPage = (pageId: PageId) => {
    navigate(getPathForPage(pageId))
  }

  return {
    currentPage,
    goToPage,
  }
}

export default useSiteNavigation
