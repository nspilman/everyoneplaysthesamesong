import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SignupButton from "./signupButton"

const learnMoreLink = '/everyone-plays-the-same-song'

const Header = ({ siteTitle }) => (
  <header id ="header">
  <div className="menu-wrap">
      <input type="checkbox" className="toggler"/>
      <div className="hamburger"><div></div></div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link to={learnMoreLink}>Learn More</Link></li>
              <li>
              <SignupButton/>
                </li>
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
