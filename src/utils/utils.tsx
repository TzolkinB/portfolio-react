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
 * @param links - Array of footer link objects containing href, label
 * @returns JSX list of footer text links
 * External links (GitHub, LinkedIn) open in a new tab; mailto links open the
 * visitor's mail client in the current tab instead.
 */
export function FooterLinks({ links }: FooterLinksProps) {
  return (
    <ul className="footer-links" role="list">
      {links.map((link) => {
        const isMailto = link.href.startsWith("mailto:")

        return (
          <li key={link.href}>
            <a
              href={link.href}
              className="footer-link"
              target={isMailto ? undefined : "_blank"}
              rel={isMailto ? undefined : "noreferrer"}
            >
              {link.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
