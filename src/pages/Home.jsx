// pages/Home.jsx
import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";
import SideNav from "../components/UI/SideNav";
import { useState } from "react";
import { CircleX } from "lucide-react";
import ActionButton from "../components/UI/ActionButton";

const Home = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  return (
    <main className="w-full h-screen flex shrink-0 relative overflow-hidden bg-[#F8F9FA]">
      {/* Show loader while loading */}
      {/* {isLoading && <Loader />} */}
      {/* LEFT: 3D VIEWER (70%) */}
      <section className="flex-7 shrink-0 h-[calc(100vh-15rem)] md:h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-700 relative rounded-b-4xl md:rounded-none overflow-hidden">
        {/* Title overlay */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-center">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-[linear-gradient(125deg,#ffffff,#9ca3af)] drop-shadow-md">
            Carstune
          </h1>
          <p className="text-sm md:text-lg text-gray-300 mt-2">
            Customize your dream car
          </p>
        </div>

        {/* Canvas */}
        <div className="w-full h-full absolute top-0 pt-12 md:top-12 left-0 ">
          <Canvas
            dpr={[1, 2]}
            camera={{ position: [0, 1.5, 5], fov: 25 }}
            // onCreated={() => setIsLoading(false)}
          >
            {/* <color attach="background" args={["#F8F9FA"]} /> */}
            <Scene />
          </Canvas>
        </div>
      </section>

      {/* MOBILE ACTIONS */}
      {/* MOBILE ACTIONS */}
      <section className="md:hidden fixed bottom-0 left-0 w-full p-4 text-white z-20 flex items-center gap-x-4 bg-gradient-to-t from-black/10 to-transparent pb-6">
        <ActionButton onClick={() => setOpenMobileNav(true)}>
          <p className="relative group-hover:text-white text-lg z-10 text-center w-full">
            Customize
          </p>
        </ActionButton>

        <ActionButton>
          <p className="relative group-hover:text-white text-lg z-10 text-center w-full">
            AR Mode
          </p>
        </ActionButton>
      </section>

      {/* Mobile Nav */}
      <section
        className="md:hidden absolute bottom-0 left-0 w-full h-[30vh] z-20 bg-white p-4 shadow-lg rounded-t-4xl transform transition-transform duration-300 ease-in-out"
        style={{
          transform: openMobileNav ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <div className="absolute right-4 font-semibold text-3xl top-4 text-red-500">
          <CircleX
            size={30}
            strokeWidth={1}
            absoluteStrokeWidth
            className="cursor-pointer"
            onClick={() => setOpenMobileNav(false)}
          />
        </div>
        <div className="flex flex-col h-full">
          <h1 className="text-xl font-semibold mb-4">Edit car model</h1>

          <span className="py-4">Select Color</span>

          <span>Select Wheels</span>
        </div>
      </section>

      {/* RIGHT: SIDENAV (30%) */}
      <section className="hidden md:flex flex-3 h-full z-20">
        <SideNav />
      </section>
    </main>
  );
};

export default Home;
