import { render } from "react-dom"
import React, { useMemo, useRef } from "react"
import * as THREE from "three"
import * as meshline from "threejs-meshline"
import { extend, Canvas, useFrame, useThree } from "react-three-fiber"

extend(meshline)

function Fatline({ curve, width, color, speed }) {
  const material = useRef()
  useFrame(() => (material.current.uniforms.dashOffset.value -= speed))
  return (
    <mesh>
      <meshLine attach="geometry" vertices={curve} />
      <meshLineMaterial
        attach="material"
        ref={material}
        transparent
        depthTest={false}
        lineWidth={width}
        color={color}
        dashArray={0.5}
        dashRatio={0.9}
        opacity={Math.random()}
      />
    </mesh>
  )
}

function Lines({ count, colors }) {
  const lines = useMemo(
    () =>
      new Array(count).fill().map(() => {
        const pos = new THREE.Vector3(
          10 - Math.random() * 20,
          10 - Math.random() * 20,
          10 - Math.random() * 20
        )
        const points = new Array(30)
          .fill()
          .map(() =>
            pos
              .add(
                new THREE.Vector3(
                  4 - Math.random() * 8,
                  4 - Math.random() * 8,
                  2 - Math.random() * 4
                )
              )
              .clone()
          )
        const curve = new THREE.CatmullRomCurve3(points).getPoints(1000)
        return {
          color: colors[parseInt(colors.length * Math.random())],
          width: Math.max(0.1, 0.4 * Math.random()),
          speed: Math.max(0.000001, 0.00005 * Math.random()),
          curve,
        }
      }),
    [colors, count]
  )
  return lines.map((props, index) => <Fatline key={index} {...props} />)
}

function Rig({ mouse }) {
  const { camera } = useThree()
  useFrame(() => {
    camera.position.x += (mouse.current[0] / 100 - camera.position.x) * 0.5
    camera.position.y += (-mouse.current[1] / 100 - camera.position.y) * 0.5
    camera.lookAt(0, 0, 0)
  })
  return null
}

function Jumbo() {
  const mouse = useRef([0, 0])
  return (
    <Canvas
      style={{
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      camera={{ position: [0, 0, 10], fov: 25 }}
      onMouseMove={e =>
        (mouse.current = [
          e.clientX - window.innerWidth / 2,
          e.clientY - window.innerHeight / 2,
        ])
      }
    >
      <Lines
        count={100}
        colors={[
          "#232e6c",
          "#2f72da",
          "#19252e",
          "#19252e",
          "#84ade7",
          "#868787",
        ]}
      />
      <Rig mouse={mouse} />
    </Canvas>
  )
}

export default Jumbo
