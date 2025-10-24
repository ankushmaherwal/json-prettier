'use client';

import { useEffect, useState } from 'react';

export const AdsterraAd = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Desktop ad configuration (728x90)
    const desktopOptions = {
      'key': 'b79b61c9eba243b398c10b6c75af6d22',
      'format': 'iframe',
      'height': 90,
      'width': 728,
      'params': {}
    };

    // Mobile ad configuration (300x250)
    const mobileOptions = {
      'key': '026557fc10267d41e78534fbda3a9aad',
      'format': 'iframe',
      'height': 250,
      'width': 300,
      'params': {}
    };

    // Choose configuration based on device
    const atOptions = isMobile ? mobileOptions : desktopOptions;

    // Set the global atOptions variable
    (window as unknown as { atOptions: typeof atOptions }).atOptions = atOptions;

    // Create and load the Adsterra script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = isMobile 
      ? '//www.highperformanceformat.com/026557fc10267d41e78534fbda3a9aad/invoke.js'
      : '//www.highperformanceformat.com/b79b61c9eba243b398c10b6c75af6d22/invoke.js';
    script.async = true;

    // Find the ad container and append the script
    const adContainer = document.getElementById('adsterra-ad-container');
    if (adContainer) {
      adContainer.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [isMobile]);

  return (
    <div className="w-full flex justify-center py-2">
      <div 
        id="adsterra-ad-container" 
        className={`flex justify-center items-center w-full ${
          isMobile 
            ? 'min-h-[250px] max-w-[300px]' 
            : 'min-h-[90px] max-w-[728px]'
        }`}
        style={{ 
          minHeight: isMobile ? '250px' : '90px', 
          width: '100%', 
          maxWidth: isMobile ? '300px' : '728px' 
        }}
      >
        {/* Ad will be loaded here by the script */}
      </div>
    </div>
  );
};
