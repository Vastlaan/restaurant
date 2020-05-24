import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../images/header_contact.jpg"
import { HeaderPage } from "../components/globals/header"
import Banner from "../components/Banner"

function Contact() {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "contact-seo-title" })}
        description={intl.formatMessage({ id: "index-seo-description" })}
      />
      <HeaderPage img={HeaderImage}>
        <Banner
          title={intl.formatMessage({ id: "contact-title" })}
          subtitle={intl.formatMessage({ id: "contact-subtitle" })}
        />
      </HeaderPage>
    </Layout>
  )
}

export default Contact
