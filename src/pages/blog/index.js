import React from "react"
import {graphql} from "gatsby"
import Skills from "../../components/skills/skills"
import Tools from "../../components/tools/tools"
import Posts from "../../components/posts/blogPosts"
import Layout from "../../components/layout/layout";
import About from "../../components/about/about";

const Blog = ({ data }) => {
  const { posts, site, social, profile } = data;

  return (
    <Layout profile={profile} site={site} social={social}>
      <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
        <div className="flex flex-wrap">
          <div className="md:w-3/4 pb-12 md:pr-8 lg:pr-12 xl:pr-20">
            {profile.skills && <Skills skills={profile.skills} />}
          </div>
          <div className="md:w-1/4 pb-12">
            {profile.tools && <Tools tools={profile.tools} />}
          </div>
        </div>
        <About about={profile.aboutBlog} />
        {/*<div className="flex pb-8">*/}
        <Posts posts={posts.nodes}/>
        {/*</div>*/}
      </main>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    site {
      siteMetadata {
        showThemeLogo
      }
    }
    profile: profileYaml {
      ...ProfileFragment
    }
    social: allSocialYaml(filter: { url: { ne: null } }) {
      nodes {
        ...SocialFragment
      }
    }
    posts: allBlogYaml {
      nodes {
        ...BlogPostFragment
      }
    }
  }
`
