import { Suspense } from "react";
import { useThree } from "@react-three/fiber";
import { CarModel } from "../../CarModel";


// components/Car.jsx
const Car = () => {
  const { viewport } = useThree(); // gives info about canvas size
  const isMobile = viewport.width < 6;
  return (
    // <mesh castShadow position={[0, 0.75, 0]}>
    //   <boxGeometry args={[1, 1, 1]} />
    //   <meshStandardMaterial color="#c00000" />
    // </mesh>

    <Suspense fallback={null}>
        {/* <FreeCarTestModel scale={2.5} /> */}
        <CarModel scale={isMobile ? 0.8 : 4.5} />
    </Suspense>
  );
};

export default Car;
