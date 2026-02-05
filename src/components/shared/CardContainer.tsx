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
  text: string
  url: string
  urlText: string
  url2?: string
  url2Text?: string
}

// eslint-disable-next-line react/function-component-definition
const CardContainer = (props: CardProps) => {
  const { title, subtitle, text, url, urlText, url2, url2Text } = props

  const multipleUrls = (
    <MDBBtn href={url2} target="_blank" className="ms-3">
      {url2Text}
    </MDBBtn>
  )

  return (
    <MDBCard>
      <MDBCardBody data-testid={`card-${title}`}>
        <MDBCardTitle tag="h4" className="fs-4">
          {title}
        </MDBCardTitle>
        <MDBCardSubTitle tag="small">{subtitle}</MDBCardSubTitle>
        <MDBCardText className="pt-3 fw-light">{text}</MDBCardText>
        <MDBTypography note noteColor="info">
          <strong>Comprehensive resource</strong> for team onboarding
        </MDBTypography>
        <div className="mb-3">
          <MDBBadge className="text-dark" color="light" light>
            Light
          </MDBBadge>
        </div>
        <MDBBtn href={url} target="_blank">
          {urlText}
        </MDBBtn>
        {url2 && multipleUrls}
      </MDBCardBody>
    </MDBCard>
  )
}

export default CardContainer
