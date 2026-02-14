import useChangeCarColor from "../../../store/useChangeCarColor";

const ColorSection = () => {
  const carColors = [
    // "#0F0F0F", // Deep Black (was #000000)
    // "#554FA8", // Dark Slate Purple2
    "#178F86", // Muted Teal
    "#C9A227", // Dark Warm Gold3
    "#D45A96", // Muted Rose Pink
    "#6F3A17", // Deep Saddle Brown
    // "#246B47", // Dark Sea Green
    "#9E9E9E", // Dark Silver Metallic1
    // "#355E86", // Dark Steel Blue
    // "#B05A22", // Dark Copper2
    // "#7B5DB8", // Dark Medium Purple
    "#C9BE6A", // Muted Pastel Yellow
  ];

  // const [hexText, setHexText] = useState("");

  const handleColorChange = useChangeCarColor((state) => state.setNewColor);
  const currentColor = useChangeCarColor((state) => state.color);

  
  return (
    <div>
      <h1 className="text-lg text-slate-900 font-semibold pb-4">
        Change Color
      </h1>
      <div className="grid grid-cols-6 md:grid-cols-6 gap-4">
        {carColors.map((color, idx) => (
          <span
            className={`w-6 h-6 md:w-10 md:h-10 rounded-full cursor-pointer inline-block ${
              currentColor === color ? "ring-4 ring-offset-2 ring-blue-500" : ""
            }`}
            key={idx}
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          ></span>
        ))}
      </div>

      {/* <div className="pt-4 text-center flex items-center justify-center gap-2">
            <span className="w-full h-0.5 bg-gray-400"></span>
            <p className="font-semibold text-xl text-gray-700">OR</p>
            <span className="w-full h-0.5 bg-gray-400"></span>
        </div> */}

      {/* Hex form input */}
      {/* <div className="pt-4">
          <label className="block text-sm font-medium text-gray-700 pb-1">
            Enter Hex Color Code:
          </label>
          <input
            type="text"
            value={hexText}
            onChange={(e)=>setHexText(e.target.value.toUpperCase())}
            onKeyDown={(e)=>{
                if(e.key == "Enter"){
                    setHexText(e.target.value.toUpperCase());
                    handleColorChange(e.target.value.includes("#") ? e.target.value : `#${e.target.value}`);
                    setHexText("");
                }
            }}
            placeholder="#000000"
            className="w-full p-2 border border-gray-300 rounded-md outline-none"
          />
          <p className="text-sm text-gray-500 mt-1">Press Enter to apply color</p>
        </div> */}
    </div>
  );
};

export default ColorSection;
