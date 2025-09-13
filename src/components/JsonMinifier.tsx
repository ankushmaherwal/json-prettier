'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Copy, Check, Download, Zap } from 'lucide-react';
import toast from 'react-hot-toast';

export const JsonMinifier = () => {
  const [inputJson, setInputJson] = useState('');
  const [minifiedJson, setMinifiedJson] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [originalSize, setOriginalSize] = useState(0);
  const [minifiedSize, setMinifiedSize] = useState(0);

  const minifyJson = () => {
    if (!inputJson.trim()) {
      toast.error('Please enter JSON to minify');
      return;
    }

    try {
      const parsed = JSON.parse(inputJson);
      const minified = JSON.stringify(parsed);
      setMinifiedJson(minified);
      setIsValid(true);
      setError('');
      
      // Calculate sizes
      const original = new Blob([inputJson]).size;
      const minifiedBlob = new Blob([minified]).size;
      setOriginalSize(original);
      setMinifiedSize(minifiedBlob);
      
      toast.success('JSON minified successfully!');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Invalid JSON';
      setError(errorMessage);
      setIsValid(false);
      setMinifiedJson('');
      toast.error('Failed to minify JSON');
    }
  };

  const clearAll = () => {
    setInputJson('');
    setMinifiedJson('');
    setIsValid(null);
    setError('');
    setOriginalSize(0);
    setMinifiedSize(0);
    toast.success('Cleared all content');
  };

  const copyMinified = async () => {
    if (!minifiedJson) {
      toast.error('No minified JSON to copy');
      return;
    }

    try {
      await navigator.clipboard.writeText(minifiedJson);
      setCopied(true);
      toast.success('Minified JSON copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy to clipboard');
    }
  };

  const downloadMinified = () => {
    if (!minifiedJson) {
      toast.error('No minified JSON to download');
      return;
    }

    const blob = new Blob([minifiedJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'minified.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Minified JSON downloaded!');
  };

  const compressionRatio = originalSize > 0 ? ((originalSize - minifiedSize) / originalSize * 100).toFixed(1) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          JSON Minifier
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Compress and minify your JSON data. Remove unnecessary whitespace and reduce file size for better performance.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <button
          onClick={minifyJson}
          className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium flex items-center gap-2"
        >
          <Zap className="w-5 h-5" />
          Minify JSON
        </button>
        
        <button
          onClick={clearAll}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
        >
          Clear All
        </button>
        
        {minifiedJson && (
          <>
            <button
              onClick={copyMinified}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center gap-2"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? 'Copied!' : 'Copy Minified'}
            </button>
            
            <button
              onClick={downloadMinified}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download
            </button>
          </>
        )}
      </div>

      {/* JSON Input/Output Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Area */}
        <div className="space-y-2">
          <label htmlFor="input-json" className="block text-sm font-medium text-gray-700">
            Input JSON
          </label>
          <div className="relative">
            <textarea
              id="input-json"
              value={inputJson}
              onChange={(e) => setInputJson(e.target.value)}
              placeholder="Paste your JSON here to minify..."
              className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none custom-scrollbar"
            />
            {isValid !== null && (
              <div className="absolute top-2 right-2">
                {isValid ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Output Area */}
        <div className="space-y-2">
          <label htmlFor="minified-json" className="block text-sm font-medium text-gray-700">
            Minified JSON
          </label>
            <textarea
              id="minified-json"
              value={minifiedJson}
              readOnly
              placeholder="Minified JSON will appear here..."
              className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm bg-gray-50 resize-none custom-scrollbar"
            />
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <span className="font-medium text-red-800">Minification Error</span>
          </div>
          <p className="mt-2 text-sm text-red-700 font-mono">{error}</p>
        </div>
      )}

      {/* Compression Statistics */}
      {minifiedJson && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-4">Compression Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{originalSize}</div>
              <div className="text-sm text-gray-600">Original Size (bytes)</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl font-bold text-green-600">{minifiedSize}</div>
              <div className="text-sm text-gray-600">Minified Size (bytes)</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{compressionRatio}%</div>
              <div className="text-sm text-gray-600">Size Reduction</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {originalSize > 0 ? (originalSize - minifiedSize) : 0}
              </div>
              <div className="text-sm text-gray-600">Bytes Saved</div>
            </div>
          </div>
          
          {/* Visual Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Compression Progress</span>
              <span>{compressionRatio}% reduced</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-orange-500 to-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${compressionRatio}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="text-sm font-medium text-blue-800 mb-2">💡 Minification Tips</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Minified JSON removes all unnecessary whitespace and line breaks</li>
          <li>• This reduces file size and improves loading performance</li>
          <li>• Perfect for production environments and API responses</li>
          <li>• The minified JSON is still valid and can be parsed normally</li>
        </ul>
      </div>
    </div>
  );
};
