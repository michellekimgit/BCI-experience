import * as React from "react";
import PropTypes from "prop-types";
import { Link, navigate } from "gatsby";
import styled from "styled-components";
import { nasalization4 } from "../css/sharedFonts";
import { pink3 } from "../css/colors";
import MediaComponent from "./mediaComponent";
const StyleHeader = styled.header`
  width: 350px;
  display: grid;
  grid-template-columns: 1fr;
  margin-left: 2rem;
  
  @media screen and (max-width: 767px) {
    margin-left: 1rem;
    margin-right: 2rem;
    margin-top: 0.6rem;
  }
`;

const SiteTitleMenuDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
const MobilSiteTitleMenuDiv = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;

const LinkDivH2 = styled.h2`
  ${nasalization4}
  font-size: 24px;
  line-height: 11px;
  color: white;
  font-weight: 500;
  margin-right: 1rem;
  @media screen and (max-width: 767px) {
    font-size: 15px;
    margin-right: 0.5rem;
  }
`;

const Header = () => {
  return (
    <StyleHeader id="mainHeader">
      <SiteTitleMenuDiv>
        <LinkDivH2>
          <Link
            to="/database/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            activeStyle={{
              color: pink3,
              borderBottom: `1px solid ${pink3}`,
            }}
          >
            Database
          </Link>
        </LinkDivH2>

        <LinkDivH2>
          {" "}
          <Link
            to="/categories/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            activeStyle={{
              color: pink3,
              borderBottom: `1px solid ${pink3}`,
            }}
          >
            BCI-Fi Categories
          </Link>
        </LinkDivH2>
        <LinkDivH2>
          <Link
            to="/word-cloud/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            activeStyle={{
              color: pink3,
              borderBottom: `1px solid ${pink3}`,
            }}
          >
            WordCloud
          </Link>
        </LinkDivH2>

        <LinkDivH2>
          <Link
            to="/collage/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            activeStyle={{
              color: pink3,
              borderBottom: `1px solid ${pink3}`,
            }}
          >
            Cover Collage
          </Link>
        </LinkDivH2>

        <LinkDivH2>
          <Link
            to="/image/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            activeStyle={{
              color: pink3,
              borderBottom: `1px solid ${pink3}`,
            }}
          >
            Image Collage
          </Link>
        </LinkDivH2>

        <LinkDivH2>
          <Link
            to="/timeline/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            activeStyle={{
              color: pink3,
              borderBottom: `1px solid ${pink3}`,
            }}
          >
            Timeline
          </Link>
        </LinkDivH2>

        <LinkDivH2>
          <Link
            to="/installation/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            activeStyle={{
              color: pink3,
              borderBottom: `1px solid ${pink3}`,
            }}
          >
            Installation
          </Link>
        </LinkDivH2>

        <LinkDivH2>
          <Link
            to="/experience/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            activeStyle={{
              color: pink3,
              borderBottom: `1px solid ${pink3}`,
            }}
          >
            Experience
          </Link>
        </LinkDivH2>

        <LinkDivH2>
          <Link
            to="/about/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            activeStyle={{
              color: pink3,
              borderBottom: `1px solid ${pink3}`,
            }}
          >
            About Us
          </Link>
        </LinkDivH2>

        <LinkDivH2>
          <Link
            to="/suggestions/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            activeStyle={{
              color: pink3,
              borderBottom: `1px solid ${pink3}`,
            }}
          >
            Suggestions
          </Link>
        </LinkDivH2>

        <LinkDivH2>
          <Link
            to="/science/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            activeStyle={{
              color: pink3,
              borderBottom: `1px solid ${pink3}`,
            }}
          >
            Science
          </Link>
        </LinkDivH2>

        <LinkDivH2>
          <Link
            to="/contact/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            activeStyle={{
              color: pink3,
              borderBottom: `1px solid ${pink3}`,
            }}
          >
            Contact Us
          </Link>
        </LinkDivH2>

        <LinkDivH2>
          <Link
            to="/support/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            activeStyle={{
              color: pink3,
              borderBottom: `1px solid ${pink3}`,
            }}
          >
            Support
          </Link>
        </LinkDivH2>
        
      </SiteTitleMenuDiv>

      <MobilSiteTitleMenuDiv>
        <MediaComponent
         onMouseClickHandler={() => navigate("/menu/")}
        />
      </MobilSiteTitleMenuDiv>
    </StyleHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
