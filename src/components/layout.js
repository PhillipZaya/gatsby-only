import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'

export default function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
        </div>
        <Footer />
    </div>
  )
}