import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../images/header_menu.jpg"
import { HeaderPage } from "../components/globals/header"
import Banner from "../components/Banner"

function Menu() {
  return (
    <Layout>
      <SEO title={"Menu"} />
      <HeaderPage img={HeaderImage}>
        <Banner
          title={"La Casa"}
          subtitle={"Unforgettable cullinar experience"}
        />
      </HeaderPage>
    </Layout>
  )
}

export default Menu
