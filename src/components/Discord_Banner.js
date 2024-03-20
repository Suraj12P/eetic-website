import React, { useState, useEffect } from 'react';
import './css/discord_banner.css';

const Discord_Banner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`banner ${showBanner ? 'show' : ''}`}>
      <a href="https://discord.gg/KAbXKEXG" className='link-text'>Join Our Discord Community</a>
    </div>
  );
};

export default Discord_Banner;
