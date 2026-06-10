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
    }, 1600)

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
      <OptimizedImage
        key={currentImage.src}
        src={currentImage.src}
        alt={currentImage.alt}
        className="carousel-image"
        priority
        width={CAROUSEL_IMAGE_WIDTH}
        style={{
          height: currentImage.src.includes('IMG-9597') ? '75%' : '70%',
        }}
      />

      <div className="carousel-indicators">
        {homeCarouselImages.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setCurrentImageIndex(index)}
            className={`carousel-indicator ${index === currentImageIndex ? 'is-active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </PageShell>
  )
}

export default Home
