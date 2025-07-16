import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import { Projects } from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} /> 
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
