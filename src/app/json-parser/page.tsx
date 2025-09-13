import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdPlacement } from '@/components/AdPlacement';
import { getAdConfig } from '@/lib/ads-config';
import { JsonParser } from '@/components/JsonParser';

export const metadata: Metadata = {
  title: 'Free Online JSON Parser | Parse JSON to JavaScript Object',
  description: 'Free online JSON Parser tool. Convert JSON string to JavaScript object, analyze structure, and extract data. Best JSON parsing tool for developers.',
  keywords: 'JSON Parser, JSON to JavaScript, Parse JSON Online, JSON Object Converter, JSON Structure Analyzer, Free JSON Parser',
  openGraph: {
    title: 'Free Online JSON Parser | Parse JSON to JavaScript Object',
    description: 'Convert JSON string to JavaScript object, analyze structure, and extract data with our free online JSON parser.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online JSON Parser | Parse JSON to JavaScript Object',
    description: 'Convert JSON string to JavaScript object, analyze structure, and extract data with our free online JSON parser.',
  },
};

export default function JsonParserPage() {
  const adConfig = getAdConfig('/json-parser');

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="/json-parser" />
      
      {/* Top Ad */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <AdPlacement position="top" config={adConfig} />
      </div>

      <main className="flex-1">
        <JsonParser />
      </main>

      {/* Bottom Ad */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <AdPlacement position="bottom" config={adConfig} />
      </div>

      <Footer />
    </div>
  );
}
