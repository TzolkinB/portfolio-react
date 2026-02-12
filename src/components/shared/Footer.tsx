import { MDBFooter } from "mdb-react-ui-kit"

import { footerLinks } from "../../constants/appData"
import { FooterLinks } from "../../utils/utils"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <MDBFooter className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center pt-2">
        <div />
        <p className="mb-0 copyright text-gradient">
          &#169; {currentYear} Copyright Kim Bell
        </p>
        <FooterLinks links={footerLinks} />
      </div>
      <p className="privacy-notice mb-0 pt-2 text-muted ps-2 text-center">
        This site uses Google Analytics with privacy protections to understand
        visitor traffic.
      </p>
    </MDBFooter>
  )
}

export default Footer
