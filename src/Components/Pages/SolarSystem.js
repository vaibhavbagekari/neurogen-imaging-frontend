import React from 'react'
import { ModelViewer } from '../../Common'
function SolarSystem() {
  return (
    <div>
        <div className="mt-6 m-auto h-[100vh] w-[100vw] top-0 left-0 flex items-center ">
        <ModelViewer path={"/scene.gltf"} x={0} y={0} z={10} fov={5}/>
        </div>
    </div>
  )
}

export default SolarSystem
