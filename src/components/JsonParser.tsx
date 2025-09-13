'use client';

import { useState } from 'react';
import type { JSX } from 'react';
import { CheckCircle, AlertCircle, Copy, Check, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';

export const JsonParser = () => {
  const [inputJson, setInputJson] = useState('');
  const [parsedData, setParsedData] = useState<unknown | null>(null);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState<string>('');
  const [showTree, setShowTree] = useState(false);
  const [copied, setCopied] = useState(false);

  const parseJson = () => {
    if (!inputJson.trim()) {
      toast.error('Please enter JSON to parse');
      return;
    }

    try {
      const parsed = JSON.parse(inputJson);
      setParsedData(parsed);
      setIsValid(true);
      setError('');
      toast.success('JSON parsed successfully!');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Invalid JSON';
      setError(errorMessage);
      setIsValid(false);
      setParsedData(null);
      toast.error('Failed to parse JSON');
    }
  };

  const clearAll = () => {
    setInputJson('');
    setParsedData(null);
    setIsValid(null);
    setError('');
    toast.success('Cleared all content');
  };

  const copyParsedData = async () => {
    if (!parsedData) {
      toast.error('No parsed data to copy');
      return;
    }

    try {
      const jsonString = JSON.stringify(parsedData, null, 2);
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      toast.success('Parsed data copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy to clipboard');
    }
  };


  const renderTree = (obj: unknown, depth = 0): JSX.Element => {
    if (obj === null) return <span className="text-gray-500">null</span>;
    if (typeof obj === 'string') return <span className="text-green-600">&quot;{obj}&quot;</span>;
    if (typeof obj === 'number') return <span className="text-blue-600">{obj}</span>;
    if (typeof obj === 'boolean') return <span className="text-purple-600">{String(obj)}</span>;
    
    if (Array.isArray(obj)) {
      return (
        <div className="ml-4">
          <span className="text-gray-600">[</span>
          {obj.length === 0 ? (
            <span className="text-gray-500">]</span>
          ) : (
            <div className="ml-4">
              {obj.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-gray-500 mr-2">{index}:</span>
                  {renderTree(item, depth + 1)}
                  {index < obj.length - 1 && <span className="text-gray-600">,</span>}
                </div>
              ))}
              <span className="text-gray-600">]</span>
            </div>
          )}
        </div>
      );
    }
    
    if (typeof obj === 'object' && obj !== null) {
      const keys = Object.keys(obj as Record<string, unknown>);
      return (
        <div className="ml-4">
          <span className="text-gray-600">{'{'}</span>
          {keys.length === 0 ? (
            <span className="text-gray-500">{'}'}</span>
          ) : (
            <div className="ml-4">
              {keys.map((key, index) => (
                <div key={key} className="flex items-start">
                  <span className="text-red-600 mr-2">&quot;{key}&quot;:</span>
                  {renderTree((obj as Record<string, unknown>)[key], depth + 1)}
                  {index < keys.length - 1 && <span className="text-gray-600">,</span>}
                </div>
              ))}
              <span className="text-gray-600">{'}'}</span>
            </div>
          )}
        </div>
      );
    }
    
    return <span>{String(obj)}</span>;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          JSON Parser
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Parse JSON strings into JavaScript objects. Analyze structure, extract data, and visualize the parsed result.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <button
          onClick={parseJson}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
        >
          <CheckCircle className="w-5 h-5" />
          Parse JSON
        </button>
        
        <button
          onClick={clearAll}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
        >
          Clear All
        </button>
        
        {parsedData !== null && (
          <button
            onClick={copyParsedData}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center gap-2"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            {copied ? 'Copied!' : 'Copy Parsed Data'}
          </button>
        )}
        
        {parsedData !== null && (
          <button
            onClick={() => setShowTree(!showTree)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
          >
            {showTree ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            {showTree ? 'Hide Tree' : 'Show Tree'}
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
              placeholder="Paste your JSON here to parse..."
              className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none custom-scrollbar"
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

      {/* Error Display */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <span className="font-medium text-red-800">Parse Error</span>
          </div>
          <p className="mt-2 text-sm text-red-700 font-mono">{error}</p>
        </div>
      )}

      {/* Parsed Data Display */}
      {parsedData !== null && (
        <div className="space-y-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium text-green-800">JSON Parsed Successfully!</span>
            </div>
          </div>

          {/* Tree View */}
          {showTree && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Object Tree Structure
              </label>
              <div className="p-4 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm max-h-96 overflow-auto">
                {renderTree(parsedData)}
              </div>
            </div>
          )}

          {/* Formatted JSON */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Formatted JSON Output
            </label>
              <textarea
                value={JSON.stringify(parsedData, null, 2)}
                readOnly
                className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm bg-gray-50 resize-none custom-scrollbar"
              />
          </div>
        </div>
      )}

      {/* Data Statistics */}
      {parsedData !== null && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Data Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Type:</span>
              <span className="ml-2 font-medium">{Array.isArray(parsedData) ? 'Array' : typeof parsedData}</span>
            </div>
            <div>
              <span className="text-gray-600">Size:</span>
              <span className="ml-2 font-medium">
                {Array.isArray(parsedData) 
                  ? `${parsedData.length} items`
                  : typeof parsedData === 'object' && parsedData !== null
                    ? `${Object.keys(parsedData as Record<string, unknown>).length} properties`
                    : '1 item'
                }
              </span>
            </div>
            <div>
              <span className="text-gray-600">Depth:</span>
              <span className="ml-2 font-medium">
                {JSON.stringify(parsedData).split('{').length - 1 + JSON.stringify(parsedData).split('[').length - 1}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Status:</span>
              <span className="ml-2 font-medium text-green-600">Parsed</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
