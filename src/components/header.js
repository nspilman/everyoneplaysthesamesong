import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const learnMoreLink = '/everyone-plays-the-same-song'

const Header = ({ siteTitle }) => (
  <header id ="header">
  <div class="menu-wrap">
      <input type="checkbox" class="toggler"/>
      <div class="hamburger"><div></div></div>
      <div class="menu">
        <div>
          <div>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link to={learnMoreLink}>Learn More</Link></li>
              <li><Link  href="https://docs.google.com/forms/d/e/1FAIpQLSf6eDCvqQcD_VVlmg7x-Xk5d9Xgnk4bPBpWbX3_pkYI3R2OuA/viewform">Sign Up</Link></li>
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
