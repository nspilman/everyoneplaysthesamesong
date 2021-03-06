import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RoundDisplay from "../components/roundDisplay"
import SignupButton from "../components/signupButton"
import getCurrentBlurb from "../hooks/getOverviewBlurb";

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            fields: {
              slug: string,
              playlist: string,
              song: string
            }
            frontmatter: {
              date: string,
              description: string,
              favorite: boolean,
              published: boolean,
              title: string,
            }
          }
        }
      ]
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const GENERAL_INFO_SLUG = '/everyone-plays-the-same-song/';

  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node)
  const roundPosts = nodes.filter(node => node.fields.slug !== GENERAL_INFO_SLUG)
  const currentProjectOverviewBlurb = getCurrentBlurb();

  return (
    <Layout>
      <SEO title="Everyone Plays the Same Song" />
      <section className="hero">
        <div className="hero-container">
          <h1>Everyone Plays the Same Song</h1>
          <p>
            Everyone Plays the Same Song is a fun and educational community covers
            project. Members suggest and vote on songs to cover, submit their
            songs and then celebrate with a listening party. Please sign up and
            join us for the next round.
        </p>
          <div className="button-container">
            <Link to={GENERAL_INFO_SLUG}>
              <button>Learn</button>
            </Link>
            <Link to="/#listen">
              <button>Listen</button>
            </Link>
            <SignupButton />
          </div>
        </div>
      </section>

      <main className="main">
        <div className="content-container">
          <div className="card-header">
            <h2>How It Works</h2>
            <hr />
          </div>
          <div className="card">
            <div className="hiw">
              <div className="item-third">
                <h3>1. Sign Up</h3>
                <p>Sign up and submit a song that you would like to cover.</p>
              </div>
              <div className="item-third">
                <h3>2. Select</h3>
                <p>
                  Vote for the song that all participants will cover as a
                  community.
              </p>
              </div>
              <div className="item-third">
                <h3>3. Submit</h3>
                <p>
                  Submit your cover and celebrate with a virtual listening party.
              </p>
              </div>
            </div>
            <p className="hiw">
              {currentProjectOverviewBlurb}
            </p>
            <div className="button-container">
              <Link to={GENERAL_INFO_SLUG} id="learn">
                <button>Learn More</button>
              </Link>
              <button>
                <Link to="#listen">Listen</Link>
              </button>
              <SignupButton />
            </div>
          </div>
          <div className="card-header">
            <h2><a id="listen">Community Covers</a></h2>
            <hr />
          </div>
          {roundPosts.map(node => {
            return (
              <RoundDisplay
                key={node.fields.slug}
                round={node}
              />
            )
          })}
        </div>
      </main>

      <footer className="footer">
        <div className="button-container">
          <SignupButton />
        </div>
      </footer>
    </Layout >
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        fields{
          slug
          playlist
          song
        }
        frontmatter {
          date
          description
          favorite
          published
          title
        }
      }
    }
  }
  }
`

export default IndexPage
