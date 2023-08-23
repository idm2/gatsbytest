import * as React from 'react'
import { graphql, useStaticQuery, GatsbyNode } from 'gatsby'
import Layout from '../components/layout'
import { Link } from "gatsby"



const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
      
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allFile {
    nodes {
      name
    }
  }
}
`



export default BlogPage