import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "error-seo-title" })} />
      <h1>{intl.formatMessage({ id: "error-title" })}</h1>
      <p>{intl.formatMessage({ id: "error-paragraph" })}</p>
    </Layout>
  )
}

export default NotFoundPage
