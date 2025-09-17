import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Free Online JSON Formatter / Prettifier | JSON Validator, Parser',
  description: 'Free online JSON Formatter / Prettifier tool. Beautify, validate, minify, and parse JSON instantly. Best SEO-optimized JSON viewer and editor online.',
  keywords: 'JSON Formatter / Prettifier, JSON Formatter, Online JSON Validator, JSON Beautifier, JSON Parser, JSON Minifier, JSON Viewer, Free JSON Formatter / Prettifier, Format JSON String Online',
  authors: [{ name: 'JSON Formatter / Prettifier' }],
  creator: 'JSON Formatter / Prettifier',
  publisher: 'JSON Formatter / Prettifier',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://json-tools.example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JSON Formatter / Prettifier Online Tool',
    description: 'Instantly format, validate, and beautify JSON online with this free tool.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://json-tools.example.com',
    siteName: 'JSON Formatter / Prettifier',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JSON Formatter / Prettifier Online Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Formatter / Prettifier Online Tool',
    description: 'Instantly format, validate, and beautify JSON online with this free tool.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'JSON Formatter / Prettifier',
              description: 'Free online JSON Formatter / Prettifier tool. Beautify, validate, minify, and parse JSON instantly.',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://json-tools.example.com',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Any',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              creator: {
                '@type': 'Organization',
                name: 'JSON Formatter / Prettifier',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
          }}
        />
        <GoogleAnalytics gaId={"G-TWMBB9XHR3" || process.env.NEXT_PUBLIC_GA_ID} />
        {/* Manual Google Analytics script as requested by Google */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${"G-TWMBB9XHR3" || process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${"G-TWMBB9XHR3" || process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}