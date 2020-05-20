import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../images/header_menu.jpg"
import { HeaderPage } from "../components/globals/header"
import Banner from "../components/Banner"
import MenuComponent from "../components/Menu"
import Section from "../components/Section"
import QuickInfo from "../components/QuickInfo"

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
      <Section>
        <QuickInfo title="menu" />
      </Section>
      <MenuComponent />
    </Layout>
  )
}

export default Menu
