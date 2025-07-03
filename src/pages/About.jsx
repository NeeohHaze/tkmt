import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleBackground from '../components/ParticleBackground';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    // Animate header with sliding mask
    const header = document.querySelector('.header-text');
    if (header) {
      gsap.fromTo(
        '.header-text',
        { x: -100, opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        {
          x: 0,
          opacity: 1,
          clipPath: 'inset(0 0% 0 0)',
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.header-text',
            start: 'top 80%',
          },
        }
      );
    }

    // Animate bio card
    gsap.fromTo(
      '.bio-card',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.bio-card',
          start: 'top 80%',
        },
      }
    );

    // Animate content sections
    gsap.fromTo(
      '.about-section',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
        },
      }
    );

    // Animate button
    gsap.fromTo(
      '.resume-button',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.resume-button',
          start: 'top 80%',
        },
      }
    );

    // Hover animation for photo
    const photo = document.querySelector('.bio-placeholder');
    if (photo) {
      photo.addEventListener('mouseenter', () => {
        gsap.to(photo, {
          scale: 1.1,
          rotate: 5,
          boxShadow: '0 0 20px rgba(0, 212, 255, 0.6)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      photo.addEventListener('mouseleave', () => {
        gsap.to(photo, {
          scale: 1,
          rotate: 0,
          boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    }
  }, []);

  return (
    <div className="about">
      <ParticleBackground />
      <div className="about-container">
        <div className="bio-card">
          <h2>Thukha Minthwin</h2>
          <p>Web Developer</p>
          <div className="bio-placeholder"></div>
        </div>
        <div className="about-content">
          <h1 className="header-text">About Me</h1>
          <p className="about-section">
            I’m a dedicated web developer from Rangsit University with a passion for building modern, user-friendly websites. My focus is on creating clean, efficient code and delivering professional web experiences.
          </p>
          <div className="about-section">
            <h3>Technical Skills</h3>
            <ul className="skills-list">
              <li>React: Proficient in building dynamic, component-based web applications</li>
              <li>JavaScript (ES6+): Strong knowledge of modern JavaScript for interactive features</li>
              <li>HTML & CSS: Expertise in responsive design and modern layouts</li>
              <li>GSAP: Experience with animations for engaging user interfaces</li>
            </ul>
          </div>
          <div className="about-section">
            <h3>Tools & Technologies</h3>
            <ul className="skills-list">
              <li>Vite: Fast development and build tool for React projects</li>
              <li>Git: Version control for collaborative development</li>
              <li>Figma: Familiar with UI/UX design workflows</li>
            </ul>
          </div>
          <div className="about-section">
            <h3>Professional Experience</h3>
            <ul className="skills-list">
              <li>Developed a personal portfolio website using React and GSAP</li>
              <li>Collaborated on university projects to build responsive web applications</li>
            </ul>
          </div>
          <a href="/path/to/resume.pdf" download className="resume-button">Download Resume</a>
        </div>
      </div>
    </div>
  );
}

export default About;