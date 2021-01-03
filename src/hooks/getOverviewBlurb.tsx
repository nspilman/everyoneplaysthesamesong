import { useStaticQuery, graphql } from "gatsby"

type OverviewBlurbQuery = {
    allState : {
      edges : {
        node : {
            blurb : string
        },
      }
    }
  }

const Blurb = () => {
    const data = useStaticQuery<OverviewBlurbQuery>(graphql`
    query StateQuery {
        allState {
            edges {
                node {
                    blurb
                    }
                }
            }
        }
  `)
    return data.allState.edges[0].node.blurb;
}

export default Blurb
