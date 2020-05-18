import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../images/header_home.jpg"
import { HeaderHome } from "../components/globals/header"
import Banner from "../components/Banner"
import Section from "../components/Section"
import QuickInfo from "../components/QuickInfo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeaderHome img={HeaderImage}>
        <Banner title={"La Casa"} subtitle={"Feel at home"}>
          <Link to="/menu">Menu</Link>
        </Banner>
      </HeaderHome>
      <Section>
        <QuickInfo suptitle={"let us tell you"} title={"Our story"} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempora
          odit distinctio veniam fugiat sunt cum illo repudiandae, nobis tempore
          accusantium excepturi architecto in aliquam, rerum enim aliquid iusto
          voluptas perferendis. Ea non inventore distinctio laudantium eveniet
          corrupti quam mollitia.
        </p>
        <Link to="/about">About</Link>
      </Section>
    </Layout>
  )
}

export default IndexPage
