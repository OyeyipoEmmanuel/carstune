// components/Scene.jsx
import { Suspense, useState } from "react";
// import { Environment } from "@react-three/drei";
import Controls from "./Controls";
import Car from "./Car";
// import Ground from "./Ground";

import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress, active } = useProgress();
  const [opacity, setOpacity] = useState(1);

  // Start fading when loading completes
  if (!active && opacity > 0) {
    setTimeout(() => setOpacity(0), 100);
  }

  if (opacity === 0) return null;

  return (
    <Html fullscreen>
      <div
        className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-700 transition-opacity duration-500"
        style={{ opacity }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin drop-shadow-lg"></div>
          <p className="text-white font-semibold text-xl">
            {progress < 100 ? `${Math.round(progress)}%` : "Almost ready..."}
          </p>
          <p className="text-gray-300">Loading car model...</p>
        </div>
      </div>
    </Html>
  );
}
const Scene = () => {
  return (
    <>
      {/* <fog attach="fog" args={["#213547", 10, 20]} /> */}

      <Suspense fallback={<Loader />}>
        <Controls>
          <Car />
          <ambientLight intensity={0.5} />
        </Controls>
      </Suspense>
    </>
  );
};

export default Scene;
