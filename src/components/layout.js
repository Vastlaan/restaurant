import React, { useReducer } from "react"
import PropTypes from "prop-types"
import Navbar from "../components/globals/navbar"
import Footer from "../components/globals/Footer"
import "../styles/base.module.scss"

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
