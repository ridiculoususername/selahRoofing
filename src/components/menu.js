import React from 'react'
import { Link } from "gatsby"
import menuStyles from '../styles/menu.module.scss'

const Menu = () => (
        <div>
        <ul className={menuStyles.navList}>
            <li><Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/">Home</Link></li>
            <li><Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/contact">Contact</Link></li>
            <li><Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/services">Services</Link></li>
            <li><Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/news">Projects</Link></li>
        </ul>
        </div>
)


export default Menu
