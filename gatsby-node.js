const express = require(`express`)

// Properly serve HTML files in the static directory
// issue: https://github.com/gatsbyjs/gatsby/discussions/31311

// Enable development support for serving HTML from `./static` folder
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static(`static`))
}