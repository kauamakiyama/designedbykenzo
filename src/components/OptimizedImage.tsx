import type { CSSProperties, ImgHTMLAttributes, SyntheticEvent } from 'react'

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean
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
  ...props
}: OptimizedImageProps) => {
  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.display = 'none'
    onError?.(event)
  }

  return (
    <img
      {...props}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      decoding={decoding}
      fetchPriority={fetchPriority ?? (priority ? 'high' : 'low')}
      style={{ ...baseStyle, ...style }}
      onError={handleError}
    />
  )
}

export default OptimizedImage
