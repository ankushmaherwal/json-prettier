import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonPrettifier } from '@/components/JsonPrettifier';
import { AdPlacement } from '@/components/AdPlacement';
import { getAdConfig } from '@/lib/ads-config';

export default function HomePage() {
  const adConfig = getAdConfig('/');

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="/" />
      
      {/* Top Ad */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <AdPlacement position="top" config={adConfig} />
      </div>

      <main className="flex-1">
        <JsonPrettifier />
      </main>

      {/* Bottom Ad */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <AdPlacement position="bottom" config={adConfig} />
      </div>

      <Footer />
    </div>
  );
}