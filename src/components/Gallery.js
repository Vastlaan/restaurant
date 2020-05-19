import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styles from "../styles/components/gallery.module.scss"

function Gallery({ galleryImages }) {
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
  return (
    <div className={styles.gallery}>
      {data.allFile.edges.map((item, i) => {
        return (
          <div key={item.node.id} className={styles.container}>
            <Image fluid={item.node.image.fluid} alt={item.node.name} />
            <p className={styles.info}>
              Awesome {item.node.name.split(".")[0]}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
