import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonPrettifier } from '@/components/JsonPrettifier';
import { AdPlacement } from '@/components/AdPlacement';
import { AdsterraAd } from '@/components/AdsterraAd';
import { getAdConfig } from '@/lib/ads-config';

export default function HomePage() {
  const adConfig = getAdConfig('/');

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="/" />
      
      {/* Adsterra Ad - After Header */}
      <AdsterraAd />
      
      {/* Top Ad */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <AdPlacement position="top" config={adConfig} />
      </div>

      <main className="flex-1">
        <JsonPrettifier />
        
        {/* Detailed Instructions and Use Cases */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* How to Use */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use JSON Formatter</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Paste Your JSON</h3>
                      <p className="text-gray-600">Copy and paste your JSON data into the input area. It can be minified, formatted, or even messy - our tool will handle it.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Click Format</h3>
                      <p className="text-gray-600">Click the &quot;Format JSON&quot; button to beautify your JSON with proper indentation and line breaks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Copy or Download</h3>
                      <p className="text-gray-600">Copy the formatted JSON to your clipboard or download it as a file for use in your projects.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Features</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Syntax highlighting for better readability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Automatic indentation and formatting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Error detection and validation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>One-click copy to clipboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Download formatted JSON as file</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Works with any valid JSON data</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Case Scenarios</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">API Development</h3>
                    <p className="text-gray-600 mb-2">Format API responses for better debugging and documentation.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {"{\n  \"status\": \"success\",\n  \"data\": {\n    \"user\": {\n      \"id\": 123,\n      \"name\": \"John Doe\"\n    }\n  }\n}"}
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Configuration Files</h3>
                    <p className="text-gray-600 mb-2">Format JSON configuration files for better maintainability.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {"{\n  \"database\": {\n    \"host\": \"localhost\",\n    \"port\": 5432,\n    \"name\": \"myapp\"\n  },\n  \"api\": {\n    \"baseUrl\": \"https://api.example.com\"\n  }\n}"}
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Analysis</h3>
                    <p className="text-gray-600 mb-2">Format large JSON datasets for easier analysis and review.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {"{\n  \"sales\": [\n    {\n      \"date\": \"2024-01-01\",\n      \"amount\": 1500,\n      \"product\": \"Widget A\"\n    }\n  ]\n}"}
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Code Reviews</h3>
                    <p className="text-gray-600 mb-2">Format JSON in pull requests for better code review experience.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {"{\n  \"error\": {\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"details\": \"Resource not available\"\n  }\n}"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro Tips</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">💡</span>
                    <p>Use keyboard shortcuts: <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Ctrl+A</kbd> to select all, <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Ctrl+C</kbd> to copy</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">💡</span>
                    <p>Large JSON files are automatically handled - no size limits</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">💡</span>
                    <p>Invalid JSON will show clear error messages with line numbers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">💡</span>
                    <p>Formatted JSON maintains data integrity - only whitespace is changed</p>
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