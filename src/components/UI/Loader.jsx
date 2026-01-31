// function Loader() {
//   const { progress, active } = useProgress();
//   const [isHiding, setIsHiding] = useState(false);
//   const [loadTime, setLoadTime] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setLoadTime(prev => prev + 1);
//     }, 1000);
    
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (!active && progress === 100) {
//       const timer = setTimeout(() => {
//         setIsHiding(true);
//       }, 1500);
      
//       return () => clearTimeout(timer);
//     }
//   }, [active, progress]);

//   if (isHiding) {
//     return (
//       <Html fullscreen>
//         <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-700 transition-opacity duration-700 opacity-0" />
//       </Html>
//     );
//   }

//   return (
//     <Html fullscreen>
//       <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-700">
//         <div className="flex flex-col items-center gap-4 max-w-md px-4">
//           <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin drop-shadow-lg"></div>
          
//           {/* Progress bar */}
//           <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
//             <div 
//               className="bg-white h-full transition-all duration-300"
//               style={{ width: `${progress}%` }}
//             />
//           </div>
          
//           <p className="text-white font-semibold text-xl">
//             {progress < 100 ? `${Math.round(progress)}%` : "Almost ready..."}
//           </p>
          
//           {loadTime > 5 && progress < 100 && (
//             <p className="text-gray-400 text-sm text-center">
//               Slow connection detected. Loading may take a moment...
//             </p>
//           )}
//         </div>
//       </div>
//     </Html>
//   );
// }

// export default Loader;