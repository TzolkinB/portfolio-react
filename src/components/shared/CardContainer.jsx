import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

const CardContainer = props => {
  const { 
    title, subtitle, text,
    url, urlText, url2, url2Text
  } = props;

  const multipleUrls = () => {
    if(url2) {
      return <MDBBtn href={url2} target="_blank">{url2Text}</MDBBtn>

    }
    return;
  }

  return (
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardSubTitle>{subtitle}</MDBCardSubTitle>
        <MDBCardText>{text}</MDBCardText>
        <MDBBtn href={url} target="_blank">{urlText}</MDBBtn>
        {multipleUrls()}
      </MDBCardBody>
    </MDBCard>
  );
}

export default CardContainer;
