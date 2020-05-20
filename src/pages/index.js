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
  const [quickInfo1] = useState({
    title: "Our story",
    suptitle: "let us tell you",
    paragraph:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporaodit distinctio veniam fugiat sunt cum illo repudiandae, nobis tempore accusantium excepturi architecto in aliquam, rerum enim aliquid iusto voluptas perferendis. Ea non inventore distinctio laudantium eveniet corrupti quam mollitia.",
    link: "about",
  })
  const [quickInfo2] = useState({
    title: "Outstanding dishes",
    suptitle: "take a look at our",
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
        <QuickInfo suptitle={quickInfo1.suptitle} title={quickInfo1.title} />
        <p>{quickInfo1.paragraph}</p>
        <Link to={`/${quickInfo1.link}`}>{quickInfo1.link}</Link>
      </Section>
      <Section>
        <Gallery></Gallery>
      </Section>
      <Section>
        <QuickInfo suptitle={quickInfo2.suptitle} title={quickInfo2.title} />
        <p>{quickInfo2.paragraph}</p>
        <Link to="/menu">More</Link>
      </Section>
    </Layout>
  )
}

export default IndexPage
