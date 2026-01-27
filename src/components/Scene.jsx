// components/Scene.jsx
import { Suspense } from "react";
// import { Environment } from "@react-three/drei";
import Controls from "./Controls";
import Car from "./Car";
// import Ground from "./Ground";

const Scene = () => {
  return (
    <>
      {/* <fog attach="fog" args={["#213547", 10, 20]} /> */}

      <Suspense fallback={null}>
        <Controls>
          {/* <Environment background={true} files={["/hdr/studio_small_08_2k.hdr"]} /> */}
          {/* <Environment
            background={true}
            preset="park"
            ground={{ height: 5, radius: 150, scale: 10 }}
          /> */}
          <Car />
          {/* <Ground /> */}
          <ambientLight intensity={.5} />
        </Controls>
      </Suspense>
    </>
  );
};

export default Scene;
