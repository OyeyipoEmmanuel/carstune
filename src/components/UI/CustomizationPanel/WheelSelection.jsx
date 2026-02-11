import { Ban, RotateCcw } from "lucide-react";
import useChangeWheels from "../../../store/useChangeWheels";

const wheelOptions = [
  {url: "fancy_tyre_preview.webp", name: "fancy"},
  {url: "offroad_tyre_preview.webp", name: "offroad"},
  {url: "sport_tyre_preview.webp", name: "sport"},
  {url: "", name: "default"},
];

const WheelSelection = () => {
  const handleWheelChange = useChangeWheels((state) => state.setWheel);
  const currentWheel = useChangeWheels((state) => state.selectedWheel);
  return (
    <main className="py-2">
      <h1 className="text-lg text-slate-900 font-semibold pb-4">
        Select Wheel
      </h1>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {wheelOptions.map((wheel, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center gap-2 `}
            onClick={() => handleWheelChange(wheel.name)}
          >
            <span
              className={`bg-slate-100 rounded-lg p-2 cursor-pointer ${
                currentWheel === wheel.name
                  ? "ring-2 ring-offset-2 ring-blue-500"
                  : ""
              }`}
            >
              {wheel != null && wheel.url ? (
                <img
                  src={`/tyre_preview/${wheel.url}`}
                  alt="Wheel options"
                  className="w-18 h-18 scale-125 object-contain hover:scale-105 transition-all duration-300"
                />
              ) : (
                <RotateCcw color="#64748b" width={48} height={72} />
              )}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
};

export default WheelSelection;
