// LandingPage.js

import React, { useState } from "react";
import Viewer from "../../Common/3DmodelViewer";
import { BsArrowUpCircleFill } from "react-icons/bs";

function LandingPage() {
  const [text, setText] = useState("");
  const [modelPath, setModelPath] = useState(true);

  const handleGenerateModel = async () => {
    // Example API Call - You would call your API here to generate a model path
    // For now, we'll simulate by setting a model path
    setModelPath("../../Assets/asset_1.glb");
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="max-w-4xl w-full text-center text-black dark:text-white">
        
      <div className="mt-6 m-auto h-50 w-50 top-0 left-0 ">
            <Viewer />
          </div>
        
        <h1 className="text-4xl font-bold mb-4">Generate Your 3D Model</h1>
        <p className="mb-6">Enter a description to generate a 3D model.</p>
        <div className="w-full flex flex-nowrap bg-gray-300 rounded-lg shadow-neumorphism dark:shadow-neumorphismDark">
          <input
            type="text"
            placeholder="Enter your description..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className=" p-3 m-4 mr-1 text-gray-900  rounded flex-grow ring-0 border-none focus:ring-0 focus:border-none"
          />

          <button
            onClick={handleGenerateModel}
            className=" m-4 p-3 bg-gray-200 dark:bg-gray-700 rounded"
          >
           <BsArrowUpCircleFill size={29} />
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default LandingPage;
