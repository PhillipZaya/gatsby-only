import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
        <h1>about</h1>
        <p>Junior software developer</p>
        <p>need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}
