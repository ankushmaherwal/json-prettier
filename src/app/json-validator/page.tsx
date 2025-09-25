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
        
        {/* Detailed Instructions and Use Cases */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* How to Use */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use JSON Validator</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Paste Your JSON</h3>
                      <p className="text-gray-600">Copy and paste your JSON data into the input area. The validator will check for syntax errors and structural issues.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Click Validate</h3>
                      <p className="text-gray-600">Click the &quot;Validate JSON&quot; button to check your JSON for errors. The tool will highlight any issues found.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Results</h3>
                      <p className="text-gray-600">Check the validation results. If valid, you can copy the formatted JSON. If invalid, fix the errors and try again.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Validation Features</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✓</span>
                    <span>Syntax error detection with line numbers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✓</span>
                    <span>Missing comma and bracket detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✓</span>
                    <span>Invalid character identification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✓</span>
                    <span>Quote and escape sequence validation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✓</span>
                    <span>Real-time validation as you type</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✓</span>
                    <span>Detailed error messages and suggestions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Case Scenarios</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">API Testing</h3>
                    <p className="text-gray-600 mb-2">Validate API responses before processing to ensure data integrity.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {/* Check if API response is valid JSON */}<br/>
                      {"{\n  \"status\": \"success\",\n  \"data\": {...}\n}"}
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Import</h3>
                    <p className="text-gray-600 mb-2">Validate JSON data before importing into databases or applications.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {/* Validate before database import */}<br/>
                      {"{\n  \"users\": [\n    {\"id\": 1, \"name\": \"John\"}\n  ]\n}"}
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Configuration Validation</h3>
                    <p className="text-gray-600 mb-2">Check configuration files before deployment to prevent runtime errors.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {/* Validate config before deployment */}<br/>
                      {"{\n  \"database\": {\n    \"host\": \"localhost\",\n    \"port\": 5432\n  }\n}"}
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Code Review</h3>
                    <p className="text-gray-600 mb-2">Validate JSON in pull requests to catch errors before merging.</p>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono text-gray-700">
                      {/* Review JSON changes */}<br/>
                      {"{\n  \"error\": {\n    \"code\": 404,\n    \"message\": \"Not Found\"\n  }\n}"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Common JSON Errors</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">❌</span>
                    <div>
                      <p className="font-semibold">Missing Comma</p>
                      <p className="text-sm text-gray-600">{"{\"name\": \"John\" \"age\": 30}"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">❌</span>
                    <div>
                      <p className="font-semibold">Unclosed Quotes</p>
                      <p className="text-sm text-gray-600">{"{\"name\": \"John}"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">❌</span>
                    <div>
                      <p className="font-semibold">Trailing Comma</p>
                      <p className="text-sm text-gray-600">{"{\"name\": \"John\",}"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">❌</span>
                    <div>
                      <p className="font-semibold">Invalid Escape</p>
                      <p className="text-sm text-gray-600">{"{\"path\": \"C:\\folder\"}"}</p>
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
