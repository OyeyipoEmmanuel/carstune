import { Suspense } from "react";
import { FreeCarTestModel } from "../../Free_merc_hovercar";
import { BmwTestCar } from "../../Bmw";

// components/Car.jsx
const Car = () => {
  return (
    // <mesh castShadow position={[0, 0.75, 0]}>
    //   <boxGeometry args={[1, 1, 1]} />
    //   <meshStandardMaterial color="#c00000" />
    // </mesh>

    <Suspense fallback={null}>
        {/* <FreeCarTestModel scale={2.5} /> */}
        <BmwTestCar scale={2}/>
    </Suspense>
  );
};

export default Car;
