import { MDBTypography, MDBIcon, MDBBtn } from "mdb-react-ui-kit"

import type {
  BadgeConfig,
  SocialLinksProps,
  FooterLinksProps,
} from "types/types"

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
 * Creates a badge with icon and text
 * @param icon - Icon class name (e.g., "fas fa-check")
 * @param text - Badge text content
 * @returns JSX badge element
 */
export function badge({ icon, text }: BadgeConfig): JSX.Element {
  return (
    <div
      className="badge square border rounded-2 skill-badge"
      role="status"
      aria-label={text}
    >
      <MDBIcon className={`${icon} me-1`} aria-hidden="true" />
      <span>{text}</span>
    </div>
  )
}

/**
 * Creates experience statistics display
 * @param years - Number of years experience
 * @param text - Descriptive text (e.g., "Years Experience")
 * @returns JSX stat element
 */
export function experienceStats(years: number, text: string): JSX.Element {
  return (
    // <div>
    <div className="stat-item" role="status" aria-label={`${years}+ ${text}`}>
      <MDBTypography tag="div" className="display-4 mb-0 years text-gradient">
        {years}+
      </MDBTypography>
      <MDBTypography className="text-muted small">{text}</MDBTypography>
    </div>
  )
}

/**
 *  Renders social media links as buttons with icons
 * @param links - Array of social link objects containing href, icon, label, and backgroundColor
 * @returns JSX social button elements
 */
export function SocialLinks({ links }: SocialLinksProps): JSX.Element {
  return (
    <div className="social-links-container">
      {links.map((link) => (
        <MDBBtn
          key={link.href}
          tag="a"
          href={link.href}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
          className="m-1 social-btn"
          style={{ backgroundColor: link.backgroundColor }}
        >
          <MDBIcon fab icon={link.icon} />
        </MDBBtn>
      ))}
    </div>
  )
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
