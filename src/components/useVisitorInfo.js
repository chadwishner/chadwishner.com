import { useState, useEffect } from 'react'

function parseBrowser(ua) {
  if (ua.includes('Firefox/')) return 'Firefox'
  if (ua.includes('Edg/')) return 'Edge'
  if (ua.includes('OPR/') || ua.includes('Opera/')) return 'Opera'
  if (ua.includes('Chrome/') && ua.includes('Safari/')) return 'Chrome'
  if (ua.includes('Safari/') && !ua.includes('Chrome/')) return 'Safari'
  return 'Unknown'
}

function parseOS(ua) {
  if (ua.includes('Mac OS X')) return 'macOS'
  if (ua.includes('Windows')) return 'Windows'
  if (ua.includes('Linux')) return 'Linux'
  if (ua.includes('Android')) return 'Android'
  if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS'
  return 'Unknown'
}

export function useVisitorInfo() {
  const [info, setInfo] = useState(() => {
    const ua = navigator.userAgent
    return {
      ip: null,
      browser: parseBrowser(ua),
      os: parseOS(ua),
    }
  })

  useEffect(() => {
    const controller = new AbortController()
    fetch('https://api.ipify.org?format=json', { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        setInfo((prev) => ({ ...prev, ip: data.ip }))
      })
      .catch(() => {
        // Silently fail — IP just won't show
      })
    return () => controller.abort()
  }, [])

  return info
}
