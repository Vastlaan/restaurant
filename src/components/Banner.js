import React from "react"
import styles from "../styles/components/banner.module.scss"

export default function Banner({ children, title, subtitle }) {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      {children}
    </div>
  )
}
