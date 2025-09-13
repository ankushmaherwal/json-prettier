import pageConfig from '../config/page-config.json';

export interface AdConfig {
  ads: {
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
  };
}

export const defaultAdConfig: AdConfig = {
  ads: {
    top: true,
    bottom: true,
    left: false,
    right: false,
  },
};

export const getAdConfig = (page: string): AdConfig => {
  // Get page-specific config or fall back to global config
  const pageSpecificConfig = pageConfig.pages[page as keyof typeof pageConfig.pages];
  
  if (pageSpecificConfig) {
    return {
      ads: pageSpecificConfig.ads
    };
  }
  
  // Fall back to global config
  return {
    ads: pageConfig.global.ads
  };
};
