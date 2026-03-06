import { useEffect, useRef } from 'react'

export default function RevealOnScroll({
  as: Tag = 'div',
  children,
  className,
  selector = '[data-reveal]',
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
  staggerStep = 70,
}) {
  const scopeRef = useRef(null)

  useEffect(() => {
    const scope = scopeRef.current
    if (!scope) return

    const elements = Array.from(scope.querySelectorAll(selector))
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          } else {
            entry.target.classList.remove('revealed')
          }
        })
      },
      { threshold, rootMargin },
    )

    elements.forEach((element, index) => {
      if (!element.style.getPropertyValue('--d')) {
        element.style.setProperty('--d', `${(index % 6) * staggerStep}ms`)
      }
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [rootMargin, selector, staggerStep, threshold])

  return (
    <Tag ref={scopeRef} className={className}>
      {children}
    </Tag>
  )
}
