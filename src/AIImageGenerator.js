import React from "react";

const AIImageGenerator = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-indigo-900 to-purple-900">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 bg-gray-800">
        <div className="text-lg font-semibold">AI Image Generator</div>
        <div className="flex items-center">
          <span className="mr-4">Vaibhav Bagekari</span>
          <img
            src="profile-pic-url" // Replace with actual profile image
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col items-center p-8">
        <div className="w-full max-w-3xl p-6 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold text-center">AI Image Generator</h2>

          {/* Description and Negative Prompt */}
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Description prompt</label>
              <input
                type="text"
                className="w-full p-2 text-white bg-gray-700 rounded outline-none"
                placeholder="What do you want to see?"
              />
            </div>
            <div>
              <label className="block mb-1">Remove (negative prompt)</label>
              <input
                type="text"
                className="w-full p-2 text-white bg-gray-700 rounded outline-none"
                placeholder="What do you want to avoid?"
              />
            </div>

            {/* Prompt Options */}
            <div className="flex items-center mt-4 space-x-4">
              <button className="px-4 py-2 bg-indigo-700 rounded">Square Aspect</button>
              <button className="px-4 py-2 bg-indigo-700 rounded">No Style</button>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 form-checkbox" />
                <span>Negative Prompt</span>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button className="px-4 py-2 bg-gray-700 rounded">Rnd</button>
              <button className="px-4 py-2 bg-gray-700 rounded">Clear</button>
              <button className="px-6 py-2 bg-indigo-600 rounded">Generate</button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid w-full max-w-3xl grid-cols-3 gap-4 mt-8">
          <div className="p-4 bg-gray-800 rounded-lg">
            <div className="h-48 mb-4 bg-blue-700 rounded"></div>
            <div className="text-center">Transparency</div>
            <p className="text-xs text-center">Lorem ipsum proesent</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <div className="h-48 mb-4 bg-blue-600 rounded"></div>
            <div className="text-center">Transparency</div>
            <p className="text-xs text-center">Lorem ipsum proesent</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <div className="h-48 mb-4 bg-blue-500 rounded"></div>
            <div className="text-center">Transparency</div>
            <p className="text-xs text-center">Lorem ipsum proesent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIImageGenerator;
