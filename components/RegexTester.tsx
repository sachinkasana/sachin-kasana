'use client';

import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function RegexTester() {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [testString, setTestString] = useState('');
  const [matches, setMatches] = useState<string[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    window.gtag && window.gtag('event', 'tool_view', {
      event_category: 'Developer Tools',
      tool_name: 'Regex Tester',
      tool_referrer: 'tool_page_internal',
    });
  }, []);

  const testRegex = () => {
    try {
      const regex = new RegExp(pattern, flags);
      const result = [...testString.matchAll(regex)].map((match) => match[0]);
      setMatches(result);
      setError('');
      window.gtag && window.gtag('event', 'test_regex', {
        event_category: 'Regex Tool',
        event_label: 'Test Button Clicked',
        tool_name: 'Regex Tester',
        tool_referrer: 'tool_page_internal',
      });
    } catch (err: any) {
      setMatches([]);
      setError(`Invalid regex: ${err.message}`);
      window.gtag && window.gtag('event', 'regex_error', {
        event_category: 'Regex Tool',
        event_label: 'Invalid Pattern',
        tool_name: 'Regex Tester',
        tool_referrer: 'tool_page_internal',
      });
    }
  };

  const getHighlightedText = () => {
    if (!pattern || error) return testString;

    try {
      const regex = new RegExp(pattern, flags);
      const parts = testString.split(regex);
      const foundMatches = [...testString.matchAll(regex)].map((m) => m[0]);

      const result: (string | React.JSX.Element)[] = [];
      let matchIndex = 0;

      parts.forEach((part, idx) => {
        result.push(part);
        if (matchIndex < foundMatches.length) {
          result.push(
            <span key={`match-${idx}`} className="bg-yellow-300 text-black px-1 rounded-sm">
              {foundMatches[matchIndex++]}
            </span>
          );
        }
      });

      return result;
    } catch {
      return testString;
    }
  };

  return (
    <div className="space-y-6">
      {/* Pattern input */}
      <div>
        <label className="block font-medium mb-2">Regex Pattern</label>
        <input
          type="text"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          placeholder="e.g. \\d+"
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white font-mono"
        />
      </div>

      {/* Flags input */}
      <div>
        <label className="block font-medium mb-2">Flags (e.g. g, i, m)</label>
        <input
          type="text"
          value={flags}
          onChange={(e) => setFlags(e.target.value)}
          placeholder="e.g. gi"
          maxLength={3}
          className="w-24 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white font-mono"
        />
      </div>

      {/* Test string input */}
      <div>
        <label className="block font-medium mb-2">Test String</label>
        <textarea
          rows={4}
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="Paste or type your test string here..."
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white font-mono"
        />
      </div>

      <button
        onClick={testRegex}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
      >
        Test Regex
      </button>

      {/* Error */}
      {error && (
        <p className="text-red-600 font-semibold bg-red-100 dark:bg-red-900 p-3 rounded">
          {error}
        </p>
      )}

      {/* Matches */}
      {matches.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold text-lg mb-2">Matches:</h3>
          <ul className="list-disc ml-6 text-green-600 dark:text-green-400">
            {matches.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Highlight preview */}
      {testString && !error && (
        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-2">Preview with Highlight:</h3>
          <div className="whitespace-pre-wrap font-mono p-4 rounded bg-gray-100 dark:bg-gray-800 border dark:border-gray-700">
            {getHighlightedText()}
          </div>
        </div>
      )}

      {/* No match fallback */}
      {matches.length === 0 && testString && !error && (
        <p className="text-gray-500 italic">No matches found.</p>
      )}
    </div>
  );
}
