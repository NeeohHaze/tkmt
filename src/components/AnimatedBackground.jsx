import { useEffect } from 'react';
import gsap from 'gsap';
import './AnimatedBackground.css';

function AnimatedBackground() {
  useEffect(() => {
    // Animated gradient background
    gsap.to('.animated-background', {
      background: 'linear-gradient(135deg, #1a1a2e 0%, #2a2a4e 50%, #16213e 100%)',
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return <div className="animated-background"></div>;
}

export default AnimatedBackground;