// components/Scene.jsx
import { Suspense, useEffect, useState } from "react";
// import { Environment } from "@react-three/drei";
import Controls from "./Controls";
import Car from "./Car";
// import Ground from "./Ground";

import { Html, useProgress } from "@react-three/drei";
import Ground from "./Ground";

// Loading component (presentational)
function Loader({ progress = 0 }) {
  return (
    <Html fullscreen>
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-700">
        <div className="flex flex-col items-center gap-4 max-w-md px-4">
          <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin drop-shadow-lg"></div>

          {/* Progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-white h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-white font-semibold text-xl">
            {progress < 100 ? `${Math.round(progress)}%` : "Preparing scene..."}
          </p>
        </div>
      </div>
    </Html>
  );
}

const Scene = () => {
  const [isAndroid, setIsAndroid] = useState(false);
  const { progress, active } = useProgress();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setIsAndroid(/Android/i.test(navigator.userAgent));
  }, []);

  // Keep loader visible for 2s after load completes
  useEffect(() => {
    if (active) {
      setShowLoader(true);
      return;
    }

    if (!active && progress === 100) {
      const timer = setTimeout(() => setShowLoader(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [active, progress]);

  return (
    <>
      {/* Show the loader overlay independent of Suspense so it can persist after load */}
      {showLoader && <Loader progress={progress} />}

      {/* <fog attach="fog" args={["#213547", 10, 20]} /> */}

      <Suspense fallback={null}>
        <Controls>
          {/* <Environment preset="city" background={false} /> */}
          <Car />
          {/* <Ground/> */}
          {/* Add lights for Android since it doesn't have Stage */}

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
