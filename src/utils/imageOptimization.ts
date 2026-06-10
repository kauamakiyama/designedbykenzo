const OPTIMIZABLE_HOSTS = new Set(['i.ibb.co'])

/**
 * Routes images through wsrv.nl to resize and re-encode them as WebP.
 * Several source images (uploaded at full camera/export resolution) weigh
 * 5-28MB despite being displayed at a few hundred px wide - this is the
 * main cause of slow/blurry-then-sharp image loads across the site.
 */
export const getOptimizedImageUrl = (src: string, width = 1920) => {
  try {
    const url = new URL(src)
    if (!OPTIMIZABLE_HOSTS.has(url.hostname)) return src

    const target = `${url.hostname}${url.pathname}${url.search}`
    return `https://wsrv.nl/?url=${encodeURIComponent(target)}&w=${width}&output=webp&q=80`
  } catch {
    return src
  }
}
