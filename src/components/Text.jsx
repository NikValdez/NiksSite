import * as THREE from "three"
import React, { useMemo } from "react"
import { useLoader, useUpdate } from "react-three-fiber"

export default function({
  children,
  vAlign = "left",
  hAlign = "left",
  size = 1,
  // color = "#000000",
  ...props
}) {
  const font = useLoader(THREE.FontLoader, "/bold.blob")
  const config = useMemo(
    () => ({
      font,
      size: 40,
      height: 30,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 3,
      bevelSize: 2.5,
      bevelOffset: -1,
      bevelSegments: 8,
    }),
    [font]
  )
  const mesh = useUpdate(
    self => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)
      self.position.x =
        hAlign === "center" ? -size.x / 2 : hAlign === "right" ? 0 : -size.x
      self.position.y =
        vAlign === "center" ? -size.y / 2 : vAlign === "top" ? 0 : -size.y
    },
    [children]
  )

  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh
        material={
          new THREE.MeshBasicMaterial({
            color: "#232e6c",
            transparent: true,
            opacity: 0.3,
            wireframe: true,
            wireframeLinewidth: 2,
          })
        }
        ref={mesh}
      >
        <textGeometry attach="geometry" args={[children, config]} />
      </mesh>
    </group>
  )
}
