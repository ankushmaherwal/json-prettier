import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdPlacement } from '@/components/AdPlacement';
import { getAdConfig } from '@/lib/ads-config';
import { JsonMinifier } from '@/components/JsonMinifier';

export const metadata: Metadata = {
  title: 'Free Online JSON Minifier | Compress JSON String Online',
  description: 'Free online JSON Minifier tool. Compress and minify JSON strings, reduce file size, and optimize for production. Best JSON compression tool.',
  keywords: 'JSON Minifier, JSON Compressor, Minify JSON Online, JSON Size Reducer, Compress JSON String, Free JSON Minifier',
  openGraph: {
    title: 'Free Online JSON Minifier | Compress JSON String Online',
    description: 'Compress and minify JSON strings, reduce file size, and optimize for production with our free online JSON minifier.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online JSON Minifier | Compress JSON String Online',
    description: 'Compress and minify JSON strings, reduce file size, and optimize for production with our free online JSON minifier.',
  },
};

export default function JsonMinifierPage() {
  const adConfig = getAdConfig('/json-minifier');

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="/json-minifier" />
      
      {/* Top Ad */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <AdPlacement position="top" config={adConfig} />
      </div>

      <main className="flex-1">
        <JsonMinifier />
      </main>

      {/* Bottom Ad */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <AdPlacement position="bottom" config={adConfig} />
      </div>

      <Footer />
    </div>
  );
}
