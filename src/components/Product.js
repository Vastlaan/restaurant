import React from "react"
import Image from "gatsby-image"
import styles from "../styles/components/product.module.scss"

export default function Product({ item }) {
  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <Image fluid={item.image.fluid} alt="food" />
      </div>

      <div className={styles.product__main}>
        <h3>{item.name}</h3>
        <div>
          <h4>{item.ingredients.ingredients} </h4>
          <span>&euro; {item.price.toFixed(2)}</span>
        </div>
        <p className={styles.product__alergens}>Allergens: {item.alergens}</p>
      </div>
    </div>
  )
}
