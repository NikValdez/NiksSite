import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { RichText } from "prismic-reactjs"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
// import Button from "components/_ui/Button"
import About from "components/About"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import Title from "components/Title"
import Background from "components/Background"
import EagleWrapper from "components/EagleWrapper"
import Header from "components/Header"
import "../styles/global.css"

const Hero = styled("div")`
  background-size: cover;
  height: 30em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
  }
  svg path:hover {
    opacity: 0.7;
    transition: opacity 0.3s;
    transform: scale(1.2);
  }

  svg path {
    transition: all 1s;
    transform-origin: 25% 25%;
  }
`

const Section = styled("div")`
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const WorkAction = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;
  margin-left: auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 0 auto;
  }

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    color: ${colors.blue500};
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`

const RenderBody = ({ home, projects, meta }) => (
  <>
    <Helmet title="Nik Cochran" />
    <Header />
    <Hero>
      <Background />

      <Title />
      <div style={{ position: "absolute", left: "30%", top: 40 }}>
        <EagleWrapper />
      </div>
    </Hero>
    <Section>
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          category={project.node.project_category}
          title={project.node.project_title}
          description={project.node.project_preview_description}
          thumbnail={project.node.project_preview_thumbnail}
          uid={project.node._meta.uid}
        />
      ))}

      {/* <WorkAction to={"/photography"}>
        See more photography <span>&#8594;</span>
      </WorkAction> */}
    </Section>
    <Section>
      {RichText.render(home.about_title)}
      <About bio={home.about_bio} socialLinks={home.about_links} />
    </Section>
  </>
)

export default ({ data }) => {
  //Required check for no data being returned
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
  const projects = data.prismic.allProjects.edges
  const meta = data.site.siteMetadata

  if (!doc || !projects) return null

  return (
    <Layout>
      <RenderBody home={doc.node} projects={projects} meta={meta} />
    </Layout>
  )
}

RenderBody.propTypes = {
  home: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            hero_title
            hero_button_text
            hero_button_link {
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
            content
            about_title
            about_bio
            about_links {
              about_link
            }
          }
        }
      }
      allProjects {
        edges {
          node {
            project_title
            project_preview_description
            project_preview_thumbnail
            project_category
            project_post_date
            _meta {
              uid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
