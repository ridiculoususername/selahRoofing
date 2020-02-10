import React from 'react'
import { Link } from "gatsby"

const Menu = () => (
        <div style={{
            background: '#f4f4f4',
            paddingTop: '0.5em'
        }}>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/news">News</Link></li>
        </ul>
        </div>
)


export default Menu; 
