import { useEffect, useState } from 'react'
import PageShell from '../components/PageShell'
import OptimizedImage from '../components/OptimizedImage'
import { getOptimizedImageUrl } from '../utils/imageOptimization'
import { homeCarouselImages } from '../data/projects'

const CAROUSEL_IMAGE_WIDTH = 1920

const Home = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    document.body.classList.add('home-fixed')
    return () => {
      document.body.classList.remove('home-fixed')
    }
  }, [])

  return (
    <PageShell className="main-container home-page" contentClassName="carousel-container content-area">
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
      <div className="home-marquee" aria-label="Objects, spaces & experiences">
        <div className="home-marquee-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <span key={copy} className="home-marquee-text">
              objects, spaces &amp; experiences&nbsp;&nbsp;&nbsp;objects, spaces &amp; experiences&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </PageShell>
  )
}

export default Home
