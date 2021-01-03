import { useStaticQuery, graphql } from "gatsby"

const SignupLink = () => {
    const data = useStaticQuery(graphql`
    query SignupLinkQuery {
        allState {
            edges {
                node {
                    currentPhase
                    mailingList
                    signupSheet
                    }
                }
            }
        }
  `)

    const state = data.allState.edges[0].node;
    const { currentPhase, signupSheet, mailingList } = state;
    const signupTag = "Signups"
    const areSignupsUnderway = (currentPhase === signupTag);
    return areSignupsUnderway ? signupSheet : mailingList;
}

export default SignupLink
