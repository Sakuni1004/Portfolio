import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Portfolio from './pages/portfolio/portfolio'

function App() {
 

  return (
   <Router>
   <Navbar/>
   <div className="content">
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='about' element = {<About/>}/>
        <Route path='contact' element = {<Contact/>}/>
        <Route path='portfolio' element = {<Portfolio/>}/>

      </Routes>
      </div>
   </Router>
  )
}

export default App
