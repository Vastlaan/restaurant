import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/globals/navbar"
import Footer from "../components/globals/Footer"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
