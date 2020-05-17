import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../images/header_home.jpg"
import { HeaderHome } from "../components/globals/header"
import Banner from "../components/Banner"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeaderHome img={HeaderImage}>
        <Banner title={"La Casa"} subtitle={"Feel at home"}>
          <Link to="/menu">Menu</Link>
        </Banner>
      </HeaderHome>
    </Layout>
  )
}

export default IndexPage
