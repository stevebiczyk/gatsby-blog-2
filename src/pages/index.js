import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Blog" />
      <div>
        <h1>Istvan's Thoughts</h1>
        <h4>Total Blog Posts: {data.allMarkdownRemark.totalCount}</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
