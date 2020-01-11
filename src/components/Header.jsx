import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "./_ui/Logo"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const HeaderContainer = styled("div")`
  padding-top: 2.75em;
  padding-bottom: 1em;
`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;
`

const HeaderLinks = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 3em;
  justify-content: flex-end;
  width: 100%;
  max-width: 200px;
  z-index: 999;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-gap: 5.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 2.5em;
  }

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    font-size: 0.95em;
    height: 100%;
    padding-bottom: 1.25em;
    padding-top: 0.25em;
    display: block;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 18px;
      height: 3px;
      background: transparent;
      bottom: -3px;
      right: 50%;
      margin-right: -9px;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      &:after {
        background: ${colors.blue200};
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: ${colors.blue200};
        transition: 100ms ease-in-out background;
      }
    }
  }
`

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderLinks>
        <Link activeClassName="Link--is-active" to="/photography">
          Photography
        </Link>
        <Link activeClassName="Link--is-active" to="/blog">
          Blog
        </Link>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label class="checkbox-label">
              <input
                placeholder="input"
                style={{ margin: 0, padding: 0 }}
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />
              <span class="checkbox-custom rectangular"></span>
              <span
                style={{
                  marginLeft: "30px",
                  fontWeight: 500,
                }}
              >
                Dark
              </span>
            </label>
          )}
        </ThemeToggler>
      </HeaderLinks>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
