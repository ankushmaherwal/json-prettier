import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdPlacement } from '@/components/AdPlacement';
import { AdsterraAd } from '@/components/AdsterraAd';
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
      
      {/* Adsterra Ad - After Header */}
      <AdsterraAd />
      
      {/* Top Ad */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <AdPlacement position="top" config={adConfig} />
      </div>

      <main className="flex-1">
        <JsonParser />
        
        {/* Detailed Instructions and Use Cases */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* How to Use */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use JSON Parser</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Paste Your JSON</h3>
                      <p className="text-gray-600">Copy and paste your JSON string into the input area. The parser will convert it to a JavaScript object.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Click Parse</h3>
                      <p className="text-gray-600">Click the &quot;Parse JSON&quot; button to convert your JSON string into a structured JavaScript object.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore Structure</h3>
                      <p className="text-gray-600">View the parsed object in tree format, analyze data types, and understand the structure.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Parser Features</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    <span>Interactive tree structure visualization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    <span>Data type identification and highlighting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    <span>Expandable/collapsible object nodes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    <span>Object statistics and property counts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    <span>Formatted JSON output with syntax highlighting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    <span>Copy parsed data to clipboard</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Case Scenarios</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">API Response Analysis</h3>
                    <p className="text-gray-600 mb-2">Parse and analyze API responses to understand data structure and relationships.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {/* Parse API response */}<br/>
                      {"{\n  \"users\": [\n    {\n      \"id\": 1,\n      \"name\": \"John\",\n      \"email\": \"john@example.com\"\n    }\n  ]\n}"}
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Structure Learning</h3>
                    <p className="text-gray-600 mb-2">Learn JSON structure by visualizing complex nested objects and arrays.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {/* Complex nested structure */}<br/>
                      {"{\n  \"company\": {\n    \"employees\": [\n      {\n        \"department\": {\n          \"name\": \"Engineering\"\n        }\n      }\n    ]\n  }\n}"}
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Debugging JSON Data</h3>
                    <p className="text-gray-600 mb-2">Debug JSON data by visualizing the structure and identifying data types.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {/* Debug configuration data */}<br/>
                      {"{\n  \"settings\": {\n    \"debug\": true,\n    \"logLevel\": \"info\",\n    \"timeout\": 5000\n  }\n}"}
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Migration</h3>
                    <p className="text-gray-600 mb-2">Parse JSON data before migrating to understand the structure and plan the migration.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {/* Analyze data for migration */}<br/>
                      {"{\n  \"legacyData\": {\n    \"format\": \"old\",\n    \"version\": \"1.0\"\n  }\n}"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Type Colors</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 bg-green-500 rounded"></span>
                    <span><strong>Strings</strong> - Text values in quotes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 bg-blue-500 rounded"></span>
                    <span><strong>Numbers</strong> - Integer and decimal values</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 bg-purple-500 rounded"></span>
                    <span><strong>Booleans</strong> - true/false values</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 bg-gray-500 rounded"></span>
                    <span><strong>null</strong> - Null values</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 bg-orange-500 rounded"></span>
                    <span><strong>Objects</strong> - Key-value pairs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 bg-pink-500 rounded"></span>
                    <span><strong>Arrays</strong> - Ordered lists of values</span>
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
