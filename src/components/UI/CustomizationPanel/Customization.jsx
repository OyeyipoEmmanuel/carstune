import { useState } from "react";
import useChangeCarColor from "../../../store/useChangeCarColor";
import ColorSection from "./ColorSection";
import StickersSection from "./StickersSection";
import WheelSelection from "./WheelSelection";

const Customization = () => {
 

  return (
    <section className="overflow-y-auto px-2">
      <h1 className="text-2xl font-bold mb-4">Customization Panel</h1>

      {/* Change Color */}
      <div className="py-4 ">
        <ColorSection/>
      </div>

      {/* Change Wheels */}
      <div>
        <WheelSelection/>
      </div>

      {/* Hood Stickers Section */}
      <div>
        <StickersSection/>
      </div>

    </section>
  );
};

export default Customization;
