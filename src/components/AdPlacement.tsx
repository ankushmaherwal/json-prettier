'use client';

import { AdConfig, getAdSenseConfig } from '@/lib/ads-config';
import { useEffect } from 'react';

interface AdPlacementProps {
  position: 'top' | 'bottom' | 'left' | 'right';
  config: AdConfig;
  className?: string;
}

export const AdPlacement = ({ position, config, className = '' }: AdPlacementProps) => {
  const adSenseConfig = getAdSenseConfig();
  
  if (!config.ads[position]) {
    return null;
  }

  useEffect(() => {
    // Load AdSense script if not already loaded
    if (typeof window !== 'undefined' && adSenseConfig.clientId) {
      const script = document.createElement('script');
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseConfig.clientId}`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  }, [adSenseConfig.clientId]);

  const getAdStyle = () => {
    switch (position) {
      case 'top':
        return 'w-full h-24 md:h-32 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center';
      case 'bottom':
        return 'w-full h-24 md:h-32 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center';
      case 'left':
        return 'w-48 h-96 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hidden lg:flex';
      case 'right':
        return 'w-48 h-96 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hidden lg:flex';
      default:
        return '';
    }
  };

  const getAdSlotId = () => {
    return adSenseConfig.slots[position] || '';
  };

  return (
    <div className={`${getAdStyle()} ${className}`}>
      {adSenseConfig.clientId && getAdSlotId() ? (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={adSenseConfig.clientId}
          data-ad-slot={getAdSlotId()}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <div className="text-gray-500 text-sm">
          {position === 'top' && 'Advertisement'}
          {position === 'bottom' && 'Advertisement'}
          {position === 'left' && 'Ad'}
          {position === 'right' && 'Ad'}
        </div>
      )}
    </div>
  );
};
