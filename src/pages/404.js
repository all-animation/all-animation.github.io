import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#c8ccd4",
  padding: "96px",
  fontFamily: "'DM Sans', sans-serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  fontFamily: "'Syne', sans-serif",
  color: "#fff",
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry, we couldn't find what you were looking for.
        <br />
        <br />
        <Link to="/" style={{ color: "#00ff6a" }}>Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
