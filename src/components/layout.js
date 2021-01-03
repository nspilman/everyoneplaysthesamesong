import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allState {
    edges {
      node {
        id
        currentPhase
        mailingList
        signupSheet
        Round
      }
    }
  }
    }
  `)

  return (
    <div id="main">
      <Header/>
       {children}
     </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
