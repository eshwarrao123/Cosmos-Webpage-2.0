import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import GravityCalculator from '../components/GravityCalculator';
import './OrbitalMechanics.css';

const OrbitalMechanics = () => {
    return (
        <div className="mechanics-page">
            <motion.h1
                className="page-title center-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Orbital Mechanics
            </motion.h1>

            <div className="mechanics-content">
                <GlassCard className="mechanics-section">
                    <h2>Kepler's Laws of Planetary Motion</h2>
                    <br />
                    <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                        <li><strong>1. The Law of Ellipses:</strong> Planets move in elliptical orbits with the Sun at one focus.</li>
                        <li><strong>2. The Law of Equal Areas:</strong> A line connecting a planet to the Sun sweeps out equal areas in equal times.</li>
                        <li><strong>3. The Law of Harmonies:</strong> The square of the orbital period is proportional to the cube of the semi-major axis (T² ∝ a³).</li>
                    </ul>
                    <div className="orbit-visual">
                        <div className="sun"></div>
                        {/* Static Ellipse Path */}
                        <div
                            style={{
                                width: '260px',
                                height: '160px',
                                border: '1px dashed rgba(255,255,255,0.3)',
                                borderRadius: '50%',
                                position: 'absolute'
                            }}
                        ></div>

                        {/* Animated Planet on Elliptical Path */}
                        <motion.div
                            className="planet-dot"
                            style={{
                                top: '50%',
                                left: '50%',
                                marginTop: '-7.5px', // Half of height (15px)
                                marginLeft: '-7.5px', // Half of width (15px)
                            }}
                            animate={{
                                x: Array.from({ length: 61 }, (_, i) => {
                                    const angle = (i / 60) * 2 * Math.PI;
                                    return Math.cos(angle) * 130; // Radius X = 130 (Width 260/2)
                                }),
                                y: Array.from({ length: 61 }, (_, i) => {
                                    const angle = (i / 60) * 2 * Math.PI;
                                    return Math.sin(angle) * 80;  // Radius Y = 80 (Height 160/2)
                                })
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                    </div>
                </GlassCard>

                <GlassCard className="mechanics-section">
                    <h2>Newton’s Law of Universal Gravitation</h2>
                    <br />
                    <p>
                        Every particle of matter in the universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.
                    </p>
                    <p style={{ fontFamily: 'monospace', background: 'rgba(0,0,0,0.5)', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
                        F = G * (m1 * m2) / r²
                    </p>
                </GlassCard>

                <GravityCalculator />
            </div>
        </div>
    );
};

export default OrbitalMechanics;
