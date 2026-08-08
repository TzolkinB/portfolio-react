import {
  footerContent,
  footerLinks,
  heroContent,
} from "../../constants/appData"
import { FooterLinks } from "../../utils/utils"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <h2 className="prompt">
        <span className="prompt-symbol" aria-hidden="true">
          $
        </span>{" "}
        {footerContent.heading}
      </h2>

      <FooterLinks links={footerLinks} />

      <p className="footer-privacy">{footerContent.privacyNotice}</p>

      <p className="footer-copyright">
        &#169; {currentYear} {heroContent.name}
      </p>
    </footer>
  )
}

export default Footer
