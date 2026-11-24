import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageShell from '../components/PageShell'
import OptimizedImage from '../components/OptimizedImage'
import WorksGrid from '../components/WorksGrid'
import { getOptimizedImageUrl } from '../utils/imageOptimization'
import { homeCarouselImages } from '../data/projects'

const CAROUSEL_IMAGE_WIDTH = 1920

// Home and Works are one page: the opening screen (photo + marquee) and the project grid below it.
// /works opens the same page already scrolled to the grid.
const Home = () => {
  const { pathname } = useLocation()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const currentImage = homeCarouselImages[currentImageIndex]

  useEffect(() => {
    const nextIndexes = [1, 2].map((offset) => (
      (currentImageIndex + offset) % homeCarouselImages.length
    ))

    nextIndexes.forEach((index) => {
      const image = new Image()
      image.decoding = 'async'
      image.src = getOptimizedImageUrl(homeCarouselImages[index].src, CAROUSEL_IMAGE_WIDTH)
    })
  }, [currentImageIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (
        prevIndex === homeCarouselImages.length - 1 ? 0 : prevIndex + 1
      ))
    }, 1200)

    return () => clearInterval(interval)
  }, [])

  // Desktop: the home shows the logo and the page links on top instead of the side menu
  useEffect(() => {
    document.body.classList.add('home-mode')
    return () => {
      document.body.classList.remove('home-mode')
    }
  }, [])

  return (
    <PageShell
      className="home-page"
      contentClassName="home-content"
      scrollTargetId={pathname.startsWith('/works') ? 'works' : undefined}
    >
      <section className="home-hero" aria-label="Kenzo - objects, spaces & experiences">
        {/* Fixed rectangle: every photo is cropped to the same format */}
        <div className="home-frame" style={currentImage.contain ? { backgroundColor: currentImage.contain } : undefined}>
          <OptimizedImage
            key={currentImage.src}
            src={currentImage.src}
            alt={currentImage.alt}
            className="home-slide"
            priority
            width={CAROUSEL_IMAGE_WIDTH}
            style={{
              objectFit: currentImage.contain ? 'contain' : 'cover',
              objectPosition: currentImage.position ?? 'center',
            }}
          />
        </div>

        {/* Visual ID tagline scrolling over the photos */}
        <div className="home-marquee" aria-hidden="true">
          <div className="home-marquee-track">
            {[0, 1].map((copy) => (
              <span key={copy} className="home-marquee-text">
                objects, spaces &amp; experiences&nbsp;&nbsp;&nbsp;objects, spaces &amp; experiences&nbsp;&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>

        <a className="home-scroll-hint" href="#works">Works ↓</a>
      </section>

      <WorksGrid />
    </PageShell>
  )
}

export default Home
