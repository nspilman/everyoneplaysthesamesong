const { createFilePath } = require(`gatsby-source-filesystem`)
const axios = require(`axios`)


exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const { data } = await axios.get("https://pioneer-django.herokuapp.com/eptss/state") 
  const nodeContent = JSON.stringify(data)

  const nodeMeta = {
    id: createNodeId(`my-data-${data.round}`),
    parent: null,
    children: [],
    internal: {
      type: `State`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(data)
    }
  }

  const node = Object.assign({}, await data, nodeMeta)
  createNode(node)
}

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if(!node.frontmatter){
    return
  }

  const eptss_tag = node.frontmatter.tags.find(tag => tag.includes('eptss'))
  if (eptss_tag != `eptss-main`){
    const round = eptss_tag.slice(-1)
    const { data } = await axios.get(`https://pioneer-django.herokuapp.com/eptss/${round}`)
    createNodeField({
      node,
      name: `playlist`,
      value: data[0].playlist,
    })
    createNodeField({
      node,
      name: `song`,
      value: data[0].title,
    })
  }

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter}) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)

  const rounds = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            next{
              frontmatter{
                title
              }
              fields{
                slug
              }
            }
            previous{
              frontmatter{
                title
              }
              fields{
                slug
              }
            }
            node {
            fields {
                slug
            }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `)
  // Handle errors
  if (rounds.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  rounds.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        next: next,
        previous: previous,
        // additional data can be passed via context
        slug: node.fields.slug,
      },
    })
  })
}