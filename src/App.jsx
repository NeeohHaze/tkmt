import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import './App.css';

function AppContent() {
  const pageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const page = pageRef.current;

    // Define the swipe animation timeline
    const tl = gsap.timeline();

    // Slide in the new page from the right
    tl.fromTo(
      page,
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 0.8, ease: 'power3.out' }
    );

    // Cleanup to prevent overlapping animations
    return () => {
      tl.kill();
    };
  }, [location.pathname]); // Trigger animation on route change

  return (
    <div className="app">
      <AnimatedBackground />
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <div className="page" ref={pageRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;