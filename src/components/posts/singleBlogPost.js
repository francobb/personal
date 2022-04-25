import React from "react"
import {Link} from "gatsby"
import {SingleBlogPostType} from "../../types"

const SingleBlogPost = (props) => {
  const { title, author, slug } = props
  const url = typeof window !== "undefined" ? window.location.href : ""
  let realSlug = !url.includes("/blog") ? `/blog${slug}` : slug

  //TODO: dress this up
  return (
    <>
      <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        <div className="lg:flex-1">
          <h4 className="font-bold">{title}</h4>
          <h3>by {author}</h3>

          <div>
            <Link to={realSlug}> More...</Link>
          </div>
        </div>
      </div>
    </>
  )
}

SingleBlogPost.propTypes = SingleBlogPostType
export default SingleBlogPost
