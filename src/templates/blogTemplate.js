

import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

import formattedDateString from "../utilities/formattedDateString"

export default function Template({
  data, pageContext
}) {
  const { markdownRemark } = data 
  const { frontmatter, html } = markdownRemark

  const { next, previous } = pageContext
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
        {previous &&
        <li id="previous-post">
        <Link to={previous.fields.slug}> {previous.frontmatter.title } </Link>
      </li>
      }
            {next &&
        <li id="next-post">
        <Link to={next.fields.slug}> {next.frontmatter.title } </Link>
      </li>
      } 
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
