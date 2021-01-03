import React, { ReactElement } from "react"
import getSignupLink from "../hooks/getSignupLink"

const SignupButton = () : ReactElement => {
    const signupLink : string= getSignupLink();

    return (
        <a target="_blank"
            rel="noreferrer"
            href={signupLink}>
            <button className="button-primary">Sign Up</button>
        </a>
    )
}

export default SignupButton
