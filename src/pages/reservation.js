import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../images/header_about.jpg"
import { HeaderPage } from "../components/globals/header/header"
import Banner from "../components/Banner"
import Section from "../components/Section"
import QuickInfo from "../components/QuickInfo"
import ReservationComponent from "../components/ReservationComponent"

function Reservation() {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "reservation-seo-title" })}
        description={intl.formatMessage({ id: "index-seo-description" })}
      />
      <HeaderPage img={HeaderImage}>
        <Banner
          title={intl.formatMessage({ id: "reservation-title" })}
          subtitle={intl.formatMessage({ id: "reservation-subtitle" })}
        />
      </HeaderPage>
      <Section>
        <QuickInfo
          title={intl.formatMessage({ id: "reservation-quickInfo-title" })}
          suptitle={intl.formatMessage({
            id: "reservation-quickInfo-suptitle",
          })}
        />
      </Section>
      <ReservationComponent />
    </Layout>
  )
}

export default Reservation
