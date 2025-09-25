'use client';

import { useState } from 'react';
import { Copy, Check, AlertCircle, CheckCircle, Download } from 'lucide-react';
import toast from 'react-hot-toast';
import { useBeautifyCounter } from '@/lib/use-beautify-counter';
import { InterstitialAd } from './InterstitialAd';
import { AdPlacement } from './AdPlacement';
import { getAdConfig } from '@/lib/ads-config';

export const JsonPrettifier = () => {
  const [inputJson, setInputJson] = useState('');
  const [outputJson, setOutputJson] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [copied, setCopied] = useState(false);
  
  const { showInterstitial, incrementCounter, closeInterstitial } = useBeautifyCounter();
  const adConfig = getAdConfig('/');

  const beautifyJson = () => {
    if (!inputJson.trim()) {
      toast.error('Please enter JSON to format');
      return;
    }

    try {
      const parsed = JSON.parse(inputJson);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutputJson(formatted);
      setIsValid(true);
      incrementCounter();
      toast.success('JSON formatted successfully!');
    } catch {
      setIsValid(false);
      toast.error('Invalid JSON. Please check and try again.');
    }
  };

  const validateJson = () => {
    if (!inputJson.trim()) {
      toast.error('Please enter JSON to validate');
      return;
    }

    try {
      JSON.parse(inputJson);
      setIsValid(true);
      toast.success('✅ JSON is valid!');
    } catch {
      setIsValid(false);
      toast.error('❌ JSON is invalid!');
    }
  };

  const clearAll = () => {
    setInputJson('');
    setOutputJson('');
    setIsValid(null);
    toast.success('Cleared all content');
  };

  const copyOutput = async () => {
    if (!outputJson) {
      toast.error('No output to copy');
      return;
    }

    try {
      await navigator.clipboard.writeText(outputJson);
      setCopied(true);
      toast.success('Output copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy to clipboard');
    }
  };

  const downloadOutput = () => {
    if (!outputJson) {
      toast.error('No output to download');
      return;
    }

    const blob = new Blob([outputJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Formatted JSON downloaded!');
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex">
          {/* Left Sidebar Ad - Only show when enabled in config */}
          {adConfig.ads.left && (
            <div className="hidden lg:block lg:w-48 xl:w-56 flex-shrink-0 px-4">
              <AdPlacement position="left" config={adConfig} />
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 min-w-0">
        {/* Main Functionality - At the Top */}
        <div className="mb-8">
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <button
              onClick={beautifyJson}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Format JSON
            </button>
            
            <button
              onClick={validateJson}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
            >
              <AlertCircle className="w-5 h-5" />
              Validate JSON
            </button>
            
            <button
              onClick={clearAll}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              Clear All
            </button>
            
            <button
              onClick={copyOutput}
              disabled={!outputJson}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? 'Copied!' : 'Copy Output'}
            </button>
            
            <button
              onClick={downloadOutput}
              disabled={!outputJson}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-5 h-5" />
              Download
            </button>
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
                  placeholder="Paste your JSON here..."
                  className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none custom-scrollbar"
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
              <label htmlFor="output-json" className="block text-sm font-medium text-gray-700">
                Formatted JSON
              </label>
              <textarea
                id="output-json"
                value={outputJson}
                readOnly
                placeholder="Formatted JSON will appear here..."
                className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm bg-gray-50 resize-none custom-scrollbar"
              />
            </div>
          </div>
        </div>

        {/* Description and Info - Below Main Functionality */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            JSON Formatter / Prettifier
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beautify, validate, and format your JSON data instantly. Free online tool with no registration required.
          </p>
        </div>

        {/* JSON Statistics */}
        {outputJson && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">JSON Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Characters:</span>
                <span className="ml-2 font-medium">{outputJson.length}</span>
              </div>
              <div>
                <span className="text-gray-600">Lines:</span>
                <span className="ml-2 font-medium">{outputJson.split('\n').length}</span>
              </div>
              <div>
                <span className="text-gray-600">Size:</span>
                <span className="ml-2 font-medium">
                  {(new Blob([outputJson]).size / 1024).toFixed(2)} KB
                </span>
              </div>
              <div>
                <span className="text-gray-600">Status:</span>
                <span className={`ml-2 font-medium ${isValid ? 'text-green-600' : 'text-red-600'}`}>
                  {isValid ? 'Valid' : 'Invalid'}
                </span>
              </div>
            </div>
          </div>
        )}
          </div>

          {/* Right Sidebar Ad - Only show when enabled in config */}
          {adConfig.ads.right && (
            <div className="hidden lg:block lg:w-48 xl:w-56 flex-shrink-0 px-4">
              <AdPlacement position="right" config={adConfig} />
            </div>
          )}
        </div>
      </div>

      {/* Interstitial Ad */}
      <InterstitialAd isOpen={showInterstitial} onClose={closeInterstitial} />
    </>
  );
};
