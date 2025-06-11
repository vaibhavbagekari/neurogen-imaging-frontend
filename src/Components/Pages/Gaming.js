import React from 'react'
import { ModelViewer } from '../../Common'

function Gaming() {
  return (
    <div>
    <div className="m-auto h-[100vh] w-[100vw] top-0 left-0 flex items-center justify-center gun_bg">
          <ModelViewer path={"/stars/scene.gltf"} x={100}/>
    </div>
</div>
  )
}

export default Gaming
