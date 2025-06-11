// LandingPage.js

import React, { useState } from "react";
import Viewer from "../../Common/3DmodelViewer";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { PLYModelViewer, PopUpWindow } from "../../Common";
import { Generate3DModel } from "../../Services/3dGenerationServices";
import ThreeDModelLoader from "../../Common/ThreeDModelLoader ";

function LandingPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [plyModelPath, setPlyModelPath] = useState("");
  const [objModelPath, setObjModelPath] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  const handleGenerateModel = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }
    setShowPopUp(true);
    setLoading(true);

    const blob = new Blob([file], { type: file.type });

    const formData = new FormData();
    formData.append("image", blob, file.name);
    try {
      const response = await Generate3DModel(formData);
      if (response.status === 200) {
        setPlyModelPath(response.data.ply_url);
        setObjModelPath(response.data.obj_url);
      } else {
        alert("Model generation failed.");
      }
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full text-center text-black dark:text-white">

        <div className="mt-6 m-auto h-50 w-50 top-0 left-0">
          <Viewer />
        </div>

        <h1 className="text-4xl font-bold mb-4">Generate Your 3D Model</h1>
        <p className="mb-6">Upload an image to generate a 3D model.</p>

        <div className="w-full flex flex-nowrap bg-gray-300 rounded-lg shadow-neumorphism dark:shadow-neumorphismDark">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="p-3 m-4 mr-1 text-gray-900 rounded flex-grow ring-0 border-none focus:ring-0 focus:border-none"
          />

          <button
            onClick={handleGenerateModel}
            className="m-4 p-3 bg-gray-200 dark:bg-gray-700 rounded"
          >
            <BsArrowUpCircleFill size={29} />
          </button>
        </div>

      </div>

      {showPopUp && (
        <PopUpWindow closeWindow={() => setShowPopUp(false)}>
          {
            loading ?
              <ThreeDModelLoader /> :
              (<>
                <PLYModelViewer fileUrl={plyModelPath} />
                <div className="mt-4 flex gap-4">
                  <a
                    href={plyModelPath}
                    download
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Download .PLY
                  </a>
                  <a
                    href={objModelPath}
                    download
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    Download .OBJ
                  </a>
                </div>
              </>)

          }
        </PopUpWindow>
      )}
    </div>
  );
}

export default LandingPage;
