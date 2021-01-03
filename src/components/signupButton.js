import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import getSignupLink from "../hooks/getSignupLink"

const SignupButton = () => {
    const signupLink = getSignupLink();

    return (
        <a target="_blank"
            rel="noreferrer"
            href={signupLink}>
            <button className="button-primary">Sign Up</button>
        </a>
    )
}

export default SignupButton