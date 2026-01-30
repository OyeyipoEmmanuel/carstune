// components/Loader.jsx
const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#F8F9FA] z-30">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        <p className="text-black font-semibold text-lg">Loading your car...</p>
      </div>
    </div>
  );
};

export default Loader;