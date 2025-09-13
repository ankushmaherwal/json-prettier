'use client';

import { AdConfig } from '@/lib/ads-config';

interface AdPlacementProps {
  position: 'top' | 'bottom' | 'left' | 'right';
  config: AdConfig;
  className?: string;
}

export const AdPlacement = ({ position, config, className = '' }: AdPlacementProps) => {
  if (!config.ads[position]) {
    return null;
  }

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

  return (
    <div className={`${getAdStyle()} ${className}`}>
      <div className="text-gray-500 text-sm">
        {position === 'top' && 'Advertisement'}
        {position === 'bottom' && 'Advertisement'}
        {position === 'left' && 'Ad'}
        {position === 'right' && 'Ad'}
      </div>
    </div>
  );
};
