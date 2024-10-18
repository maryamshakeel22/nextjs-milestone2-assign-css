import Link from 'next/link'
import React from 'react'
import "../about/about.css"
const About = () => {
  return (
    <div>
      <h1>Nested About</h1>
      <br />
      <p>
      <Link href="/about">Go About Page</Link>
      </p>
    </div>
  )
}

export default About