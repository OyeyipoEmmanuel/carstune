import { useMemo, useEffect } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import useChangeHoodSticker from "../store/useChangeHoodSticker";
import useChangeCarColor from "../store/useChangeCarColor";
import useChangeWheels from "../store/useChangeWheels";

useTexture.preload("/stickers/transparent-null.png");

export function CarWithStickerModelOptimized(props) {
  const { nodes, materials } = useGLTF("/model/carWithStickerModelOpt.glb");
  const carColor = useChangeCarColor((state) => state.color);
  const hoodSticker = useChangeHoodSticker((state) => state.hoodSticker);

  const selectedWheel = useChangeWheels((state) => state.selectedWheel);
  console.log("Selected wheel in CarModel:", selectedWheel);

  // Hide default wheels when sport or offroad is selected
  const showDefaultWheels = selectedWheel === "default";

  // Preload dynamic sticker BEFORE it's needed so useTexture never
  // triggers a fresh load (and thus no DefaultLoadingManager setState) during render
  useEffect(() => {
    if (hoodSticker !== null) {
      useTexture.preload(`/stickers/${hoodSticker}`);
    }
  }, [hoodSticker]);

  const stickerPath =
    hoodSticker !== null
      ? `/stickers/${hoodSticker}`
      : "/stickers/transparent-null.png";

  const stickerTexture = useTexture(stickerPath);

  // Texture mutations in useEffect — never in render body
  useEffect(() => {
    stickerTexture.colorSpace = THREE.SRGBColorSpace;
    stickerTexture.flipY = false;
    stickerTexture.needsUpdate = true;
  }, [stickerTexture]);

  // Strip envMap from all materials to break WebGL feedback loop
  // Use useMemo to ensure this happens synchronously before render
  const cleanMaterials = useMemo(() => {
    const cleaned = {};
    Object.entries(materials).forEach(([key, mat]) => {
      const cloned = mat.clone();
      cloned.envMap = null;
      cloned.toneMapped = false;
      cloned.needsUpdate = true;
      cleaned[key] = cloned;
    });
    return cleaned;
  }, [materials]);

  // Dispose cleaned materials on unmount
  useEffect(() => {
    return () => {
      Object.values(cleanMaterials).forEach((mat) => mat.dispose());
    };
  }, [cleanMaterials]);

  const carBodyMaterial = useMemo(() => {
    const mat = cleanMaterials.PaletteMaterial006.clone();
    mat.color = new THREE.Color(carColor);
    mat.needsUpdate = true;
    return mat;
  }, [carColor, cleanMaterials]);

  const carpaintMaterial = useMemo(() => {
    const base =
      cleanMaterials["carpaint black"] ?? cleanMaterials.PaletteMaterial006;
    const mat = base.clone();
    mat.color = new THREE.Color(carColor);
    mat.needsUpdate = true;
    return mat;
  }, [carColor, cleanMaterials]);

  // Dispose cloned materials on unmount
  useEffect(() => {
    return () => {
      carBodyMaterial.dispose();
      carpaintMaterial.dispose();
    };
  }, [carBodyMaterial, carpaintMaterial]);

  console.log(nodes);

  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.954, 0.585, 0.938]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      >
        <mesh
          geometry={nodes.Plane024.geometry}
          material={cleanMaterials.stitches_white}
        />
        <mesh
          geometry={nodes.Plane024_1.geometry}
          material={cleanMaterials.leather_red}
        />
        <mesh
          geometry={nodes.Plane024_2.geometry}
          material={carpaintMaterial}
        />
        <mesh
          geometry={nodes.Plane024_3.geometry}
          material={cleanMaterials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.Plane024_4.geometry}
          material={cleanMaterials.leather_black}
        />
        <mesh
          geometry={nodes.Plane024_5.geometry}
          material={cleanMaterials.PaletteMaterial002}
        />
        <mesh
          geometry={nodes.Plane024_6.geometry}
          material={cleanMaterials.PaletteMaterial003}
        />
        <mesh
          geometry={nodes.Plane024_7.geometry}
          material={cleanMaterials.PaletteMaterial004}
        />
        <mesh
          geometry={nodes.Plane024_8.geometry}
          material={cleanMaterials.stitches_blue}
        />
      </group>
      <mesh
        geometry={nodes.rear_trunk.geometry}
        material={cleanMaterials.PaletteMaterial005}
        position={[0, 0.62, 0]}
      />
      <mesh
        geometry={nodes.Car_body.geometry}
        material={carBodyMaterial}
        position={[0, 0.62, 0]}
      />

      
      {/* Default wheels - hide when another wheel is selected */}
      {selectedWheel === "default" ? (
        <group position={[0.728, 0.26, 1.685]}>
          <mesh
            geometry={nodes.Plane121.geometry}
            material={cleanMaterials.tire}
          />
          <mesh
            geometry={nodes.Plane121_1.geometry}
            material={cleanMaterials.PaletteMaterial002}
          />
          <mesh
            geometry={nodes.Plane121_2.geometry}
            material={cleanMaterials.PaletteMaterial005}
          />
          <mesh
            geometry={nodes.Plane121_3.geometry}
            material={cleanMaterials.PaletteMaterial007}
          />
          <mesh
            geometry={nodes.Plane121_4.geometry}
            material={cleanMaterials.disc}
          />
        </group>
      ) : (
        <group visible={showDefaultWheels}>
          <group position={[0.728, 0.26, 1.685]}>
            <mesh
              geometry={nodes.Plane121.geometry}
              material={cleanMaterials.tire}
            />
            <mesh
              geometry={nodes.Plane121_1.geometry}
              material={cleanMaterials["rim_metal chrome"]}
            />
            <mesh
              geometry={nodes.Plane121_2.geometry}
              material={cleanMaterials.wheel_rim}
            />
            <mesh
              geometry={nodes.Plane121_3.geometry}
              material={cleanMaterials.red_metallic}
            />
            <mesh
              geometry={nodes.Plane121_4.geometry}
              material={cleanMaterials.metal_gray_mid}
            />
          </group>
          <group position={[0.728, 0.26, -1.563]}>
            <mesh
              geometry={nodes.Plane121.geometry}
              material={cleanMaterials.tire}
            />
            <mesh
              geometry={nodes.Plane121_1.geometry}
              material={cleanMaterials["rim_metal chrome"]}
            />
            <mesh
              geometry={nodes.Plane121_2.geometry}
              material={cleanMaterials.wheel_rim}
            />
            <mesh
              geometry={nodes.Plane121_3.geometry}
              material={cleanMaterials.red_metallic}
            />
            <mesh
              geometry={nodes.Plane121_4.geometry}
              material={cleanMaterials.metal_gray_mid}
            />
          </group>
          <group
            position={[-0.725, 0.26, 1.685]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              geometry={nodes.Plane121.geometry}
              material={cleanMaterials.tire}
            />
            <mesh
              geometry={nodes.Plane121_1.geometry}
              material={cleanMaterials["rim_metal chrome"]}
            />
            <mesh
              geometry={nodes.Plane121_2.geometry}
              material={cleanMaterials.wheel_rim}
            />
            <mesh
              geometry={nodes.Plane121_3.geometry}
              material={cleanMaterials.red_metallic}
            />
            <mesh
              geometry={nodes.Plane121_4.geometry}
              material={cleanMaterials.metal_gray_mid}
            />
          </group>
          <group
            position={[-0.725, 0.26, -1.563]}
            rotation={[Math.PI, 0, Math.PI]}
          >
            <mesh
              geometry={nodes.Plane121.geometry}
              material={cleanMaterials.tire}
            />
            <mesh
              geometry={nodes.Plane121_1.geometry}
              material={cleanMaterials["rim_metal chrome"]}
            />
            <mesh
              geometry={nodes.Plane121_2.geometry}
              material={cleanMaterials.wheel_rim}
            />
            <mesh
              geometry={nodes.Plane121_3.geometry}
              material={cleanMaterials.red_metallic}
            />
            <mesh
              geometry={nodes.Plane121_4.geometry}
              material={cleanMaterials.metal_gray_mid}
            />
          </group>
        </group>
      )}

      <mesh
        geometry={nodes.seatFR.geometry}
        material={cleanMaterials.leather_gray}
        position={[-0.399, 1.087, -0.315]}
        rotation={[2.902, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.inner_shell.geometry}
        material={cleanMaterials.PaletteMaterial008}
      />
      <group position={[0.01, 0.453, -1.143]}>
        <mesh
          geometry={nodes.Plane069.geometry}
          material={cleanMaterials.PaletteMaterial006}
        />
        <mesh
          geometry={nodes.Plane069_1.geometry}
          material={cleanMaterials.screen2}
        />
        <mesh
          geometry={nodes.Plane069_2.geometry}
          material={cleanMaterials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.Plane069_3.geometry}
          material={cleanMaterials.leather_red}
        />
        <mesh
          geometry={nodes.Plane069_4.geometry}
          material={cleanMaterials.screen}
        />
        <mesh
          geometry={nodes.Plane069_5.geometry}
          material={cleanMaterials.leather_black}
        />
        <mesh
          geometry={nodes.Plane069_6.geometry}
          material={cleanMaterials.stitches_white}
        />
        <mesh
          geometry={nodes.Plane069_7.geometry}
          material={cleanMaterials.stitches_blue}
        />
        <mesh
          geometry={nodes.Plane069_8.geometry}
          material={cleanMaterials.PaletteMaterial009}
        />
        <mesh
          geometry={nodes.Plane069_9.geometry}
          material={cleanMaterials.PaletteMaterial004}
        />
        <mesh
          geometry={nodes.Plane069_10.geometry}
          material={cleanMaterials["leather_gray.light"]}
        />
        <mesh
          geometry={nodes.Plane069_11.geometry}
          material={cleanMaterials.PaletteMaterial010}
        />
      </group>
      <mesh
        geometry={nodes.rocker_L.geometry}
        material={cleanMaterials.rocker1}
        position={[1.013, 0.262, 0.064]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.185, 1, 0.238]}
      />
      <mesh
        geometry={nodes.hoodSticker.geometry}
        position={[0, 0, 0.01]}
        renderOrder={100}
      >
        <meshStandardMaterial
          map={stickerTexture}
          transparent={true}
          alphaTest={0.05}
          side={THREE.DoubleSide}
          depthWrite={false}
          polygonOffset={true}
          polygonOffsetFactor={-4}
          polygonOffsetUnits={-4}
          toneMapped={false}
          envMap={null}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/model/carWithStickerModelOpt.glb");
