// components/Controls.jsx
import {
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  Stage,
} from "@react-three/drei";

const Controls = ({ children }) => {
  return (
    <PresentationControls
      speed={1.0}
      global
      zoom={1.2}
      polar={[-0.1, Math.PI / 4]}
      rotation={[Math.PI /16, Math.PI / 2, 0]}
    >
    <>
      {/* <PerspectiveCamera makeDefault fov={45} position={[0, 2.5, 7]} /> */}
       {/* <OrbitControls
        target={[0, 25, 0]}
        enablePan={false}
        minDistance={2.5}
        maxDistance={8}
        minPolarAngle={0.3}
        maxPolarAngle={1.35}
        enableDamping
        dampingFactor={0.08}
      /> */}
      <Stage intensity={0.6}>{children}</Stage>
    </>

    </PresentationControls>
  );
};

export default Controls;
