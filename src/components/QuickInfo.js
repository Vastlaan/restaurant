import React from "react"
import styles from "../styles/components/quickInfo.module.scss"

function QuickInfo({ children, suptitle, title }) {
  return (
    <div className={styles.info}>
      <h3>{suptitle}</h3>
      <h1>{title}</h1>
      <div></div>
    </div>
  )
}

export default QuickInfo
