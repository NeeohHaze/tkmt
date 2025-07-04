import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleBackground from '../components/ParticleBackground';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const imagePlaceholderRef = useRef(null);

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

    // Hover effect for RIC Gaming link
    const ricGamingLink = document.querySelector('.ricgaming');
    const imagePlaceholder = imagePlaceholderRef.current;

    ricGamingLink.addEventListener('mouseenter', () => {
      gsap.to(imagePlaceholder, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(ricGamingLink, {
        scale: 1.05,
        color: '#00d4ff',
        textShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
        duration: 0.3,
      });
    });

    ricGamingLink.addEventListener('mouseleave', () => {
      gsap.to(imagePlaceholder, {
        opacity: 0,
        x: 50,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(ricGamingLink, {
        scale: 1,
        color: '#e0e0e0',
        textShadow: 'none',
        duration: 0.3,
      });
    });
  }, []);

  return (
    <div className="projects">
      <ParticleBackground />
      <div className="project-content">
        <h1 className="header-text">My Projects</h1>
        <p>Here are some of my notable projects:</p>
        <div className="project-container">
          <ul>
            <li>
              <a href="https://neeohhaze.github.io/RICgaming.club/Project/Home/home.html" className="ricgaming">
                RIC Gaming Club Website: Website focusing on FAQ page and Chatbot for RIC Gaming Club
              </a>
            </li>
          </ul>
          <div className="image-placeholder" ref={imagePlaceholderRef}></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;