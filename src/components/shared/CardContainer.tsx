import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBBtn,
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
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardSubTitle>{subtitle}</MDBCardSubTitle>
        <MDBCardText>{text}</MDBCardText>
        <MDBBtn href={url} target="_blank">
          {urlText}
        </MDBBtn>
        {url2 && multipleUrls}
      </MDBCardBody>
    </MDBCard>
  )
}

export default CardContainer
