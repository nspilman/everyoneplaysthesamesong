import { useStaticQuery, graphql } from "gatsby"

const Blurb = () => {
    const data = useStaticQuery(graphql`
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
