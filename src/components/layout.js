/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Menu from "./menu"
import Footer from "./footer"
import "../styles/global.scss"
import layoutStyles from '../styles/layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <Menu />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}


export default Layout
