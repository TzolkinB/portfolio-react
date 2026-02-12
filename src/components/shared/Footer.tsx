import { MDBFooter } from "mdb-react-ui-kit"
import { FooterLinks } from "../../utils/utils"
import { footerLinks } from "../../constants/appData"

// eslint-disable-next-line react/function-component-definition
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <MDBFooter className="d-flex justify-content-between align-items-center">
      <div />
      <p className="mb-0 copyright text-gradient">
        &#169; {currentYear} Copyright Kim Bell
      </p>
      <FooterLinks links={footerLinks} />
    </MDBFooter>
  )
}

export default Footer
