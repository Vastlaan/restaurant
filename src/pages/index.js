import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../images/header_home.jpg"
import { HeaderHome } from "../components/globals/header"
import Banner from "../components/Banner"
import Section from "../components/Section"
import QuickInfo from "../components/QuickInfo"
import Gallery from "../components/Gallery"

const IndexPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "index-seo-title" })}
        description={intl.formatMessage({ id: "index-seo-description" })}
      />
      <HeaderHome img={HeaderImage}>
        <Banner
          title={intl.formatMessage({ id: "index-baner-title" })}
          subtitle={intl.formatMessage({ id: "index-baner-subtitle" })}
        >
          <Link to="/reservation">
            {intl.formatMessage({ id: "index-baner-link" })}
          </Link>
        </Banner>
      </HeaderHome>
      <Section>
        <QuickInfo
          suptitle={intl.formatMessage({ id: "index-quick-info-1-suptitle" })}
          title={intl.formatMessage({ id: "index-quick-info-1-title" })}
        />
        <p>{intl.formatMessage({ id: "index-quick-info-1-paragraph" })}</p>
        <Link to="/contact">
          {intl.formatMessage({ id: "index-quick-info-1-link" })}
        </Link>
      </Section>
      <Section>
        <Gallery />
      </Section>
      <Section>
        <QuickInfo
          suptitle={intl.formatMessage({ id: "index-quick-info-2-suptitle" })}
          title={intl.formatMessage({ id: "index-quick-info-2-title" })}
        />
        <p>{intl.formatMessage({ id: "index-quick-info-2-paragraph" })}</p>
        <Link to="/menu">
          {intl.formatMessage({ id: "index-quick-info-2-link" })}
        </Link>
      </Section>
    </Layout>
  )
}

export default IndexPage
