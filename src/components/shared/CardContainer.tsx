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

type CardProps = {
  title: string
  subtitle: string
  description: string
  url: string
  urlText: string
  badgeText: string[]
  url2?: string
  url2Text?: string
}

// eslint-disable-next-line react/function-component-definition
const CardContainer = (props: CardProps) => {
  const {
    title,
    subtitle,
    description,
    url,
    urlText,
    url2,
    url2Text,
    badgeText,
  } = props

  const multipleUrls = (
    <MDBBtn href={url2} target="_blank" className="ms-3">
      {url2Text}
    </MDBBtn>
  )

  const badge = (text: string) => (
    <MDBBadge className="text-dark me-2" color="light" light>
      {text}
    </MDBBadge>
  )

  return (
    <MDBCard>
      <MDBCardBody data-testid={`card-${title}`}>
        <MDBCardTitle tag="h4" className="fs-4">
          {title}
        </MDBCardTitle>
        <MDBCardSubTitle tag="small">{subtitle}</MDBCardSubTitle>
        <MDBCardText className="pt-3 fw-light">{description}</MDBCardText>
        <MDBTypography note noteColor="info">
          <strong>Comprehensive resource</strong> for team onboarding
        </MDBTypography>
        <div className="mb-3">{badgeText.map((text) => badge(text))}</div>
        <MDBBtn href={url} target="_blank">
          {urlText}
        </MDBBtn>
        {url2 && multipleUrls}
      </MDBCardBody>
    </MDBCard>
  )
}

export default CardContainer
