import type { FooterLinksProps } from "types/types"

/**
 * Capitalizes the first letter of a string
 * @param string - String to capitalize
 * @returns Capitalized string or original if empty/null/undefined
 */
export function capitalizeFirstLetter(string: string): string {
  if (!string) {
    return string
  }
  return `${string[0].toUpperCase()}${string.slice(1)}`
}

/**
 * Tech Link component
 * @param href - URL to link to
 * @param children - Link content (e.g., icon or text)
 * @returns JSX anchor element that opens in a new tab
 */
export function TechLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

/**
 * Footer Links component
 * @param links - Array of footer link objects containing href, ariaLabel, svgPath
 * @returns JSX anchor elements with SVG icons for footer links
 * Each link opens in a new tab and has appropriate aria-labels for accessibility
 */
export function FooterLinks({ links }: FooterLinksProps) {
  return (
    <div className="footer-links pe-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          aria-label={link.ariaLabel}
          target="_blank"
          rel="noreferrer"
          className="px-2 footer-link"
        >
          <svg className="footer-icon" viewBox="0 0 128 128">
            <defs>
              <linearGradient
                id="iconGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="100%" stopColor="#ffab00" />
              </linearGradient>
            </defs>
            <path className="icon-path" fill="currentColor" d={link.svgPath} />
          </svg>
        </a>
      ))}
    </div>
  )
}
