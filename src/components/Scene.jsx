// components/Scene.jsx
import { Suspense, useEffect, useState, useRef } from "react";
import Controls from "./Controls";
import Car from "./Car";
import { Html, useProgress } from "@react-three/drei";

// Loader component to show progress
function Loader({ progress = 0 }) {
  return (
    <Html fullscreen>
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-700">
        <div className="flex flex-col items-center gap-4 max-w-md px-4">
          <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin drop-shadow-lg"></div>
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

// Compute ONCE outside component — never causes re-renders
const isAndroid = /Android/i.test(navigator.userAgent);
// const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
const isMobile = isAndroid ;

const Scene = () => {
  const { progress, active } = useProgress();
  const [showLoader, setShowLoader] = useState(true);

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
      {showLoader && <Loader progress={progress} />}

      <Suspense fallback={null}>
        <Controls>
          <Car />

          <ambientLight intensity={isMobile ? 1 : 0.3} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow={!isMobile}
            shadow-mapSize={isMobile ? [512, 512] : [2048, 2048]}
          />
        </Controls>
      </Suspense>
    </>
  );
};

export default Scene; 