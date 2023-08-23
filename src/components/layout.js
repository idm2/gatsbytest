import * as React from 'react'
import { graphql, useStaticQuery, GatsbyNode } from 'gatsby'
import { Link } from "gatsby"
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'




const Layout = ({pageTitle, children}) => {
  const data = useStaticQuery (graphql`
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
      `)
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
      {
       data.site.siteMetadata.menuLinks.map(node => (
        <li class={navLinkItem} key={node.name}>
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