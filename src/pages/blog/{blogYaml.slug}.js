import React from "react"
import {graphql} from "gatsby"

const BlogYamlSlug = ({data}) => {
  const { blogYaml } = data;
  console.log({blogYaml});
  const {author, content, title, date} = blogYaml
  return (
    <div>
      <h1>{title}</h1>
      <h2>by: {author}</h2>
      <h3>{date}</h3>
      <div>{content}</div>
    </div>
  )
}

export default BlogYamlSlug

export const query = graphql`
query($slug: String!) {
  blogYaml(slug: { eq: $slug }) {
    author
    id
    title
    content
    date
  }
}
`
