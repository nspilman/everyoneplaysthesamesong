import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id ="header">
  <div class="menu-wrap">
      <input type="checkbox" class="toggler"/>
      <div class="hamburger"><div></div></div>
      <div class="menu">
        <div>
          <div>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="./learn-more">Learn More</a></li>
              <li><a target="blank" rel="noopener" href="https://docs.google.com/forms/d/e/1FAIpQLSf6eDCvqQcD_VVlmg7x-Xk5d9Xgnk4bPBpWbX3_pkYI3R2OuA/viewform">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
