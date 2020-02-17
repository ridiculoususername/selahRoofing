
import React from "react"
import Menu from "./menu"
import headerStyles from '../styles/header.module.scss'

const Header = () => (
  <header className={headerStyles.header}>
    <div>
      <h1>Test</h1>
      <Menu />
    </div>
  </header>
)

export default Header
