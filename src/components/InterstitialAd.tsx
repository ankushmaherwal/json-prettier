'use client';

import { getAdSenseConfig } from '@/lib/ads-config';
import { useEffect } from 'react';

interface InterstitialAdProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InterstitialAd = ({ isOpen, onClose }: InterstitialAdProps) => {
  const adSenseConfig = getAdSenseConfig();

  useEffect(() => {
    // Load AdSense script if not already loaded
    if (typeof window !== 'undefined' && adSenseConfig.clientId && isOpen) {
      const script = document.createElement('script');
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseConfig.clientId}`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  }, [adSenseConfig.clientId, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
          aria-label="Close ad"
        >
          ×
        </button>
        
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Advertisement</h3>
          <div className="w-full h-64 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center mb-4">
            {adSenseConfig.clientId ? (
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={adSenseConfig.clientId}
                data-ad-slot={adSenseConfig.slots.top}
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
            ) : (
              <span className="text-gray-500">Ad Space</span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-4">
            This ad helps keep our service free for everyone.
          </p>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
