import './index.css';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from './pages/Contact';
import ProjectDisplay from "./pages/ProjectDisplay";
import ContactSuccess from './pages/ContactSuccess';
import NotFound from './pages/NotFound';


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
          <Route path="/contact/success" element={<ContactSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
