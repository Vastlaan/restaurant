import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../images/header_home.jpg"
import { HeaderHome } from "../components/globals/header"
import Banner from "../components/Banner"
import Section from "../components/Section"
import QuickInfo from "../components/QuickInfo"
import Gallery from "../components/Gallery"

const IndexPage = () => {
  const [banner] = useState({
    title: "La Casa",
    subtitle: "Feel at home",
    link: "menu",
  })
  const [quickInfo] = useState({
    title: "Our story",
    suptitle: "let us tell you",
    paragraph:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporaodit distinctio veniam fugiat sunt cum illo repudiandae, nobis tempore accusantium excepturi architecto in aliquam, rerum enim aliquid iusto voluptas perferendis. Ea non inventore distinctio laudantium eveniet corrupti quam mollitia.",
    link: "about",
  })

  return (
    <Layout>
      <SEO title="Home" />
      <HeaderHome img={HeaderImage}>
        <Banner title={banner.title} subtitle={banner.subtitle}>
          <Link to={`/${banner.link}`}>{banner.link}</Link>
        </Banner>
      </HeaderHome>
      <Section>
        <QuickInfo suptitle={quickInfo.suptitle} title={quickInfo.title} />
        <p>{quickInfo.paragraph}</p>
        <Link to={`/${quickInfo.link}`}>{quickInfo.link}</Link>
      </Section>
      <Section>
        <Gallery></Gallery>
      </Section>
    </Layout>
  )
}

export default IndexPage
