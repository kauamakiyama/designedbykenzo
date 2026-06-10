import type { CSSProperties, ImgHTMLAttributes, SyntheticEvent } from 'react'
import { getOptimizedImageUrl } from '../utils/imageOptimization'

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean
  width?: number
}

const baseStyle: CSSProperties = {
  display: 'block',
}

const OptimizedImage = ({
  priority = false,
  loading,
  decoding = 'async',
  fetchPriority,
  style,
  onError,
  src,
  width,
  ...props
}: OptimizedImageProps) => {
  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.display = 'none'
    onError?.(event)
  }

  return (
    <img
      {...props}
      src={typeof src === 'string' ? getOptimizedImageUrl(src, width) : src}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      decoding={decoding}
      fetchPriority={fetchPriority ?? (priority ? 'high' : 'low')}
      style={{ ...baseStyle, ...style }}
      onError={handleError}
    />
  )
}

export default OptimizedImage
