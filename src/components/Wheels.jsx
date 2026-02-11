// components/Wheels.jsx
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import useChangeWheels from "../store/useChangeWheels";

// Define positions and scale for each wheel type
const WHEEL_CONFIGS = {
  sport: {
    scale: 0.1, // Different scale for sport
    positions: [
      { position: [0.19, -0.1, 0.14], rotation: [0, 0, 0], isLeft: false },
      { position: [0.19, -0.1, -1.15], rotation: [0, 0, 0], isLeft: false },
      { position: [-0.19, -0.12, 1.2], rotation: [Math.PI, 0, Math.PI], isLeft: true },
      { position: [-0.19, -0.12, -0.08], rotation: [Math.PI, 0, Math.PI], isLeft: true }
    ],
    modelPath: "/model/tyres/racing_tyre.glb"
  },
  offroad: {
    scale: 0.1, // Different scale for offroad
   positions: [
      { position: [0.19, -0.1, 0.14], rotation: [0, 0, 0], isLeft: false },
      { position: [0.19, -0.1, -1.15], rotation: [0, 0, 0], isLeft: false },
      { position: [-0.19, -0.12, 1.2], rotation: [Math.PI, 0, Math.PI], isLeft: true },
      { position: [-0.19, -0.12, -0.08], rotation: [Math.PI, 0, Math.PI], isLeft: true }
    ],
    modelPath: "/model/tyres/offroad.glb"
  },
  fancy: {
    scale: 0.55, // Different scale for fancy
    positions: [
      { position: [0.95, -0.1, -0.25], rotation: [0, 0, 0], isLeft: false },
      { position: [0.95, -0.1, -1.56], rotation: [0, 0, 0], isLeft: false },
      { position: [-0.95, -0.11, 1.6], rotation: [Math.PI, 0, Math.PI], isLeft: true },
      { position: [-0.95, -0.1, 0.3], rotation: [Math.PI, 0, Math.PI], isLeft: true }
    ],
    modelPath: "/model/tyres/fancy_tyre.glb"
  }
};

function WheelInstance({ position, rotation, modelPath, scale }) {
  const { scene } = useGLTF(modelPath);
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  return (
    <group position={position} rotation={rotation}>
      <primitive 
        object={clonedScene} 
        scale={scale}
      />
    </group>
  );
}

const Wheels = () => {
  const selectedWheel = useChangeWheels((state) => state.selectedWheel);

  if (selectedWheel === "default") return null;

  const config = WHEEL_CONFIGS[selectedWheel];
  
  if (!config) return null;

  return (
    <>
      {config.positions.map((wheel, index) => (
        <WheelInstance
          key={`${selectedWheel}-${index}`}
          position={wheel.position}
          rotation={wheel.rotation}
          modelPath={config.modelPath}
          scale={config.scale}
        />
      ))}
    </>
  );
};

// Preload all wheels
Object.values(WHEEL_CONFIGS).forEach(config => 
  useGLTF.preload(config.modelPath)
);

export default Wheels;