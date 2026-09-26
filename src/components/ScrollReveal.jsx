import { useEffect, useRef, useState } from 'react'

const ScrollReveal = ({ children, className = '', delay = 0 }) => {
  const elementRef = useRef(null)
  const [visible, setVisible] = useState(() =>
    typeof window === 'undefined' ||
    !('IntersectionObserver' in window) ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const element = elementRef.current

    if (!element || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.1)
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${className}`}
      data-visible={visible}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
