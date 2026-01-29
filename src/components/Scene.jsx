// components/Scene.jsx
import { Suspense } from "react";
// import { Environment } from "@react-three/drei";
import Controls from "./Controls";
import Car from "./Car";
// import Ground from "./Ground";

import { Html } from "@react-three/drei";

function Loader() {
  return (
    <Html center>
      <div style={{ color: "white" }}>Loading car...</div>
    </Html>
  );
}
const Scene = () => {
  return (
    <>
      {/* <fog attach="fog" args={["#213547", 10, 20]} /> */}

      <Suspense fallback={<Loader />}>
        <Controls>
          {/* <Environment background={true} files={["/hdr/studio_small_08_2k.hdr"]} /> */}
          {/* <Environment
            background={true}
            preset="park"
            ground={{ height: 5, radius: 150, scale: 10 }}
          /> */}
          <Car />
          {/* <Ground /> */}
          <ambientLight intensity={0.5} />
          <spotLight intensity={80} color={0xffffff} position={[2, 5, 1]}/>
        </Controls>
      </Suspense>
    </>
  );
};

export default Scene;
