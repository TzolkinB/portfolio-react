import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBBadge,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit"
import type { Project } from "../../types"

const badge = (text: string) => (
  <MDBBadge className="project-badge me-2" light>
    {text}
  </MDBBadge>
)
// eslint-disable-next-line react/function-component-definition
const CardContainer = ({
  title,
  subtitle,
  description,
  url,
  urlText,
  url2,
  url2Text,
  badgeText,
  impactMetric,
}: Project) => {
  return (
    <MDBCard>
      <MDBCardBody data-testid={`card-${title}`}>
        <MDBCardTitle tag="h4" className="fs-4">
          {title}
        </MDBCardTitle>
        <MDBCardSubTitle tag="small">{subtitle}</MDBCardSubTitle>
        <MDBCardText className="pt-3 fw-light">{description}</MDBCardText>
        <MDBTypography note>
          <strong>{impactMetric}</strong>
          {/* <strong>Comprehensive resource</strong> for team onboarding */}
        </MDBTypography>
        <div className="mb-3">{badgeText.map((text) => badge(text))}</div>
        <MDBBtn href={url} target="_blank" rel="noopener noreferrer">
          {urlText}
        </MDBBtn>
        {url2 && url2Text && (
          <MDBBtn href={url2} target="_blank" className="ms-3">
            {url2Text}
          </MDBBtn>
        )}
      </MDBCardBody>
    </MDBCard>
  )
}

export default CardContainer
