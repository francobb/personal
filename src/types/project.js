import { graphql } from "gatsby"
import { arrayOf, shape, string, object, oneOf } from "prop-types"

export const ProjectType = {
  description: string,
  icon: oneOf(["github", "website"]),
  image: shape({
    childImageSharp: object,
  }),
  name: string.isRequired,
  status: string,
  tags: arrayOf(string),
  url: string,
}

export const query = graphql`
  fragment ProjectFragment on ProjectsYaml {
    description
    icon
    image {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 144, height: 144, quality: 85)
      }
    }
    name
    status
    tags
    url
  }
`
