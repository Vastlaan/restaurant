import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../images/header_menu.jpg"
import { HeaderPage } from "../components/globals/header"
import Banner from "../components/Banner"
import MenuComponent from "../components/Menu"
import Section from "../components/Section"
import QuickInfo from "../components/QuickInfo"

function Menu() {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "menu-seo-title" })}
        description={intl.formatMessage({ id: "index-seo-description" })}
      />
      <HeaderPage img={HeaderImage}>
        <Banner
          title={intl.formatMessage({ id: "menu-title" })}
          subtitle={intl.formatMessage({ id: "menu-subtitle" })}
        />
      </HeaderPage>
      <Section>
        <QuickInfo title={intl.formatMessage({ id: "menu-quick-info-1" })} />
      </Section>
      <MenuComponent />
    </Layout>
  )
}

export default Menu
