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
  <MDBBadge key={text} className="project-badge me-2" light>
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
  impactMetricBold,
  impactMetricStandard,
}: Project) => {
  return (
    <MDBCard>
      <MDBCardBody data-testid={`card-${title}`}>
        <MDBCardTitle tag="h3" className="fw-bold mb-1">
          {title}
        </MDBCardTitle>
        <MDBCardSubTitle tag="small" className="mt-1 fw-bold">
          {subtitle}
        </MDBCardSubTitle>
        <MDBCardText className="pt-2 fw-light text-muted">
          {description}
        </MDBCardText>
        {impactMetricBold && impactMetricStandard && (
          <MDBTypography note>
            <strong>{impactMetricBold}</strong> {impactMetricStandard}
          </MDBTypography>
        )}
        <div className="mb-4">{badgeText.map((text) => badge(text))}</div>
        <div className="d-flex gap-3">
          <MDBBtn
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link link-primary fw-bold"
          >
            {urlText}
          </MDBBtn>
          {url2 && url2Text && (
            <MDBBtn
              href={url2}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-3 project-link link-secondary fw-bold"
            >
              {url2Text}
            </MDBBtn>
          )}
        </div>
      </MDBCardBody>
    </MDBCard>
  )
}

export default CardContainer
