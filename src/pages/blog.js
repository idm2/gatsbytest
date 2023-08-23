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
      <ul>
      {
       data.site.siteMetadata.menuLinks.map(node => (
        <li key={node.name}>
          <Link to={node.link}>
          {node.name}
          </Link>
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
  site {
    siteMetadata {
      menuLinks {
        link
        name
      }
    }
  }
}
`



export default BlogPage