// components/Controls.jsx
import { PresentationControls, Stage } from "@react-three/drei";

const Controls = ({ children }) => {
  return (
    <PresentationControls
      speed={1.0}
      global
      zoom={1.2}
      polar={[-0.1, Math.PI / 4]}
      rotation={[Math.PI /16, Math.PI / 2, 0]}
    >
      <Stage intensity={0.6}>
        {children}
      </Stage>
    </PresentationControls>
  );
};

export default Controls;
