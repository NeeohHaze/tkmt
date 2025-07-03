import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleBackground from '../components/ParticleBackground';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    // Split header text into letters for animation
    const header = document.querySelector('.header-text');
    if (header) {
      const letters = header.textContent.split('');
      header.textContent = '';
      letters.forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter;
        span.className = 'letter';
        header.appendChild(span);
      });

      // Animate letters
      gsap.fromTo(
        '.letter',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 4,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.header-text',
            start: 'top 80%',
          },
        }
      );
    }

    // Animate hero section
    gsap.fromTo(
      '.hero-section',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out', scrollTrigger: { trigger: '.hero-section', start: 'top 80%' } }
    );

    // Animate button
    gsap.fromTo(
      '.fun-button',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.fun-button', start: 'top 80%' } }
    );

    // Hover animation for photo
    const photo = document.querySelector('.photo-placeholder');
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
    <div className="home">
      <ParticleBackground />
      <div className="hero-section">
        <div className="photo-placeholder"></div>
        <div className="intro-text">
          <h1 className="header-text">I am Thukha Minthwin</h1>
          <p>I am from Rangsit University, passionate about creating modern and engaging web experiences.</p>
          <button className="fun-button"><a href="projects" className='extra'>Explore My Work</a></button>
        </div>
      </div>
    </div>
  );
}

export default Home;