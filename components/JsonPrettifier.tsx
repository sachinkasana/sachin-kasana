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
        className="input-surface min-h-[240px] font-mono text-sm text-black dark:text-white"
      />
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={formatJson}
          className="btn-primary"
        >
          Format JSON
        </button>
        {output && (
          <button
            onClick={downloadJson}
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Download .json
          </button>
        )}
      </div>

      {error && (
        <p className="rounded-2xl bg-red-100 p-3 font-semibold text-red-600 dark:bg-red-900">
          {error}
        </p>
      )}

      {output && (
        <div className="relative mt-6">
          <pre className="overflow-auto rounded-2xl border border-slate-200 bg-slate-50 p-4 font-mono text-sm dark:border-slate-700 dark:bg-slate-950">
            {output}
          </pre>
          <button
            onClick={copyToClipboard}
            className="absolute right-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white hover:bg-blue-700"
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
}
