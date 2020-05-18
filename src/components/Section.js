import React from "react"
import styles from "../styles/components/section.module.scss"

function Section({ children }) {
  return <section className={styles.section}>{children}</section>
}

export default Section
