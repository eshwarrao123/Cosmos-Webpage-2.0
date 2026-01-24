import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sparkles } from '@react-three/drei';

const RotatingPlanet = ({ color, ringConfig }) => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <group>
            <mesh ref={meshRef}>
                <sphereGeometry args={[2.5, 64, 64]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.7}
                    metalness={0.2}
                    emissive={color}
                    emissiveIntensity={0.1}
                />
            </mesh>
            {ringConfig && (
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[ringConfig.innerRadius, ringConfig.outerRadius, 64]} />
                    <meshStandardMaterial
                        color={color}
                        opacity={ringConfig.opacity}
                        transparent
                        side={2}
                    />
                </mesh>
            )}
        </group>
    );
};

const Planet3D = ({ color, ringConfig }) => {
    return (
        <div style={{ width: '100%', height: '400px', borderRadius: '15px', overflow: 'hidden', background: 'black' }}>
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fail={true} />
                <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.5} />
                <RotatingPlanet color={color} ringConfig={ringConfig} />
                <OrbitControls enableZoom={false} autoRotate={false} />
            </Canvas>
        </div>
    );
};

export default Planet3D;
