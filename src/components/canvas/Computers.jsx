/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  try {
    const computer = useGLTF("/desktop_pc/scene.gltf");

    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={0.8}
          castShadow
          shadow-mapSize-width={512}
          shadow-mapSize-height={512}
        />
        <pointLight intensity={15} />

        <primitive
          object={computer.scene}
          scale={isMobile ? 0.5 : 0.8}
          position={isMobile ? [0, -3, -2.1] : [0, -3.65, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    );
  } catch (error) {
    console.error("Failed to load model:", error);
    return null; // Prevents crashing the app
  }
};


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust width as needed
    };
  
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense for fallback loader */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Orbit Controls */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* 3D Computer Model */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload Assets */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
