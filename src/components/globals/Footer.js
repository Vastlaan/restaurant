import React from "react"
import Icons from "./Icons"
import styles from "../../styles/components/footer.module.scss"

function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>La Casa</h1>
      <Icons styles={styles} />
      <p>
        &copy; {new Date().getFullYear()} This website has been designed by
        <a href="https://www.michalantczak.com">Michal Antczak</a>.
      </p>
    </footer>
  )
}

export default Footer
