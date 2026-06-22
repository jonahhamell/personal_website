
import {Routes, Route} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <> 
    <Header />
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />


    </Routes>

    </>
  );
}

export default App;