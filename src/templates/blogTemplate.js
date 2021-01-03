

import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/layout"

import formattedDateString from "../utilities/formattedDateString"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
//   const allPosts = useStaticQuery(graphql`

//   `
//   )
  return (
<Layout>
    <section id="post-main" className="default">
      <header className="major">
        <h1>{frontmatter.title }</h1>
        <p>{ frontmatter.description }</p>
        <time className="published" datetime="2015-11-01">{
          formattedDateString(frontmatter.date)
        }</time>
      </header>
      <div id="content" dangerouslySetInnerHTML={{ __html: html }}
/>
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: '2em',
        }}
      >
        {/* <li v-if="previousPost">
          <Link to="previousPost.path"> {previousPost.title } </Link>
        </li>
        <li v-if="nextPost">
          <Link to="nextPost.path"> { nextPost.title } </Link>
        </li> */}
      </ul>
    </section>
  </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
