import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../images/header_about.jpg"
import { HeaderPage } from "../components/globals/header"
import Banner from "../components/Banner"

function About() {
  return (
    <Layout>
      <SEO title={"About"} />
      <HeaderPage img={HeaderImage}>
        <Banner title={"La Casa"} subtitle={"You are part of our story"} />
      </HeaderPage>
    </Layout>
  )
}

export default About
