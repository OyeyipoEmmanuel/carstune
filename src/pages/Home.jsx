import {
  AccumulativeShadows,
  CameraControls,
  Environment,
  MeshReflectorMaterial,
  PresentationControls,
  RandomizedLight,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Home = () => {
  return (
    <Canvas shadows camera={{ position: [0, 1.5, 8], fov:25 }}>
      <color attach="background" args={["#213547"]}/>
      <fog attach="fog" args={["#213547", 10, 20]}/>

      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage environment="city" intensity={0.6} castShadow={false}   adjustCamera={false}>
          <Suspense fallback={null}>
            <mesh castShadow position={[0, 0.75, 0]}>
              <boxGeometry args={[1,1,1]} />
              <meshStandardMaterial color="#c00000" />
            </mesh>
          </Suspense>
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>
      </PresentationControls>
      {/* 
      <ambientLight intensity={0.3} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={1}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      <directionalLight position={[-5, 3, -5]} intensity={1.2} />

      <PresentationControls
        global
        speed={1.2}
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <mesh castShadow position={[0, 0.75, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#c00000" />
        </mesh>
      </PresentationControls>

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#050505" roughness={0.75} metalness={0.1} />
      </mesh>

      <Environment preset="studio" /> */}
    </Canvas>
  );
};

export default Home;
