import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import './ParticleBackground.css';

function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadSlim(engine);
    } catch (error) {
      console.error('Error loading tsParticles:', error);
    }
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: '#1a1a2e', // Match dark theme
      },
    },
    particles: {
      number: {
        value: 40, // Reduced for performance
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: ['#00d4ff', '#ff6b6b', '#ffffff'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.4,
        random: true,
      },
      size: {
        value: 2,
        random: { enable: true, minimumValue: 1 },
      },
      move: {
        enable: true,
        speed: 0.3, // Slower for subtlety
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        repulse: {
          distance: 80,
          duration: 0.4,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      className="particles"
    />
  );
}

export default ParticleBackground;