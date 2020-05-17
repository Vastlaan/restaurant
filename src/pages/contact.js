import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../images/header_contact.jpg"
import { HeaderPage } from "../components/globals/header"
import Banner from "../components/Banner"

function Contact() {
  return (
    <Layout>
      <SEO title={"Contact"} />
      <HeaderPage img={HeaderImage}>
        <Banner title={"La Casa"} subtitle={"We are for your disposal"} />
      </HeaderPage>
    </Layout>
  )
}

export default Contact
