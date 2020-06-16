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


const IndexPage = () => (
  <StyledWrapper>
    <Header>mikstura<font color="orange">.IT</font>
      <Navigation />
    </Header>
    <h3>To jest strona poświęcona informacjom o nas.</h3>
  </StyledWrapper>
)

export default IndexPage
