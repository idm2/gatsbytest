import * as React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery, GatsbyNode } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

export const query = graphql`
query MyQuery {
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
const Layout = ({pageTitle, children, data}) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
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
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}


export default Layout