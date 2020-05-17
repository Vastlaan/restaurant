import React from "react"
import styles from "../../../styles/components/header.module.scss"
//just to pass to default props
import HeaderImage from "../../../images/header_home.jpg"

function HeaderHome({ children, img }) {
  const inlineStyles = {
    backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${img})`,
  }
  return (
    <header className={styles.header} style={inlineStyles}>
      {children}
    </header>
  )
}
function HeaderPage({ children, img }) {
  const inlineStyles = {
    backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${img})`,
    minHeight: "60vh",
  }
  return (
    <header style={inlineStyles} className={styles.header}>
      {children}
    </header>
  )
}

//setting up default props
HeaderHome.defaultProps = {
  img: HeaderImage,
}
HeaderPage.defaultProps = {
  img: HeaderImage,
}

export { HeaderHome, HeaderPage }
