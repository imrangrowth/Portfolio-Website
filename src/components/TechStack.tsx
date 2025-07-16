"use client";

import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
} from "@react-three/rapier";
import type { RigidBodyApi } from "@react-three/rapier/dist/declarations/src/types";

import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";

import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Vignette } from "@react-three/postprocessing";

export default function Techstack() {
  const rigidRef = useRef<RigidBodyApi>(null);

  return (
    <section className="relative h-screen bg-black">
      <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
        <color attach="background" args={["#000"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Physics>
            <RigidBody ref={rigidRef} colliders="cuboid">
              <mesh position={[0, 1, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="hotpink" />
              </mesh>
            </RigidBody>
            <BallCollider args={[0.5]} />
            <CylinderCollider args={[0.5, 1]} />
          </Physics>
        </Suspense>
        <EffectComposer>
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        <OrbitControls />
      </Canvas>
    </section>
  );
}