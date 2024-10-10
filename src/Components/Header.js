import React, { useState } from 'react';

const AIImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false); // Manage button state

  const handleGenerateClick = () => {
    // Validation: Check if the description prompt is filled
    if (!prompt.trim()) {
      setError('Description prompt is required.');
      return;
    }
    setError(''); // Clear any existing error

    // Simulate image generation process
    setIsGenerating(true);
    setTimeout(() => {
      setResults([
        { id: 1, label: 'Transparency', description: 'Lorem ipsum present' },
        { id: 2, label: 'Transparency', description: 'Lorem ipsum present' },
        { id: 3, label: 'Transparency', description: 'Lorem ipsum present' },
      ]);
      setIsGenerating(false);
    }, 2000); // Simulate 2-second delay for image generation
  };

  return (
    <div className="min-h-screen p-8 text-white bg-gradient-to-r from-indigo-500 to-purple-600">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">AI Image Generator</h1>
        <div className="p-3 bg-gray-800 rounded-full">
          <span>Vaibhav Bagekari</span>
        </div>
      </header>

      <div className="p-6 bg-gray-900 shadow-lg rounded-xl">
        <h2 className="mb-4 text-xl">Description prompt</h2>
        <textarea
          className={`w-full p-4 rounded-lg bg-gray-700 text-white ${
            error ? 'border-2 border-red-500' : ''
          }`}
          placeholder="What do you want to see?"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        {error && <p className="mt-2 text-red-500">{error}</p>}

        <h2 className="mt-6 mb-4 text-xl">Remove (negative prompt)</h2>
        <textarea
          className="w-full p-4 text-white bg-gray-700 rounded-lg"
          placeholder="What do you want to avoid?"
          value={negativePrompt}
          onChange={(e) => setNegativePrompt(e.target.value)}
        />

        <div className="flex items-center mt-6 space-x-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Negative Prompt</span>
          </label>

          <button
            className={`px-4 py-2 rounded-lg ${
              isGenerating
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            onClick={handleGenerateClick}
            disabled={isGenerating}
          >
            {isGenerating ? 'Generating...' : 'Generate'}
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold">Results:</h2>
        <div className="grid grid-cols-3 gap-6">
          {results.map((result) => (
            <div key={result.id} className="p-6 text-center bg-gray-800 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full"></div>
              <h3 className="text-xl">{result.label}</h3>
              <p>{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIImageGenerator;
