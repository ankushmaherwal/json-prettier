import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdPlacement } from '@/components/AdPlacement';
import { AdsterraAd } from '@/components/AdsterraAd';
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
      
      {/* Adsterra Ad - After Header */}
      <AdsterraAd />
      
      {/* Top Ad */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <AdPlacement position="top" config={adConfig} />
      </div>

      <main className="flex-1">
        <JsonMinifier />
        
        {/* Detailed Instructions and Use Cases */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* How to Use */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use JSON Minifier</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Paste Your JSON</h3>
                      <p className="text-gray-600">Copy and paste your formatted JSON into the input area. The minifier will remove all unnecessary whitespace.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Click Minify</h3>
                      <p className="text-gray-600">Click the &quot;Minify JSON&quot; button to compress your JSON by removing whitespace and unnecessary characters.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Copy or Download</h3>
                      <p className="text-gray-600">Copy the minified JSON to your clipboard or download it as a file for production use.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Minification Features</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    <span>Remove all unnecessary whitespace</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    <span>Preserve data integrity and functionality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    <span>Size comparison before and after</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    <span>Compression percentage calculation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    <span>One-click copy to clipboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    <span>Download minified JSON as file</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Case Scenarios</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">API Responses</h3>
                    <p className="text-gray-600 mb-2">Minify JSON API responses to reduce bandwidth and improve loading times.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {/* Before: 150 bytes */}<br/>
                      {"{\n  \"status\": \"success\",\n  \"data\": {...}\n}"}<br/>
                      {/* After: 45 bytes */}<br/>
                      {"{\"status\":\"success\",\"data\":{...}}"}
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Applications</h3>
                    <p className="text-gray-600 mb-2">Minify JSON configuration files for faster web app loading.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {/* Configuration file */}<br/>
                      {"{\n  \"api\": {\n    \"baseUrl\": \"https://api.example.com\",\n    \"timeout\": 5000\n  }\n}"}
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Apps</h3>
                    <p className="text-gray-600 mb-2">Reduce JSON payload size for mobile applications to save data usage.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {/* Mobile data optimization */}<br/>
                      {"{\n  \"user\": {\n    \"id\": 123,\n    \"preferences\": {...}\n  }\n}"}
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Database Storage</h3>
                    <p className="text-gray-600 mb-2">Minify JSON before storing in databases to save storage space.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {/* Database optimization */}<br/>
                      {"{\n  \"metadata\": {\n    \"created\": \"2024-01-01\",\n    \"version\": \"1.0\"\n  }\n}"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Compression Benefits</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">📦</span>
                    <div>
                      <p className="font-semibold">Reduced File Size</p>
                      <p className="text-sm text-gray-600">Typically 30-70% size reduction</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">⚡</span>
                    <div>
                      <p className="font-semibold">Faster Loading</p>
                      <p className="text-sm text-gray-600">Reduced bandwidth usage and faster transfers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">💰</span>
                    <div>
                      <p className="font-semibold">Cost Savings</p>
                      <p className="text-sm text-gray-600">Lower bandwidth and storage costs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">🔒</span>
                    <div>
                      <p className="font-semibold">Data Integrity</p>
                      <p className="text-sm text-gray-600">Only whitespace removed, data unchanged</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Ad */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <AdPlacement position="bottom" config={adConfig} />
      </div>

      <Footer />
    </div>
  );
}
