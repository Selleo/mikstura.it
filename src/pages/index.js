import React from "react"
import { Link } from "gatsby"
import Navigation from '../components/navigation'
import '../components/stylesheet.css'

const IndexPage = () => (
    <div className='content'>
      <h1 className='header'><Link className='styledLink' to={/./}>mikstura<font color="orange">.IT</font></Link>
        <Navigation />
      </h1>
    </div>
)

export default IndexPage
