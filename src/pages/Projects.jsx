import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleBackground from '../components/ParticleBackground';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useEffect(() => {
    // Typewriter effect for header
    const header = document.querySelector('.header-text');
    if (header) {
      const text = header.textContent;
      header.textContent = '';
      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.className = 'char';
        header.appendChild(span);
      });

      gsap.fromTo(
        '.char',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.05,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.header-text',
            start: 'top 80%',
          },
        }
      );
    }

    // Animate project content
    gsap.fromTo(
      '.project-content',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.project-content',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="projects">
      <ParticleBackground />
      <div className="project-content">
        <h1 className="header-text">My Projects</h1>
        <p>Here are some of my notable projects:</p>
        <ul>
          <a href="https://neeohhaze.github.io/RICgaming.club/Project/Home/home.html" className = "ricgaming">
          <li>RIC Gaming Club Website: Website focusing on FAQ page and Chatbot for RIC Gaming Club</li></a>
        </ul>
      </div>
    </div>
  );
}

export default Projects;