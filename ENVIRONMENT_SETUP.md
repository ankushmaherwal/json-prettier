# Environment Setup for Google Analytics and AdSense

This document explains how to configure environment variables for Google Analytics and Google AdSense integration.

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### Google Analytics
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
- Get this from your Google Analytics 4 property
- Format: `G-XXXXXXXXXX` (where X is your tracking ID)

### Google AdSense
```bash
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxx
NEXT_PUBLIC_ADSENSE_SLOT_TOP=1234567890
NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM=1234567891
NEXT_PUBLIC_ADSENSE_SLOT_LEFT=1234567892
NEXT_PUBLIC_ADSENSE_SLOT_RIGHT=1234567893
```

- `NEXT_PUBLIC_ADSENSE_CLIENT_ID`: Your AdSense publisher ID (format: `ca-pub-xxxxxxxxxx`)
- `NEXT_PUBLIC_ADSENSE_SLOT_*`: Individual ad slot IDs for each position

### Google Search Console
```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-code
```
- Get this from Google Search Console for site verification

### Site Configuration
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```
- Your actual domain URL for SEO and metadata

## How to Get These Values

### Google Analytics
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property or use existing one
3. Go to Admin → Data Streams → Web
4. Copy the Measurement ID (starts with G-)

### Google AdSense
1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Create an account and get approved
3. Go to Ads → By ad unit
4. Create ad units for different positions
5. Copy the Ad unit code and extract:
   - `data-ad-client` value for `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
   - `data-ad-slot` values for each position

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add your property
3. Choose "HTML tag" verification method
4. Copy the content value from the meta tag

## Example .env.local File

```bash
# Google Analytics Configuration
NEXT_PUBLIC_GA_ID=G-ABC123DEF4

# Google AdSense Configuration
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-1234567890123456
NEXT_PUBLIC_ADSENSE_SLOT_TOP=1234567890
NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM=1234567891
NEXT_PUBLIC_ADSENSE_SLOT_LEFT=1234567892
NEXT_PUBLIC_ADSENSE_SLOT_RIGHT=1234567893

# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123def456ghi789

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://json-tools.example.com
```

## Important Notes

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use `NEXT_PUBLIC_` prefix** - Required for client-side access in Next.js
3. **Restart your development server** after adding environment variables
4. **Test in production** - Some features may not work in development mode

## Troubleshooting

- If ads don't show: Check browser console for AdSense errors
- If analytics don't track: Verify the GA ID format and network requests
- If verification fails: Ensure the verification code is correct and site is accessible

## Development vs Production

- In development: Placeholder ads will show if no AdSense config
- In production: Real ads will display based on your configuration
- Analytics will work in both environments with proper configuration
