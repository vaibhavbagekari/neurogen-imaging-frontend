import React, { useState } from "react";

const AIImageGenerator = () => {
  // State management for modals
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isPromptModalOpen, setPromptModalOpen] = useState(false);
  const [isNegativePromptModalOpen, setNegativePromptModalOpen] = useState(false);
  const [isResultModalOpen, setResultModalOpen] = useState(false);
  const [currentResult, setCurrentResult] = useState(null);

  // Handlers to open and close modals
  const openProfileModal = () => setProfileModalOpen(true);
  const closeProfileModal = () => setProfileModalOpen(false);

  const openPromptModal = () => setPromptModalOpen(true);
  const closePromptModal = () => setPromptModalOpen(false);

  const openNegativePromptModal = () => setNegativePromptModalOpen(true);
  const closeNegativePromptModal = () => setNegativePromptModalOpen(false);

  const openResultModal = (result) => {
    setCurrentResult(result);
    setResultModalOpen(true);
  };
  const closeResultModal = () => setResultModalOpen(false);

  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-indigo-900 to-purple-900">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 bg-gray-800">
        <div className="text-lg font-semibold">AI Image Generator</div>
        <div className="flex items-center">
          <button onClick={openProfileModal} className="flex items-center space-x-2">
            <span className="mr-2">Vaibhav Bagekari</span>
            <img
              src="profile-pic-url" // Replace with actual profile image
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </button>
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
                onClick={openPromptModal}
                className="w-full p-2 text-white bg-gray-700 rounded outline-none cursor-pointer"
                placeholder="What do you want to see?"
                readOnly
              />
            </div>
            <div>
              <label className="block mb-1">Remove (negative prompt)</label>
              <input
                type="text"
                onClick={openNegativePromptModal}
                className="w-full p-2 text-white bg-gray-700 rounded outline-none cursor-pointer"
                placeholder="What do you want to avoid?"
                readOnly
              />
            </div>

            {/* Prompt Options */}
            <div className="flex items-center mt-4 space-x-4">
              <button
                onClick={() => alert("Square Aspect clicked")}
                className="px-4 py-2 transition bg-indigo-700 rounded hover:bg-indigo-600"
              >
                Square Aspect
              </button>
              <button
                onClick={() => alert("No Style clicked")}
                className="px-4 py-2 transition bg-indigo-700 rounded hover:bg-indigo-600"
              >
                No Style
              </button>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 form-checkbox" />
                <span>Negative Prompt</span>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6 space-x-2">
              <button
                onClick={() => alert("Random clicked")}
                className="flex-1 px-4 py-2 transition bg-gray-700 rounded hover:bg-gray-600"
              >
                Rnd
              </button>
              <button
                onClick={() => alert("Clear clicked")}
                className="flex-1 px-4 py-2 transition bg-gray-700 rounded hover:bg-gray-600"
              >
                Clear
              </button>
              <button
                onClick={() => alert("Generate clicked")}
                className="flex-1 px-6 py-2 transition bg-indigo-600 rounded hover:bg-indigo-500"
              >
                Generate
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 mt-8 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              onClick={() => openResultModal(item)}
              className="p-4 transition bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700"
            >
              <div className={`h-48 mb-4 bg-blue-${700 - item * 100} rounded`}></div>
              <div className="font-semibold text-center">Transparency {item}</div>
              <p className="text-xs text-center">Lorem ipsum proesent</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {/* Profile Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-gray-800 rounded-lg w-80">
            <h3 className="mb-4 text-xl font-semibold">Profile Information</h3>
            <p>Name: Vaibhav Bagekari</p>
            <p>Email: vaibhav@example.com</p>
            {/* Add more profile details as needed */}
            <button
              onClick={closeProfileModal}
              className="px-4 py-2 mt-4 transition bg-indigo-600 rounded hover:bg-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Prompt Modal */}
      {isPromptModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-gray-800 rounded-lg w-80">
            <h3 className="mb-4 text-xl font-semibold">Edit Description Prompt</h3>
            <input
              type="text"
              className="w-full p-2 text-black bg-gray-300 rounded"
              placeholder="What do you want to see?"
            />
            <button
              onClick={closePromptModal}
              className="px-4 py-2 mt-4 transition bg-indigo-600 rounded hover:bg-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Negative Prompt Modal */}
      {isNegativePromptModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-gray-800 rounded-lg w-80">
            <h3 className="mb-4 text-xl font-semibold">Edit Negative Prompt</h3>
            <input
              type="text"
              className="w-full p-2 text-black bg-gray-300 rounded"
              placeholder="What do you want to avoid?"
            />
            <button
              onClick={closeNegativePromptModal}
              className="px-4 py-2 mt-4 transition bg-indigo-600 rounded hover:bg-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Result Modal */}
      {isResultModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-gray-800 rounded-lg w-96">
            <h3 className="mb-4 text-xl font-semibold">Result {currentResult}</h3>
            <div className={`h-64 mb-4 bg-blue-${700 - currentResult * 100} rounded`}></div>
            <p className="mb-4">Detailed information about Result {currentResult}.</p>
            <button
              onClick={closeResultModal}
              className="px-4 py-2 mt-2 transition bg-indigo-600 rounded hover:bg-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIImageGenerator;
