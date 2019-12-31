import * as THREE from "three"
import React, { useRef, useEffect } from "react"
import { apply, Canvas, useRender, useThree, extend } from "react-three-fiber"
import { useSprings, a } from "@react-spring/three"
import * as resources from "../resources/index"
// import './styles.css'
// Make extra stuff available as native-elements (<effectComposer />, etc.)
// apply(resources)
extend(resources)

const number = 30
const colors = [
  "#232e6c",
  "#2f72da",
  "#19252e",
  "#19252e",
  "#84ade7",
  "#868787",
  "#fff",
]
const random = () => {
  const r = Math.random()
  return {
    position: [30 - Math.random() * 60, 30 - Math.random() * 60, 0],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 10, 1 + r * 10, 1],
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)],
  }
}

function Content() {
  const { viewport } = useThree()
  const aspect = viewport.width / 6
  const [springs, set] = useSprings(number, i => ({
    from: random(),
    ...random(),
    config: { mass: 50, tension: 500, friction: 200 },
  }))
  useEffect(
    () =>
      void setInterval(() => set(i => ({ ...random(), delay: i * 50 })), 6000),
    []
  )
  return springs.map(({ color, ...props }, index) => (
    <a.mesh key={index} {...props}>
      <planeBufferGeometry
        attach="geometry"
        args={[0.1 + Math.random() * aspect, 0.1 + Math.random() * aspect]}
      />
      <a.meshPhongMaterial attach="material" color={color} />
    </a.mesh>
  ))
}

function Effect() {
  const composer = useRef()
  const { scene, gl, size, camera } = useThree()
  useEffect(() => void composer.current.setSize(size.width, size.height), [
    size,
  ])
  useRender(() => composer.current.render(), true)
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <waterPass attachArray="passes" factor={1} />
      <shaderPass
        attachArray="passes"
        args={[resources.FXAAShader]}
        material-uniforms-resolution-value={[1 / size.width, 1 / size.height]}
        renderToScreen
      />
    </effectComposer>
  )
}

export default function Background() {
  return (
    <div class="main" style={{ color: "#172717" }}>
      <Canvas
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        camera={{ position: [0, 0, 30] }}
      >
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.5} position={[300, 300, 4000]} />
        <Effect />
        <Content />
      </Canvas>
    </div>
  )
}
