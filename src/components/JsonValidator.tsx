'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Copy, Check } from 'lucide-react';
import toast from 'react-hot-toast';

export const JsonValidator = () => {
  const [inputJson, setInputJson] = useState('');
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    error?: string;
    formatted?: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const validateJson = () => {
    if (!inputJson.trim()) {
      toast.error('Please enter JSON to validate');
      return;
    }

    try {
      const parsed = JSON.parse(inputJson);
      const formatted = JSON.stringify(parsed, null, 2);
      setValidationResult({
        isValid: true,
        formatted,
      });
      toast.success('✅ JSON is valid!');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Invalid JSON';
      setValidationResult({
        isValid: false,
        error: errorMessage,
      });
      toast.error('❌ JSON is invalid!');
    }
  };

  const clearAll = () => {
    setInputJson('');
    setValidationResult(null);
    toast.success('Cleared all content');
  };

  const copyResult = async () => {
    if (!validationResult?.formatted) {
      toast.error('No valid JSON to copy');
      return;
    }

    try {
      await navigator.clipboard.writeText(validationResult.formatted);
      setCopied(true);
      toast.success('Valid JSON copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          JSON Validator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Validate your JSON syntax and structure. Get detailed error messages and formatted output for valid JSON.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <button
          onClick={validateJson}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
        >
          <CheckCircle className="w-5 h-5" />
          Validate JSON
        </button>
        
        <button
          onClick={clearAll}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
        >
          Clear All
        </button>
        
        {validationResult?.isValid && (
          <button
            onClick={copyResult}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center gap-2"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            {copied ? 'Copied!' : 'Copy Valid JSON'}
          </button>
        )}
      </div>

      {/* JSON Input Area */}
      <div className="space-y-2 mb-6">
        <label htmlFor="input-json" className="block text-sm font-medium text-gray-700">
          Input JSON
        </label>
        <div className="relative">
            <textarea
              id="input-json"
              value={inputJson}
              onChange={(e) => setInputJson(e.target.value)}
              placeholder="Paste your JSON here to validate..."
              className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none custom-scrollbar"
            />
          {validationResult && (
            <div className="absolute top-2 right-2">
              {validationResult.isValid ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500" />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Validation Result */}
      {validationResult && (
        <div className="space-y-4">
          {/* Status */}
          <div className={`p-4 rounded-lg ${
            validationResult.isValid 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-center gap-2">
              {validationResult.isValid ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500" />
              )}
              <span className={`font-medium ${
                validationResult.isValid ? 'text-green-800' : 'text-red-800'
              }`}>
                {validationResult.isValid ? 'JSON is Valid!' : 'JSON is Invalid'}
              </span>
            </div>
            {validationResult.error && (
              <p className="mt-2 text-sm text-red-700 font-mono">
                Error: {validationResult.error}
              </p>
            )}
          </div>

          {/* Formatted Output (if valid) */}
          {validationResult.isValid && validationResult.formatted && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Formatted Valid JSON
              </label>
              <textarea
                value={validationResult.formatted}
                readOnly
                className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm bg-gray-50 resize-none custom-scrollbar"
              />
            </div>
          )}
        </div>
      )}

      {/* JSON Statistics */}
      {validationResult?.isValid && validationResult.formatted && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">JSON Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Characters:</span>
              <span className="ml-2 font-medium">{validationResult.formatted.length}</span>
            </div>
            <div>
              <span className="text-gray-600">Lines:</span>
              <span className="ml-2 font-medium">{validationResult.formatted.split('\n').length}</span>
            </div>
            <div>
              <span className="text-gray-600">Size:</span>
              <span className="ml-2 font-medium">
                {(new Blob([validationResult.formatted]).size / 1024).toFixed(2)} KB
              </span>
            </div>
            <div>
              <span className="text-gray-600">Status:</span>
              <span className="ml-2 font-medium text-green-600">Valid</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
