import React from "react"
import { Link } from "gatsby"
import { RiMenu4Line } from "react-icons/ri"

function NavbarHeader({ styles, setOpen }) {
  return (
    <div className={styles.header}>
      <Link to="/">La Casa</Link>
      <RiMenu4Line
        className={styles.header__icon}
        onClick={() => setOpen(prevState => !prevState)}
      />
    </div>
  )
}

export default NavbarHeader
