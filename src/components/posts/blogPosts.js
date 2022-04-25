import React from "react"
import {arrayOf, shape, SingleBlogPostType} from "../../types"
import Projects from "../projects/projects"
import SingleBlogPost from "./singleBlogPost"

const Posts = ({ posts }) => (
  <>
    {posts.map((p, i) => (
      <SingleBlogPost key={`${p.title}_${i}`} {...p} />
    ))}
  </>
)

Projects.propTypes = {
  posts: arrayOf(shape(SingleBlogPostType)),
}

export default Posts
