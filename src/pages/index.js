import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Header from '../components/header'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navigation from '../components/navigation'


const StyledWrapper = styled.div`
  background-color: white;
  color: #404040;
` ;
const StyledLink = styled(Link)`
    color: #404040;
    text-decoration: none;
`;

const IndexPage = () => (
  <StyledWrapper>
    <Header><StyledLink to={/./}>mikstura<font color="orange">.IT</font></StyledLink>
      <Navigation />
    </Header>
  </StyledWrapper>
)

export default IndexPage
