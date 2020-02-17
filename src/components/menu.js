import React from 'react'
import { Link } from "gatsby"
import menuStyles from '../styles/menu.module.scss'

const Menu = () => (
        <div>
        <ul className={menuStyles.navList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/news">Projects</Link></li>
        </ul>
        </div>
)


export default Menu
