import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import Image from "gatsby-image"
import styles from "../styles/components/gallery.module.scss"

function Gallery() {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        totalCount
        edges {
          node {
            id
            name
            image: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const intl = useIntl()
  return (
    <div className={styles.gallery}>
      {data.allFile.edges.map((item, i) => {
        return (
          <div key={item.node.id} className={styles.container}>
            <Image fluid={item.node.image.fluid} alt={item.node.name} />
            <p className={styles.info}>
              {intl.formatMessage({ id: "gallery-prefix" })}{" "}
              {item.node.name.split(".")[0]}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
