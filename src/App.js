import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';



function App() {
  
  
  return (
    <>
    
    <Router>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element = {<Header/>} />
        <Route path="/about-me" element = {<AboutMe/>} />
        <Route path="/skills" element = {<Skills />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
