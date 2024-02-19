import './App.css'
import React, { useEffect } from "react";
import About from './components/About'
import ExperienceSection from './components/Experience'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Education from './components/Education'
import Skills from './components/Skills'
import Project from './components/Project'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Education/>
    <Project/>
    <ExperienceSection />
    <Footer/>
    </>
  )
}

export default App