import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/globals/navbar"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
