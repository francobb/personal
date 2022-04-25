import {graphql} from "gatsby"
import {string} from "prop-types"

export const SingleBlogPostType = {
  slug: string.isRequired,
  title: string.isRequired,
  author: string.isRequired,
  date: string.isRequired,
  // content: string.isRequired
  content: string,
}
export const query = graphql`
  fragment BlogPostFragment on BlogYaml {
    slug
    title
    author
    date
    content
  }
`
