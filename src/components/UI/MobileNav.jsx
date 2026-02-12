import { CircleX } from "lucide-react";
import Customization from "./CustomizationPanel/Customization";

const MobileNav = ({ openMobileNav, setOpenMobileNav }) => {
  return (
    <section
      className="md:hidden absolute bottom-0 left-0 w-full h-[40vh] z-50 bg-white p-4 shadow-lg rounded-t-4xl transform transition-transform duration-300 ease-in-out"
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
        <Customization />
      </div>
    </section>
  );
};

export default MobileNav;
