import React from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
import getSiteMetadata from "../hooks/getSiteMetadata"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const {description, title} = getSiteMetadata();
  return (
    <div id="main">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Header/>
       {children}
     </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
