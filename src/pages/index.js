import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RoundDisplay from "../components/roundDisplay"

const IndexPage = ({data}) => {
  const general_info_slug = '/everyone-plays-the-same-song/';
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node)
  const roundPosts = nodes.filter(node => node.fields.slug !== general_info_slug)
  const learnMoreLink = '/everone-plays-the-same-song'
  return (
<Layout>
    <SEO title="Home" />
    <section class="hero">
      <div class="hero-container">
        <h1>Everyone Plays the Same Song</h1>
        <p>
            Everyone Plays the Same Song is a fun and educational community covers
            project. Members suggest and vote on songs to cover, submit their
            songs and then celebrate with a listening party. Please sign up and
            join us for the next round.
        </p>
        <div class="button-container">
          <Link to={learnMoreLink}>
            <button>Learn</button>
          </Link>
          <Link to="/#listen">
            <button>Listen</button>
          </Link>
          <button class="button-primary">Sign Up</button>
        </div>
      </div>
    </section>

    <main class="main">
      <div class="content-container">
        <div class="card-header">
         <h2>How It Works</h2>
          <hr />
        </div>
        <div class="card">
          <div class="hiw">
            <div class="item-third">
              <h3>1. Sign Up</h3>
              <p>Sign up and submit a song that you would like to cover.</p>
            </div>
            <div class="item-third">
              <h3>2. Select</h3>
              <p>
                  Vote for the song that all participants will cover as a
                  community.
              </p>
            </div>
            <div class="item-third">
              <h3>3. Submit</h3>
              <p>
                  Submit your cover and celebrate with a virtual listening party.
              </p>
            </div>
          </div>
          <p class="hiw">
              Round 6 signups are currently underway and will close December 14th,
              2020.
          </p>
          <div class="button-container">
           <Link to={learnMoreLink} id="learn">  <button>Learn More</button>  </Link>
            <button>
              <a href="#listen">Listen</a>
            </button>
            <button class="button-primary">Sign Up</button>
          </div>
        </div>
        <div class="card-header">
          <h2><a id="listen">Community Covers</a></h2>
          <hr />
        </div>
        {roundPosts.map(node =>{
          
          return (
            <RoundDisplay
            key={node.fields.slug}
            post={node}
            />
          )
        })}
      </div>
    </main>

    <footer class="footer">
      <div class="button-container">
        <button class="button-primary">Sign Up</button>
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
          tags
        }
      }
    }
  }
  }
`

export default IndexPage
