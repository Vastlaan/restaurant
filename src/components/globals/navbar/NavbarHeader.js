import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import { RiMenu4Line } from "react-icons/ri"

function NavbarHeader({ styles, setOpen }) {
  const intl = useIntl()
  return (
    <div className={styles.header}>
      <Link to="/">{intl.formatMessage({ id: "navbar-header-logo" })}</Link>
      <RiMenu4Line
        className={styles.header__icon}
        onClick={() => setOpen(prevState => !prevState)}
      />
    </div>
  )
}

export default NavbarHeader
