// components/Controls.jsx
import { Environment, OrbitControls, Stage, useEnvironment } from "@react-three/drei";
import { useEffect, useState } from "react";

const Controls = ({ children }) => {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    setIsAndroid(/Android/i.test(navigator.userAgent));

    // Preload HDR immediately
    useEnvironment.preload({ files: "/hdr/kiara_1_dawn_1k.hdr" });
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
        <>
          <Environment
            files="/hdr/kiara_1_dawn_1k.hdr"
            background={false}
            intensity={0.3}
          />
          <Stage
            intensity={0.3}
            environment={null}
            shadows={false}
            adjustCamera={false}
          >
            {children}
          </Stage>
        </>
      ) : (
        // Desktop/iOS: Stage + local Environment
        <>
          <Environment
            files="/hdr/kiara_1_dawn_1k.hdr" 
            background={false}
            intensity={0.3}
          />
          <Stage
            intensity={0.3}
            environment={null}
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
