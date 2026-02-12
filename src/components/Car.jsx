import { Suspense, useMemo, lazy } from "react";
import { useThree } from "@react-three/fiber";
import Wheels from "./Wheels";

// Lazy load the models
const CarWithStickerModel = lazy(() =>
  import("./CarWithStickerModel").then((module) => ({
    default: module.CarWithStickerModel,
  }))
);
const CarWithStickerModelOptimized = lazy(() =>
  import("./CarWithStickerModelOpt").then((module) => ({
    default: module.CarWithStickerModelOptimized,
  }))
);

const Car = () => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 6;

  const shouldUseLowQuality = useMemo(() => {

    const isAndroid = /Android/i.test(navigator.userAgent);
    // const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isMobileDevice = isAndroid;

    const isLowRAM = navigator.deviceMemory && navigator.deviceMemory < 4;
    const conn =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    const isSlowConnection =
      conn && (conn.effectiveType === "2g" || conn.effectiveType === "slow-2g");

    console.log("Device Detection:", {
      isMobileDevice,
      deviceMemory: navigator.deviceMemory,
      isLowRAM,
      effectiveType: conn?.effectiveType,
      isSlowConnection,
      shouldUseLowQuality: isMobileDevice || isLowRAM || isSlowConnection,
    });

    return isMobileDevice || isLowRAM || isSlowConnection;
  }, []);

  const CarComponent = shouldUseLowQuality
    ? CarWithStickerModelOptimized
    : CarWithStickerModel;

  console.log("Loading model:", shouldUseLowQuality ? "Optimized" : "Normal");

  return (
    <Suspense fallback={null}>
      <CarComponent scale={isMobile ? 0.4 : 2.5} />
      <Wheels />
    </Suspense>
  );
};

export default Car;
