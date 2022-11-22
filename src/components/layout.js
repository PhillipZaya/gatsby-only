import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

export default function Layout(props) {
  return (
    <div className={layoutStyles}>
      <div className={layoutStyles}>
        <Header />
        {props.children}
        </div>
        <Footer />
    </div>
  )
}