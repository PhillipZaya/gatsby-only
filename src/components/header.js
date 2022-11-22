import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

export default function Header() {
  return (
    <header className={headerStyles.header}>
        <h1>Phillip Store</h1>
        <nav>
            <ul>
                <li>
                <Link className={headerStyles} to="/">Home</Link>
                </li>
                <li>
                <Link to="/blog">Blog</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
