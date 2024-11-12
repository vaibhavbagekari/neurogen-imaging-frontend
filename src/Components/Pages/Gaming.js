import React from 'react'
import { ModelViewer } from '../../Common'

function Gaming() {
  return (
    <div>
    <div className="mt-6 m-auto h-[100vh] w-[100vw] top-0 left-0 flex items-center ">
          <ModelViewer path={"/stars/scene.gltf"}/>
    </div>
</div>
  )
}

export default Gaming
