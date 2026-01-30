// components/Controls.jsx
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { useEffect, useState } from "react";

const Controls = ({ children }) => {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    setIsAndroid(/Android/i.test(navigator.userAgent));
  }, []);
  return (
    <>
      <OrbitControls
        target={[0, 0.3, 0]}
        enablePan={true}
        minDistance={3}
        maxDistance={10}
        minPolarAngle={0.3}
        maxPolarAngle={1.35}
        enableDamping
        dampingFactor={0.08}
      />

      {isAndroid ? (
        // Android: no Stage, just children
        children
      ) : (
        // Desktop/iOS: Stage + local Environment
        <>
          <Environment
            files="/hdr/kiara_1_dawn_1k.hdr" // Your local HDR file
            background={false}
            // intensity={0.3} // ← Add this to control HDR brightness
          />
          <Stage
            intensity={0.3}
            environment={null} // Disable Stage's environment since we're using separate Environment component
            shadows="contact"
            adjustCamera={false}
          >
            {children}
          </Stage>
        </>
      )}
    </>
  );
};

export default Controls;
