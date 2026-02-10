import { MDBFooter } from "mdb-react-ui-kit"

// eslint-disable-next-line react/function-component-definition
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <MDBFooter className="d-flex justify-content-between align-items-center">
      <div />
      <p className="mb-0 copyright text-gradient">
        &#169; {currentYear} Copyright Kim Bell
      </p>

      {/* Shared SVG with gradient definitions */}
      <svg style={{ display: "none" }} width="0" height="0">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#ffab00" />
          </linearGradient>
        </defs>
      </svg>

      <div className="footer-links pe-2">
        <a
          href="https://github.com/TzolkinB"
          aria-label="link to github"
          target="_blank"
          rel="noreferrer"
          className="px-2 footer-link"
        >
          <svg className="footer-icon" viewBox="0 0 128 128">
            <path
              className="icon-path"
              fill="currentColor"
              d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.743 17.343 49.52 41.191 57.537 3.014.557 4.126-1.305 4.126-2.905 0-1.439-.056-6.197-.086-11.977-16.753 3.653-20.255-8.153-20.255-8.153-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.671.413-3.671 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C54.971 35.896 59.547 34.56 64 34.52c4.455.04 9.042 1.376 13.273 4.073 11.532-7.813 16.588-6.19 16.588-6.19 3.287 8.317 1.220 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.8-8.023 41.164-30.825 41.164-57.529 0-33.353-27.04-60.388-60.388-60.388z"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/kimbell4"
          aria-label="link to linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 footer-link"
        >
          <svg className="footer-icon" viewBox="0 0 128 128">
            <path
              className="icon-path"
              fill="currentColor"
              d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
            />
            <path
              fill="#0d1a2e"
              d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
            />
          </svg>
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer
