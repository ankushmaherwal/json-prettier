'use client';

import { useState, useEffect } from 'react';

const BEAUTIFY_COUNTER_KEY = 'json-beautify-counter';
// const INTERSTITIAL_THRESHOLD = 5; // Commented out since popup ads are disabled

export const useBeautifyCounter = () => {
  const [count, setCount] = useState(0);
  const [showInterstitial, setShowInterstitial] = useState(false);

  useEffect(() => {
    // Load counter from localStorage on mount
    const savedCount = localStorage.getItem(BEAUTIFY_COUNTER_KEY);
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  const incrementCounter = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem(BEAUTIFY_COUNTER_KEY, newCount.toString());
    
    // Show interstitial ad every 5th request
    // COMMENTED OUT: Popup ads functionality disabled for now
    // if (newCount % INTERSTITIAL_THRESHOLD === 0) {
    //   setShowInterstitial(true);
    // }
  };

  const closeInterstitial = () => {
    setShowInterstitial(false);
  };

  return {
    count,
    showInterstitial,
    incrementCounter,
    closeInterstitial,
  };
};
