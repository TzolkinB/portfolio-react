import { MDBTypography } from "mdb-react-ui-kit"

export const capitalizeFirstLetter = (string: string) => {
  if (!string) {
    // Handle null, undefined, or empty strings
    return string
  }
  return `${string[0].toUpperCase()}${string.slice(1)}`
}

export const badge = (icon: string, text: string) => {
  return (
    <div
      className="badge square border rounded-2"
      style={{ padding: "6px 10px" }}
    >
      <i className={`${icon} me-1`} />
      {text}
    </div>
  )
}

export const experienceStats = (years: number, text: string) => {
  return (
    <div>
      <MDBTypography tag="div" className="display-4 mb-0 years text-gradient">
        {years}+
      </MDBTypography>
      <MDBTypography className="text-muted small">{text}</MDBTypography>
    </div>
  )
}
