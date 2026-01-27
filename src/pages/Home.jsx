// pages/Home.jsx
import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";

const Home = () => {
  return (
    <>
      <main className="absolute w-full h-screen top-0 left-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <section className="mx-auto text-center">
          <h1 className="text-2xl font-semibold pt-6 text-white">Welcome to Carstune MVP</h1>
        </section>
      </main>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 3, 8], fov: 45 }}
      >
        <color attach="background" args={["#213547"]} />
        <Scene />
      </Canvas>
    </>
  );
};

export default Home;
