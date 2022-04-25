import React from "react"
import {ProfileType} from "../../types"

const url = typeof window !== "undefined" ? window.location.href : ""

const About = ({ about }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      {url.includes("/blog") ? "Blog" : "About"}
    </h5>
    <div className="font-text text-sm pb-12 leading-normal whitespace-pre-line">
      {about}
    </div>
  </>
)

About.propTypes = {
  about: ProfileType.about,
}

export default About
