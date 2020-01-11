import React from "react"
import { Gallery } from "gatsby-theme-gallery"
import styled from "@emotion/styled"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { LayoutContainer } from "../components/Layout"

export default function photography() {
  return (
    <>
      <LayoutContainer>
        <Header />
      </LayoutContainer>

      <Gallery basePath={false} />

      <Footer />
    </>
  )
}
