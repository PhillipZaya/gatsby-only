import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
          <h1>Hello world!</h1>
          <h2>This is Phillip</h2>
          <p>need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}