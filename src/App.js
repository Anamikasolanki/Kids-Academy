import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Teacher from './component/Teacher/Teacher'
import Class from './component/Class/Class'
import Home from './component/Home/Home'
import Blog from './component/Blog/Blog'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



export default function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/class" element={<Class/>}/>
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/blog" element={<h1 className='text-danger text-center my-5'>404 - Not Found</h1>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<h1 className='text-danger text-center my-5'>404 - Not Found</h1>}/>
      </Routes>
      </Router>
      <Footer/>
    </div>
  )
}
