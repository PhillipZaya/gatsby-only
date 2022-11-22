import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <header>
        <h1>Phillip Store</h1>
        <nav>
            <ul>
                <li>
                <p><Link to="/">Home</Link></p>
                </li>
                <li>
                <p><Link to="/blog">Blog</Link></p>
                </li>
                <li>
                <p><Link to="/about">About</Link></p>
                </li>
                <li>
                <p><Link to="/contact">Contact</Link></p>
                </li>
            </ul>
        </nav>
    </header>
  )
}
