import React from 'react';

const Form = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-md">
      <div className="mb-4">
        <label className="block text-white mb-2">Description Prompt</label>
        <input
          type="text"
          className="w-full p-2 rounded-md bg-gray-700 text-white"
          placeholder="What do you want to see?"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Remove (Negative Prompt)</label>
        <input
          type="text"
          className="w-full p-2 rounded-md bg-gray-700 text-white"
          placeholder="What do you want to avoid?"
        />
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" className="mr-2" />
        <span className="text-white">Negative Prompt</span>
      </div>
    </div>
  );
};

export default Form;
