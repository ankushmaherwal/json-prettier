import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdPlacement } from '@/components/AdPlacement';
import { getAdConfig } from '@/lib/ads-config';
import { JsonValidator } from '@/components/JsonValidator';

export const metadata: Metadata = {
  title: 'Free Online JSON Validator | Validate JSON Syntax & Structure',
  description: 'Free online JSON Validator tool. Check JSON syntax, validate structure, and find errors instantly. Best JSON validation tool for developers.',
  keywords: 'JSON Validator, JSON Syntax Checker, JSON Error Checker, Validate JSON Online, JSON Structure Validator, Free JSON Validator',
  openGraph: {
    title: 'Free Online JSON Validator | Validate JSON Syntax & Structure',
    description: 'Check JSON syntax, validate structure, and find errors instantly with our free online JSON validator.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online JSON Validator | Validate JSON Syntax & Structure',
    description: 'Check JSON syntax, validate structure, and find errors instantly with our free online JSON validator.',
  },
};

export default function JsonValidatorPage() {
  const adConfig = getAdConfig('/json-validator');

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="/json-validator" />
      
      {/* Top Ad */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <AdPlacement position="top" config={adConfig} />
      </div>

      <main className="flex-1">
        <JsonValidator />
      </main>

      {/* Bottom Ad */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <AdPlacement position="bottom" config={adConfig} />
      </div>

      <Footer />
    </div>
  );
}
