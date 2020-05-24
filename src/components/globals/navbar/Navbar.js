import React, { useState } from "react"
import styles from "../../../styles/components/navbar.module.scss"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"

import NavbarIcons from "../../Icons"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <NavbarHeader styles={styles} setOpen={setOpen} />
      <NavbarLinks styles={styles} open={open} />
      <NavbarIcons styles={styles} />
    </nav>
  )
}

export default Navbar
