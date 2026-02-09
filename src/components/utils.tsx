import { MDBTypography, MDBIcon } from "mdb-react-ui-kit"
import type { BadgeConfig } from "types"

/**
 * Capitalizes the first letter of a string
 * @param string - String to capitalize
 * @returns Capitalized string or original if empty/null/undefined
 */
export const capitalizeFirstLetter = (string: string): String => {
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
export const badge = ({ icon, text }: BadgeConfig): JSX.Element => {
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
export const experienceStats = (years: number, text: string): JSX.Element => {
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
