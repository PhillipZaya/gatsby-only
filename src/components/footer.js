import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        auther
      }
    }
  }
  `)

  return (
    <footer>
        <p>Create by {data.site.siteMetadata.auther} © 2022</p>
    </footer>
  )
}

export default Footer