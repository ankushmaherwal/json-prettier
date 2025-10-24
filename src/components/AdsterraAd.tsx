'use client';

import { useEffect } from 'react';

export const AdsterraAd = () => {
  useEffect(() => {
    // Adsterra ad configuration
    const atOptions = {
      'key': 'b79b61c9eba243b398c10b6c75af6d22',
      'format': 'iframe',
      'height': 90,
      'width': 728,
      'params': {}
    };

    // Set the global atOptions variable
    (window as unknown as { atOptions: typeof atOptions }).atOptions = atOptions;

    // Create and load the Adsterra script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.highperformanceformat.com/b79b61c9eba243b398c10b6c75af6d22/invoke.js';
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
  }, []);

  return (
    <div className="w-full flex justify-center py-4">
      <div 
        id="adsterra-ad-container" 
        className="flex justify-center items-center min-h-[90px] w-full max-w-[728px]"
        style={{ minHeight: '90px', width: '100%', maxWidth: '728px' }}
      >
        {/* Ad will be loaded here by the script */}
      </div>
    </div>
  );
};
