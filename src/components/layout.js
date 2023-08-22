import * as React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'



const Layout = ({ pageTitle, children, data}) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
    
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