import * as React from 'react'
import { graphql, useStaticQuery, GatsbyNode } from 'gatsby'
import Layout from '../components/layout'
import { Link } from "gatsby"



const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
          {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2><Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link></h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx {
    nodes {
      id
      excerpt
      frontmatter {
        date
        slug
        title
      }
    }
  }
}
`



export default BlogPage