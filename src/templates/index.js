import {graphql} from "gatsby"
import React from "react"
import MainContent from "../components/main-content/main-content"
import "../styles/style.css"
import Layout from "../components/layout/layout";

const IndexPage = ({ data }) => {
  const { history, profile, projects, site, social, posts } = data

  return (
    <Layout profile={profile} site={site} social={social}>
      <MainContent
        history={history.nodes}
        profile={profile}
        projects={projects.nodes}
        posts={posts.nodes}
      />
    </Layout>
  )
}

export default IndexPage

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
    history: allWorkHistoryYaml {
      nodes {
        ...WorkHistoryFragment
      }
    }
    projects: allProjectsYaml {
      nodes {
        ...ProjectFragment
      }
    }
    posts: allBlogYaml {
      nodes {
        ...BlogPostFragment
      }
    }
  }
`
