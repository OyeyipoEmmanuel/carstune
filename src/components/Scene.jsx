// components/Scene.jsx
import { Suspense, useEffect, useState } from "react";
// import { Environment } from "@react-three/drei";
import Controls from "./Controls";
import Car from "./Car";
// import Ground from "./Ground";

import { Html, useProgress } from "@react-three/drei";

//Loading component
function Loader() {
  const { progress, active } = useProgress();
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // When loading finishes, wait 1 second before starting fade
    if (!active && progress === 100) {
      const timer = setTimeout(() => {
        setIsHiding(true);
      }, 1500); // Wait 1 second after loading completes

      return () => clearTimeout(timer);
    }
  }, [active, progress]);

  // Don't render at all after fade completes
  if (isHiding) {
    return (
      <Html fullscreen>
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-700 transition-opacity duration-700 opacity-0" />
      </Html>
    );
  }

  return (
    <Html fullscreen>
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-700">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin drop-shadow-lg"></div>
          <p className="text-white font-semibold text-xl">
            {progress < 100 ? `${Math.round(progress)}%` : "Preparing scene..."}
          </p>
          <p className="text-gray-300">Loading car model...</p>
        </div>
      </div>
    </Html>
  );
}

const Scene = () => {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    setIsAndroid(/Android/i.test(navigator.userAgent));
  }, []);

  return (
    <>
      {/* <fog attach="fog" args={["#213547", 10, 20]} /> */}

      <Suspense fallback={<Loader />}>
        <Controls>
          {/* <Environment preset="city" background={false} /> */}
          <Car />
           <ambientLight intensity={isAndroid ? 1 : 0.3} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow={!isAndroid} // Disable shadows on Android
            shadow-mapSize={isAndroid ? [512, 512] : [2048, 2048]}
          />
        </Controls>
      </Suspense>
    </>
  );
};

export default Scene;
