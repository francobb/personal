let themes = [
  "blue",
  "bright-green",
  "bright-orange",
  "bright-red",
  "classic",
  "dark-blue",
  "dark-green",
  "dark-pink",
  "gh-inspired",
  "warm-red",
]
let themeValue = themes[Math.floor(Math.random() * themes.length)]
console.log({themeValue})

module.exports =
  // ({
  // basePath = "/",
  // contentPath = "content/",
  // showThemeLogo = true,
  // theme = `${themeValue}`,
  // })
  //   =>
  // {
  // return
  {
    siteMetadata: {
      description: "Personal page of Jr Francois",
      locale: "en",
      showThemeLogo: true,
      title: "Jr Francois",
    },
    plugins: [
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require("tailwindcss")(
              require("./tailwind.config")(`${themeValue}`)
            ),
            require("postcss-input-range"),
            require("autoprefixer"),
          ],
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-yaml`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `content/`,
          // path: contentPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: "blog",
          path: "content/blog/",
        },
      },
      `gatsby-plugin-react-svg`,
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ],
    // }
  }
