import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Product from "./Product"
import styles from "../styles/components/menu.module.scss"
import { useIntl } from "gatsby-plugin-intl"

export default function Menu() {
  const locale = useIntl().locale

  const data = useStaticQuery(graphql`
    {
      menuNl: allContentfulMenu(filter: { node_locale: { eq: "nl" } }) {
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
      menuEn: allContentfulMenu(filter: { node_locale: { eq: "en-US" } }) {
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

  return (
    <section className={styles.menu}>
      {locale === "nl"
        ? data.menuNl.edges.map(item => {
            return <Product key={item.node.id} item={item.node} />
          })
        : data.menuEn.edges.map(item => {
            return <Product key={item.node.id} item={item.node} />
          })}
    </section>
  )
}
