import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleGalaxy = () => {
    const pointsRef = useRef();

    // Generate Galaxy Particles
    const particles = useMemo(() => {
        const count = 15000; // Increased density
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        // Reference Colors from image
        const colorCore = new THREE.Color("#ffeedd"); // Bright warm core
        const colorInner = new THREE.Color("#ff85a1"); // Pink/Magenta
        const colorMiddle = new THREE.Color("#9d4edd"); // Purple
        const colorOuter = new THREE.Color("#3a0ca3"); // Deep Blue

        for (let i = 0; i < count; i++) {
            // Spiral geometry
            const radius = Math.random() * 8 + 0.5;
            const spinAngle = radius * 0.8;
            const branches = 3;
            const branchAngle = (i % branches) * ((2 * Math.PI) / branches);

            // Randomness factor (higher = more scattered/nebula-like)
            const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (0.5 + radius * 0.1);
            const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (0.5 + radius * 0.1);
            const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (0.5 + radius * 0.1);

            const x = Math.cos(branchAngle + spinAngle) * radius + randomX;
            const y = randomY * 1.5; // Thickness
            const z = Math.sin(branchAngle + spinAngle) * radius + randomZ;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Complex Color Mixing
            let mixedColor;
            if (radius < 2.5) {
                mixedColor = colorCore.clone().lerp(colorInner, radius / 2.5);
            } else if (radius < 5) {
                mixedColor = colorInner.clone().lerp(colorMiddle, (radius - 2.5) / 2.5);
            } else {
                mixedColor = colorMiddle.clone().lerp(colorOuter, (radius - 5) / 4);
            }

            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;

            // Size variation for "Nebula" vs "Star" look
            // Core stars are smaller/denser, outer nebula particles are larger/softer
            sizes[i] = Math.random() * 0.15 + 0.05;
        }

        return { positions, colors, sizes };
    }, []);

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * 0.04;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particles.colors.length / 3}
                    array={particles.colors}
                    itemSize={3}
                />
                {/* Note: Standard pointsMaterial doesn't support per-vertex sizes easily without a custom shader, 
                     so we rely on attenuation and randomness in position density for texture. 
                     We stick to standard material for compatibility/simplicity. */}
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                sizeAttenuation={true}
                depthWrite={false}
                vertexColors={true}
                blending={THREE.AdditiveBlending}
                transparent={true}
                opacity={0.8}
            />
        </points>
    );
};

const Galaxy3D = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
            background: 'radial-gradient(circle at center, #0f0518 0%, #000000 100%)' // Darker purple-black BG
        }}>
            {/* Tilted camera view to match reference image perspective */}
            <Canvas camera={{ position: [0, 6, 8], fov: 55 }}>
                <ambientLight intensity={0.5} />
                <ParticleGalaxy />
            </Canvas>
        </div>
    );
};

export default Galaxy3D;
