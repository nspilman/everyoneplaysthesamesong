import { useStaticQuery, graphql } from "gatsby"

type SignupLinkQueryProps = {
    allState : {
      edges : {
        node : {
            currentPhase : string,
            mailingList: string,
            signupSheet: string
        },
      }
    }
  }

const SignupLink = () => {
    const data = useStaticQuery<SignupLinkQueryProps>(graphql`
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
