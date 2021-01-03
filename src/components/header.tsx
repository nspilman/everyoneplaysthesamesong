import { Link } from "gatsby"
import React, { ReactElement } from "react"
import getSignupLink from "../hooks/getSignupLink"
 
const learnMoreLink : string = '/everyone-plays-the-same-song';

const Header = (): ReactElement => {
  const signupLink : string = getSignupLink();
  return (
    <header id ="header">
    <div className="menu-wrap">
        <input type="checkbox" className="toggler"/>
        <div className="hamburger"><div></div></div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to={learnMoreLink}>Learn More</Link>
                </li>
                <li>
                  <a href={signupLink}>Sign Up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </header>
  )
}

export default Header
