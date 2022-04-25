import React from "react"
import CustomFonts from "../../components/custom-fonts/custom-fonts"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import SEO from "../../components/seo/seo"
import Sidebar from "../../components/sidebar/sidebar"
import StructuredData from "../../components/structured-data/structured-data"
import "../../styles/style.css"

const Layout = ({ children, profile, site, social }) => {

  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <SEO />
      <StructuredData profile={profile} social={social.nodes} />
      <CustomFonts />

      <Header initials={profile.initials} />

      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} />
        { children }
      </div>

      <Footer
        name={profile.name}
        showThemeLogo={site.siteMetadata.showThemeLogo}
      />
    </div>
  )
}

export default Layout
