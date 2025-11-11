import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/HomePage'

import {Routes, Route, HashRouter } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import EducationPage from './pages/EducationPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'
import MessagingPage from './pages/MessagingPage'
import BlogPage from './pages/BlogPage'


function App() {

  return (
    <HashRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/education" element={<EducationPage/>}></Route>
        <Route path="/skills" element={<SkillsPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/message" element={<MessagingPage/>}></Route>
        <Route path="/blog" element={<BlogPage/>}></Route>
      </Routes>
      <Footer></Footer>
    </HashRouter>
  )
}

export default App
