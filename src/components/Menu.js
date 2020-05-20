import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Product from "./Product"
import styles from "../styles/components/menu.module.scss"

export default function Menu() {
  const data = useStaticQuery(graphql`
    {
      allContentfulMenu {
        edges {
          node {
            id
            name
            price
            alergens
            ingredients {
              ingredients
            }
            image {
              fluid {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const {
    allContentfulMenu: { edges },
  } = data
  return (
    <section className={styles.menu}>
      {edges.map(item => {
        return <Product key={item.node.id} item={item.node} />
      })}
    </section>
  )
}
