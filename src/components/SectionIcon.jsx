export default function SectionIcon({ name, className = 'section-icon' }) {
  const shared = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  if (name === 'skills') {
    return (
      <svg {...shared}>
        <path d="M5 8h14" />
        <path d="M7 4h10" />
        <path d="M8 12h8" />
        <path d="M9 16h6" />
        <path d="M10 20h4" />
      </svg>
    )
  }

  if (name === 'experience') {
    return (
      <svg {...shared}>
        <rect x="3.5" y="7" width="17" height="12.5" rx="2.5" />
        <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
        <path d="M3.5 12h17" />
      </svg>
    )
  }

  if (name === 'publications') {
    return (
      <svg {...shared}>
        <path d="M5 4.5h10a3 3 0 0 1 3 3v12H8a3 3 0 0 0-3 3V4.5Z" />
        <path d="M8 19.5h11" />
        <path d="M8 9h7" />
        <path d="M8 12h7" />
      </svg>
    )
  }

  if (name === 'projects') {
    return (
      <svg {...shared}>
        <rect x="3.5" y="5" width="17" height="14.5" rx="2.5" />
        <path d="M8.5 10.5 6.5 12l2 1.5" />
        <path d="M15.5 10.5 17.5 12l-2 1.5" />
        <path d="M12.8 9.7 11.2 14.3" />
      </svg>
    )
  }

  if (name === 'impact') {
    return (
      <svg {...shared}>
        <path d="M4 18h16" />
        <path d="m6.5 14.5 3.2-3.2 2.7 2.7 4.9-4.9" />
        <path d="M15.8 9.1h3.5v3.5" />
      </svg>
    )
  }

  if (name === 'contact') {
    return (
      <svg {...shared}>
        <rect x="3.5" y="6" width="17" height="12.5" rx="2.5" />
        <path d="m4.5 8 7.5 5.5L19.5 8" />
      </svg>
    )
  }

  return null
}
