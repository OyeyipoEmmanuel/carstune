import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import useChangeCarColor from "../store/useChangeCarColor";
import useChangeHoodSticker from "../store/useChangeHoodSticker";
import useChangeWheels from "../store/useChangeWheels";

export function CarWithStickerModel(props) {

  const { nodes, materials } = useGLTF("/model/carWithStickerModel.glb");

  const selectedWheel = useChangeWheels((state) => state.selectedWheel);
  
  // Hide default wheels when sport or offroad is selected
  const showDefaultWheels = selectedWheel === "default";

  // Fix Mirror material - it may be sampling from a render target
  useEffect(() => {
    if (materials.Mirror) {
      materials.Mirror.envMapIntensity = 1;
      // If Mirror uses a render target texture, break the loop:
      materials.Mirror.needsUpdate = true;
    }
  }, [materials]);

  //Adding custom color
  const carColor = useChangeCarColor((state) => state.color);


  const hoodSticker = useChangeHoodSticker((state) => state.hoodSticker);

  // Load texture with useMemo to refresh when hoodSticker changes
  const stickerPath = useMemo(() => {
    return hoodSticker !== null
      ? `/stickers/${hoodSticker}`
      : "/stickers/transparent-null.png";
  }, [hoodSticker]);

  const stickerTexture = useTexture(stickerPath);

  stickerTexture.colorSpace = THREE.SRGBColorSpace;
  stickerTexture.flipY = false;

  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.954, 0.585, 0.938]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      >
        <mesh
          geometry={nodes.Plane024.geometry}
          material={materials.stitches_white}
        />
        <mesh
          geometry={nodes.Plane024_1.geometry}
          material={materials.leather_red}
        />
        <mesh
          geometry={nodes.Plane024_2.geometry}
          material={materials["carpaint black"]}
          material-color={carColor}
        />
        <mesh
          geometry={nodes.Plane024_3.geometry}
          material={materials.plastic_black_glossy}
        />
        <mesh
          geometry={nodes.Plane024_4.geometry}
          material={materials.leather_black}
        />
        <mesh
          geometry={nodes.Plane024_5.geometry}
          material={materials.Plastic_black_shiny}
        />
        <mesh
          geometry={nodes.Plane024_6.geometry}
          material={materials.Mirror}
        />
        <mesh
          geometry={nodes.Plane024_7.geometry}
          material={materials["glass tint black"]}
        />
        <mesh
          geometry={nodes.Plane024_8.geometry}
          material={materials.self_illuminated_red}
        />
        <mesh
          geometry={nodes.Plane024_9.geometry}
          material={materials.stitches_blue}
        />
      </group>
      <group position={[0.954, 0.585, 0.938]}>
        <mesh
          geometry={nodes.Plane024.geometry}
          material={materials.stitches_white}
        />
        <mesh
          geometry={nodes.Plane024_1.geometry}
          material={materials.leather_red}
        />
        <mesh
          geometry={nodes.Plane024_2.geometry}
          material={materials["carpaint black"]}
        />
        <mesh
          geometry={nodes.Plane024_3.geometry}
          material={materials.plastic_black_glossy}
        />
        <mesh
          geometry={nodes.Plane024_4.geometry}
          material={materials.leather_black}
        />
        <mesh
          geometry={nodes.Plane024_5.geometry}
          material={materials.Plastic_black_shiny}
        />
        <mesh
          geometry={nodes.Plane024_6.geometry}
          material={materials.Mirror}
        />
        <mesh
          geometry={nodes.Plane024_7.geometry}
          material={materials["glass tint black"]}
        />
        <mesh
          geometry={nodes.Plane024_8.geometry}
          material={materials.self_illuminated_red}
        />
        <mesh
          geometry={nodes.Plane024_9.geometry}
          material={materials.stitches_blue}
        />
      </group>
      <group position={[0, 0.62, 0]}>
        <mesh
          geometry={nodes.Plane021.geometry}
          material={materials.Plastic_black_shiny}
        />
        <mesh
          geometry={nodes.Plane021_1.geometry}
          material={materials["glass tint black"]}
        />
        <mesh
          geometry={nodes.Plane021_2.geometry}
          material={materials["carpaint black"]}
        />
        <mesh
          geometry={nodes.Plane021_3.geometry}
          material={materials.glass_red}
        />
        <mesh
          geometry={nodes.Plane021_4.geometry}
          material={materials.self_illuminated_red}
        />
        <mesh
          geometry={nodes.Plane021_5.geometry}
          material={materials.glass_rear_lights}
        />
        <mesh
          geometry={nodes.Plane021_6.geometry}
          material={materials.plastic_gray_dark_shiny}
        />
      </group>
      <group position={[0, 0.62, 0]}>
        <mesh
          geometry={nodes.Plane007.geometry}
          material={materials["plastic black_glossy"]}
        />
        <mesh
          geometry={nodes.Plane007_1.geometry}
          material={materials["glass tint black"]}
        />
        <mesh
          geometry={nodes.Plane007_2.geometry}
          material={materials["carpaint black"]}
        />
        <mesh
          geometry={nodes.Plane007_3.geometry}
          material={materials.Plastic_black_shiny}
        />
        <mesh
          geometry={nodes.Plane007_4.geometry}
          material={materials.Plastic_gray_shiny}
        />
        <mesh
          geometry={nodes.Plane007_5.geometry}
          material={materials.carbon_fiber}
        />
        <mesh
          geometry={nodes.Plane007_6.geometry}
          material={materials["metal chrome"]}
        />
        <mesh
          geometry={nodes.Plane007_7.geometry}
          material={materials["glass.headlight"]}
        />
        <mesh
          geometry={nodes.Plane007_8.geometry}
          material={materials.self_illum}
        />
        <mesh
          geometry={nodes.Plane007_9.geometry}
          material={materials.metal_gray_light}
        />
        <mesh
          geometry={nodes.Plane007_10.geometry}
          material={materials.self_illuminated_red}
        />
        <mesh
          geometry={nodes.Plane007_11.geometry}
          material={materials.Head_lights_illum}
        />
        <mesh
          geometry={nodes.Plane007_12.geometry}
          material={materials.glass_rear_lights}
        />
        <mesh
          geometry={nodes.Plane007_13.geometry}
          material={materials.glass_red}
        />
        <mesh
          geometry={nodes.Plane007_14.geometry}
          material={materials.plastic_gray_dark_shiny}
        />
      </group>
      {/* Default wheels - hide when another wheel is selected */}
      <group visible={showDefaultWheels}>
        <group position={[0.728, 0.26, 1.685]}>
          <mesh geometry={nodes.Plane121.geometry} material={materials.tire} />
          <mesh geometry={nodes.Plane121_1.geometry} material={materials['rim_metal chrome']} />
          <mesh geometry={nodes.Plane121_2.geometry} material={materials.wheel_rim} />
          <mesh geometry={nodes.Plane121_3.geometry} material={materials.red_metallic} />
          <mesh geometry={nodes.Plane121_4.geometry} material={materials.metal_gray_mid} />
          <mesh geometry={nodes.Plane121_5.geometry} material={materials.plastic_shiny} />
          <mesh geometry={nodes.Plane121_6.geometry} material={materials.disc} />
        </group>
        <group position={[0.728, 0.26, -1.563]}>
          <mesh geometry={nodes.Plane121.geometry} material={materials.tire} />
          <mesh geometry={nodes.Plane121_1.geometry} material={materials['rim_metal chrome']} />
          <mesh geometry={nodes.Plane121_2.geometry} material={materials.wheel_rim} />
          <mesh geometry={nodes.Plane121_3.geometry} material={materials.red_metallic} />
          <mesh geometry={nodes.Plane121_4.geometry} material={materials.metal_gray_mid} />
          <mesh geometry={nodes.Plane121_5.geometry} material={materials.plastic_shiny} />
          <mesh geometry={nodes.Plane121_6.geometry} material={materials.disc} />
        </group>
        <group position={[-0.725, 0.26, 1.685]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh geometry={nodes.Plane121.geometry} material={materials.tire} />
          <mesh geometry={nodes.Plane121_1.geometry} material={materials['rim_metal chrome']} />
          <mesh geometry={nodes.Plane121_2.geometry} material={materials.wheel_rim} />
          <mesh geometry={nodes.Plane121_3.geometry} material={materials.red_metallic} />
          <mesh geometry={nodes.Plane121_4.geometry} material={materials.metal_gray_mid} />
          <mesh geometry={nodes.Plane121_5.geometry} material={materials.plastic_shiny} />
          <mesh geometry={nodes.Plane121_6.geometry} material={materials.disc} />
        </group>
        <group position={[-0.725, 0.26, -1.563]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh geometry={nodes.Plane121.geometry} material={materials.tire} />
          <mesh geometry={nodes.Plane121_1.geometry} material={materials['rim_metal chrome']} />
          <mesh geometry={nodes.Plane121_2.geometry} material={materials.wheel_rim} />
          <mesh geometry={nodes.Plane121_3.geometry} material={materials.red_metallic} />
          <mesh geometry={nodes.Plane121_4.geometry} material={materials.metal_gray_mid} />
          <mesh geometry={nodes.Plane121_5.geometry} material={materials.plastic_shiny} />
          <mesh geometry={nodes.Plane121_6.geometry} material={materials.disc} />
        </group>
      </group>
      <mesh
        geometry={nodes.brakeFL.geometry}
        material={materials["red_metallic.001"]}
        position={[0.912, 0.257, 1.529]}
      />
      <mesh
        geometry={nodes.brakeRL.geometry}
        material={materials["red_metallic.001"]}
        position={[0.912, 0.257, -1.718]}
      />
      <mesh
        geometry={nodes.brakeFR.geometry}
        material={materials["red_metallic.001"]}
        position={[-0.905, 0.257, 1.529]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.brakeRR.geometry}
        material={materials["red_metallic.001"]}
        position={[-0.905, 0.257, -1.718]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <group
        position={[-0.399, 1.087, -0.315]}
        rotation={[2.902, 0, 0]}
        scale={-1}
      >
        <mesh
          geometry={nodes.Plane088.geometry}
          material={materials["stitches_white.001"]}
        />
        <mesh
          geometry={nodes.Plane088_1.geometry}
          material={materials["stitches_blue.001"]}
        />
        <mesh
          geometry={nodes.Plane088_2.geometry}
          material={materials.leather_red}
        />
        <mesh
          geometry={nodes.Plane088_3.geometry}
          material={materials.leather_gray}
        />
        <mesh
          geometry={nodes.Plane088_4.geometry}
          material={materials.leather_black}
        />
        <mesh
          geometry={nodes.Plane088_5.geometry}
          material={materials.plastic_black_glossy}
        />
        <mesh
          geometry={nodes.Plane088_6.geometry}
          material={materials.carbon_fiber}
        />
        <mesh
          geometry={nodes.Plane088_7.geometry}
          material={materials["plastic_shiny.001"]}
        />
      </group>
      <group
        position={[0.404, 1.087, -1.156]}
        rotation={[2.902, 0, 0]}
        scale={-1}
      >
        <mesh
          geometry={nodes.Plane001.geometry}
          material={materials.stitches_white}
        />
        <mesh
          geometry={nodes.Plane001_1.geometry}
          material={materials.stitches_blue}
        />
        <mesh
          geometry={nodes.Plane001_2.geometry}
          material={materials.leather_red}
        />
        <mesh
          geometry={nodes.Plane001_3.geometry}
          material={materials.leather_gray}
        />
        <mesh
          geometry={nodes.Plane001_4.geometry}
          material={materials.leather_black}
        />
        <mesh
          geometry={nodes.Plane001_5.geometry}
          material={materials.plastic_black_glossy}
        />
        <mesh
          geometry={nodes.Plane001_6.geometry}
          material={materials.carbon_fiber}
        />
        <mesh
          geometry={nodes.Plane001_7.geometry}
          material={materials["plastic_shiny.001"]}
        />
      </group>
      <group
        position={[-0.391, 1.087, -1.156]}
        rotation={[2.902, 0, 0]}
        scale={-1}
      >
        <mesh
          geometry={nodes.Plane001.geometry}
          material={materials.stitches_white}
        />
        <mesh
          geometry={nodes.Plane001_1.geometry}
          material={materials.stitches_blue}
        />
        <mesh
          geometry={nodes.Plane001_2.geometry}
          material={materials.leather_red}
        />
        <mesh
          geometry={nodes.Plane001_3.geometry}
          material={materials.leather_gray}
        />
        <mesh
          geometry={nodes.Plane001_4.geometry}
          material={materials.leather_black}
        />
        <mesh
          geometry={nodes.Plane001_5.geometry}
          material={materials.plastic_black_glossy}
        />
        <mesh
          geometry={nodes.Plane001_6.geometry}
          material={materials.carbon_fiber}
        />
        <mesh
          geometry={nodes.Plane001_7.geometry}
          material={materials["plastic_shiny.001"]}
        />
      </group>
      <group position={[0.422, 1.087, -0.318]} rotation={[-0.239, 0, 0]}>
        <mesh
          geometry={nodes.Plane001.geometry}
          material={materials.stitches_white}
        />
        <mesh
          geometry={nodes.Plane001_1.geometry}
          material={materials.stitches_blue}
        />
        <mesh
          geometry={nodes.Plane001_2.geometry}
          material={materials.leather_red}
        />
        <mesh
          geometry={nodes.Plane001_3.geometry}
          material={materials.leather_gray}
        />
        <mesh
          geometry={nodes.Plane001_4.geometry}
          material={materials.leather_black}
        />
        <mesh
          geometry={nodes.Plane001_5.geometry}
          material={materials.plastic_black_glossy}
        />
        <mesh
          geometry={nodes.Plane001_6.geometry}
          material={materials.carbon_fiber}
        />
        <mesh
          geometry={nodes.Plane001_7.geometry}
          material={materials["plastic_shiny.001"]}
        />
      </group>
      <group position={[0.01, 0.453, -1.143]}>
        <mesh
          geometry={nodes.Plane069.geometry}
          material={materials["plastic black_glossy.001"]}
        />
        <mesh
          geometry={nodes.Plane069_1.geometry}
          material={materials["carbon_fiber.001"]}
        />
        <mesh
          geometry={nodes.Plane069_2.geometry}
          material={materials.plastic_shiny}
        />
        <mesh
          geometry={nodes.Plane069_3.geometry}
          material={materials.screen2}
        />
        <mesh
          geometry={nodes.Plane069_4.geometry}
          material={materials["plastic_black_glossy.001"]}
        />
        <mesh
          geometry={nodes.Plane069_5.geometry}
          material={materials["leather_red.001"]}
        />
        <mesh
          geometry={nodes.Plane069_6.geometry}
          material={materials.screen}
        />
        <mesh
          geometry={nodes.Plane069_7.geometry}
          material={materials["leather_black.001"]}
        />
        <mesh
          geometry={nodes.Plane069_8.geometry}
          material={materials.illum_orange}
        />
        <mesh
          geometry={nodes.Plane069_9.geometry}
          material={materials["stitches_white.002"]}
        />
        <mesh
          geometry={nodes.Plane069_10.geometry}
          material={materials["stitches_blue.002"]}
        />
        <mesh
          geometry={nodes.Plane069_11.geometry}
          material={materials.emission}
        />
        <mesh
          geometry={nodes.Plane069_12.geometry}
          material={materials["self_illuminated_red.001"]}
        />
        <mesh
          geometry={nodes.Plane069_13.geometry}
          material={materials.red_metallic}
        />
        <mesh
          geometry={nodes.Plane069_14.geometry}
          material={materials["Plastic_black_shiny.001"]}
        />
        <mesh
          geometry={nodes.Plane069_15.geometry}
          material={materials["leather_gray.light"]}
        />
        <mesh
          geometry={nodes.Plane069_16.geometry}
          material={materials.glass_clear}
        />
      </group>
      <group
        position={[0.44, 0.853, 0.402]}
        rotation={[1.936, 0, 0]}
        scale={0.202}
      >
        <mesh
          geometry={nodes.Circle003.geometry}
          material={materials.plastic_black_glossy}
        />
        <mesh
          geometry={nodes.Circle003_1.geometry}
          material={materials.self_illuminated_red}
        />
        <mesh
          geometry={nodes.Circle003_2.geometry}
          material={materials.stitches_blue}
        />
      </group>
      <mesh
        geometry={nodes.rocker_L.geometry}
        material={materials.rocker1}
        position={[1.013, 0.262, 0.064]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.185, 1, 0.238]}
      />
      <mesh
        geometry={nodes.rocker_R.geometry}
        material={materials.rocker1}
        position={[-1.013, 0.262, 0.064]}
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
        />
      </mesh>

      <mesh
        geometry={nodes.Plane060.geometry}
        material={materials.plastic_black_glossy}
      />
      <mesh
        geometry={nodes.Plane060_1.geometry}
        material={materials.leather_black}
      />
      <mesh
        geometry={nodes.Plane060_2.geometry}
        material={materials.carbon_fiber}
      />
      <mesh
        geometry={nodes.Plane060_3.geometry}
        material={materials.plastic_gray_mid_glossy}
      />
      <mesh
        geometry={nodes.Plane060_4.geometry}
        material={materials["carpaint black"]}
      />
      <mesh
        geometry={nodes.Plane060_5.geometry}
        material={materials.leather_red}
      />
      <mesh
        geometry={nodes.Plane060_6.geometry}
        material={materials.Plastic_black_shiny}
      />
    </group>
  );
}

useGLTF.preload("/model/carWithStickerModel.glb");
