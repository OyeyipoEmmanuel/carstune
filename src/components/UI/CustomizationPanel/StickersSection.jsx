import { Ban } from "lucide-react";
import useChangeHoodSticker from "../../../store/useChangeHoodSticker";

const stickerOptions = [
  "eagleSticker.png",
  "flowerSticker.png",
  "spiderManSticker.png",
  null,
];



const StickersSection = () => {
    const handleHoodStickerChange = useChangeHoodSticker((state) => state.setNewHoodSticker);
    const currentHoodSticker = useChangeHoodSticker((state) => state.hoodSticker);
  return (
    <main className="py-2">
      <h1 className="text-lg text-slate-900 font-semibold pb-4">
        Select Hood Sticker
      </h1>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stickerOptions.map((sticker, idx) => (
          <div key={idx} className={`flex flex-col items-center gap-2 `} onClick={() => handleHoodStickerChange(sticker)}>
            
              <span className={`bg-slate-100 rounded-lg p-2 cursor-pointer ${currentHoodSticker === sticker ? "ring-2 ring-offset-2 ring-blue-500" : ""}`}>
                {sticker != null ? (
                <img src={`/stickers/${sticker}`} alt="Hood sticker" className="w-18 h-18 scale-125 object-contain hover:scale-105 transition-all duration-300"/>) : (
                    <Ban color="#e26f6f" width={48} height={48}/>
                )}
              </span>
          </div>
        ))}
      </section>
    </main>
  );
};

export default StickersSection;
