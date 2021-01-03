import React from "react"
import PropTypes from "prop-types"
import SEO from "./seo"

import Header from "./header"
import "./layout.css"

const Layout : React.FC = ({ children }) => {
  return (
    <div id="main">
      <SEO title="Everyone Plays the Same Song"/>
      <Header/>
       {children}
     </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
