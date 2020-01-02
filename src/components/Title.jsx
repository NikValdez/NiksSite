import React, { Suspense, useRef } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import Text from "./Text"

function Big() {
  const ref = useRef()
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z =
        Math.sin(clock.getElapsedTime()) * 0.2)
  )
  return (
    <group ref={ref}>
      <Text hAlign="center" position={[0, 4.2, 0]} children="NIKS" />
      <Text hAlign="right" position={[0, 0, 0]} children="BLOG" />
    </group>
  )
}

function Title() {
  return (
    <Canvas camera={{ position: [0, 0, 35] }} style={{ top: -250, left: -400 }}>
      <Suspense fallback={null}>
        <Big />
      </Suspense>
    </Canvas>
  )
}

export default Title
