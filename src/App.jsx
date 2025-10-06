import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/HomePage'

import {Routes, Route, BrowserRouter } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import EducationPage from './pages/EducationPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'


function App() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/education" element={<EducationPage/>}></Route>
        <Route path="/skills" element={<SkillsPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
