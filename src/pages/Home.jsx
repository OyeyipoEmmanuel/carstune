// pages/Home.jsx
import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";
import SideNav from "../components/UI/SideNav";
import { useEffect, useState } from "react";
import ActionButton from "../components/UI/ActionButton";
import MobileNav from "../components/UI/MobileNav";

const Home = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  // Detect if the user is on an Android device
  useEffect(() => {
    setIsAndroid(/Android/i.test(navigator.userAgent));
  }, []);

  return (
    <main className="w-full h-screen flex shrink-0 relative overflow-hidden bg-[#F8F9FA]">
      {/* LEFT: 3D VIEWER (70%) */}
      <section className="flex-7 shrink-0 h-[calc(100vh-9rem)] md:h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-700 relative rounded-b-4xl md:rounded-none overflow-hidden">
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
            dpr={isAndroid ? [1, 1] : [1, 2]}
            camera={{ position: isAndroid ? [0, 1.5, 6.5] : [0, 1.5, 5], fov: 25 }}
            gl={{
              antialias: !isAndroid, // Disable only on Android
              powerPreference: "high-performance",
            }}
            performance={{ min: 0.5 }}
          >
            <Scene />
          </Canvas>
        </div>
      </section>

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
      <MobileNav openMobileNav={openMobileNav} setOpenMobileNav={setOpenMobileNav} />

      {/* RIGHT: SIDENAV (30%) Desktop Nav */}
      <section className="hidden md:flex flex-3 h-full z-20">
        <SideNav />
      </section>
    </main>
  );
};

export default Home;
