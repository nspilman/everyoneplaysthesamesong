import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const SignupButton = () => {
    const data = useStaticQuery(graphql`
    query StateQuery {
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

    const state = data.allState.edges[0].node;
    const { currentPhase, signupSheet, mailingList } = state;
    const signupTag = "Signups"
    const areSignupsUnderway = (currentPhase === signupTag);
    return (
        <a target="_blank"
            rel="noreferrer"
            href={areSignupsUnderway ? signupSheet : mailingList}>
            <button className="button-primary">Sign Up</button>
        </a>
    )
}

export default SignupButton
