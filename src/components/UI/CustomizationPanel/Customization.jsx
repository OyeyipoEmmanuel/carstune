import ColorSection from "./ColorSection";
import StickersSection from "./StickersSection";
import WheelSelection from "./WheelSelection";

const Customization = () => {
 

  return (
    <section className="overflow-y-auto px-2">
      <div className="flex items-center gap-1 mb-4 pb-5 md:pb-0">
        <a href="/" aria-label="Carstune home" className="inline-block">
          <img src="/logo.png" alt="Carstune logo" className="w-16 h-10 md:h-16 md:w-16 object-contain" />
        </a>
        <h1 className="text-2xl font-bold m-0">Customization Panel</h1>
      </div>

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
