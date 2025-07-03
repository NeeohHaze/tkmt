import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLine, faGithub } from '@fortawesome/free-brands-svg-icons';
import ParticleBackground from '../components/ParticleBackground';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    // Animate contact section
    gsap.fromTo(
      '.contact-section',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
        },
      }
    );

    // Animate button
    gsap.fromTo(
      '.contact-button',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-button',
          start: 'top 80%',
        },
      }
    );

    // Animate icon placeholders
    gsap.fromTo(
      '.icon-placeholder',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.icon-placeholder',
          start: 'top 80%',
        },
      }
    );

    // Hover animations for icons
    const icons = document.querySelectorAll('.icon-placeholder');
    icons.forEach((icon) => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.2,
          boxShadow: '0 0 15px rgba(0, 212, 255, 0.6)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          boxShadow: '0 0 10px rgba(0, 212, 255, 0.3)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  }, []);

  return (
    <div className="contact">
      <ParticleBackground />
      <div className="contact-section">
        <div className="contact-text">
          <h1>Contact Me</h1>
          <p>Connect with me through my social platforms or send an email to collaborate or discuss opportunities.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/thu.kha.min.thwin.2024/" target="_blank" rel="noopener noreferrer" title="Facebook">
              <FontAwesomeIcon icon={faFacebookF} className="icon-placeholder facebook" />
            </a>
            <a href="https://line.me/ti/p/aq6ANcv3au" target="_blank" rel="noopener noreferrer" title="LINE">
              <FontAwesomeIcon icon={faLine} className="icon-placeholder line" />
            </a>
            <a href="https://github.com/NeeohHaze" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FontAwesomeIcon icon={faGithub} className="icon-placeholder github" />
            </a>
          </div>
          <button className="contact-button" onClick={() => window.location.href = 'mailto:np.thukhaminthwin@gmail.com'}>
            Email Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;