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
            <h2>{node.frontmatter.title}</h2>
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
      frontmatter {
        date
        title
      }
      excerpt
      id
    }
  }
}
`



export default BlogPage