import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from './pages/Contact';
import ProjectDisplay from "./pages/ProjectDisplay";


function App() {
  
  return (
    <div className='app'>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
