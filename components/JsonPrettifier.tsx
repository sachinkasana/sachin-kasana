'use client';

import { useEffect, useState } from 'react';
declare global {
    interface Window {
      gtag?: (...args: any[]) => void;
    }
  }
  
export default function JsonPrettifier() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    window.gtag && window.gtag('event', 'tool_view', {
      event_category: 'Developer Tools',
      tool_name: 'JSON Prettifier',
      tool_referrer: 'tool_page_internal',
    });
  }, []);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      const pretty = JSON.stringify(parsed, null, 2);
      setOutput(pretty);
      setError('');
       // 📊 GA Event for Format
       window.gtag && window.gtag('event', 'format_json', {
        event_category: 'JSON Tool',
        event_label: 'Format Button Clicked',
        tool_name: 'JSON Prettifier',
        tool_referrer: 'tool_page_internal',
      });
    } catch (err: any) {
      setError('⚠️ Invalid JSON format. Please check for missing quotes, commas, or braces.');
      setOutput('');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    // 📊 GA Event for Copy
    window.gtag && window.gtag('event', 'copy_json', {
        event_category: 'JSON Tool',
        event_label: 'Copy Button Clicked',
        tool_name: 'JSON Prettifier',
        tool_referrer: 'tool_page_internal',
      });
  };

  const downloadJson = () => {
    const blob = new Blob([output], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'formatted.json';
    link.click();
     // 📊 GA Event for Download
     window.gtag && window.gtag('event', 'download_json', {
        event_category: 'JSON Tool',
        event_label: 'Download Button Clicked',
        tool_name: 'JSON Prettifier',
        tool_referrer: 'tool_page_internal',
      });
  };

  return (
    <div className="space-y-6">
      <textarea
        rows={8}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste raw JSON here..."
        className="w-full p-4 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md font-mono"
      />
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={formatJson}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Format JSON
        </button>
        {output && (
          <button
            onClick={downloadJson}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Download .json
          </button>
        )}
      </div>

      {error && (
        <p className="text-red-600 font-semibold bg-red-100 dark:bg-red-900 p-3 rounded">
          {error}
        </p>
      )}

      {output && (
        <div className="relative mt-6">
          <pre className="bg-gray-100 dark:bg-gray-900 text-sm p-4 rounded-md overflow-auto font-mono border dark:border-gray-700">
            {output}
          </pre>
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 text-xs px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
}
