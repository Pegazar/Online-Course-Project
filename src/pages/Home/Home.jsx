import React from 'react'
import "./Home.css"
import Heading from "../../components/Heading/Heading"
import About from "../../components/About/About"
import Work from '../../components/Work/Work'
import Courses from '../../components/Courses/Courses'
import Contact from '../../components/Contact/Contact'
import Team from '../../components/Team/Team'
import Testimonial from '../../components/Testimonial/Testimonial'
import Blog from '../../components/Blog/Blog'



const Home = () => {
  return (
    <div className="home">
        <Heading />
        <About />
        <Work />
        <Courses />
        <Contact />
        <Team />
        <Testimonial />
        <Blog />
    </div>
  )
}

export default Home